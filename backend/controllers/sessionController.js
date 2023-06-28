import { Sequelize } from 'sequelize'
import bcrypt from 'bcrypt'
import { signUpValidation, signInValidation } from '../utils/validator.js'
import Token from '../database/models/tokenModel.js'
import User from '../database/models/userModel.js'
import { generateAccessToken, generateRefreshToken } from '../jwtAuth/generateTokens.js'


const registerHandler = async (req, res)=> {
    try {

        // validate users data
        const { error } = signUpValidation(req.body)
        if (error) return res.status(401).send({ error: error.details[0].message })

        // destructure useful data from the request

        const {
            username,
            email,
            phonenumber,
            password
        } = req.body

        // verify if a user with this unique data exists

        const user = await User.findOne({
            where: {
                [Sequelize.Op.or]: [
                  {username},
                  {email},
                  {phonenumber}
                ]
            },
        })

        if (user) 
        return res
        .status(402)
        .send({ message: "username, email, or phone number taken" })

        const salt = await bcrypt.genSalt(10)

        const hashedPassword = await bcrypt.hash(password, salt)

        await User.create({
          ...req.body,
          password: hashedPassword,
        });

        return res.status(200).send({ message: "Registration successful!" });

    } catch (err) {

        return res.status(500).send({ error: 'An error occured ' + err });

    }
}



const loginHandler = async (req, res)=> {

    try {

        // validate user data
        const { error } = signInValidation(req.body)
        if (error) return res.status(401).send({ error: error.details[0].message });

        // destructure useful data from request

        const { email, password } = req.body
        
        // check if user exists

        const user = await User.findOne({
            where: {
               email,
            },
        })

        if (!user) return res.status(401).send({ error: "user does not exist" })

        const verified = await bcrypt
        .compare(password, user.password)

        if (!verified) return res
         .status(401)
         .send({ message: "incorrect password" });

        const accessToken = generateAccessToken(user)
        const refreshToken = generateRefreshToken(user)

        const token = await Token.findOne({
            where: {
              [Sequelize.Op.or]: 
                [
                    { userId:user.uid }, 
                    { token: refreshToken }
                ],
            },
        });

        res.cookie("accessToken", accessToken, {
          httpOnly: true,
          maxAge: 1 * 60 * 60 * 1000,
          secure: process.env.ENVIRONMENT === "production",
          sameSite: "lax",
        });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 3 * 24 * 60 * 60 * 1000,
            secure: process.env.ENVIRONMENT === 'production',
            sameSite: 'lax'
        })

        if(token) {

            token.token = refreshToken
            token.valid = true
            await token.save();

        } else {

            await Token.create({
                userId: user.uid,
                token: refreshToken
            })

        }

        return res.status(200).send({ message: "login successful!" });

    } catch (err) {

        return res.status(500).send({ error: "An error occured " + err });

    }

}

const logoutHandler = async (req, res)=> {
    
    try {

        const token = await Token.findOne({
            where: {
                userId: req.user.userId,
            }
        })

        if(!token) return res.status(401).send({ error: "token not found" })

        token.valid = false
        await token.save()

        res.clearCookie("refreshToken")
        res.clearCookie("accessToken")

        res.status(200).send({ message: "Logout successful" })

    } catch (err) {

        return res.status(500).send({ error: "An error occured " + err });

    }

}


const getSessionHandler = (req, res) => {

    try {
        // fetch user session
        const userSession = req.user

        // send user session
        res.status(200).send({ session: userSession })

    } catch (err) {

         return res.status(500).send({ error: "An error occured " + err });

    }

}



export { 
    registerHandler, 
    loginHandler, 
    logoutHandler, 
    getSessionHandler 
};