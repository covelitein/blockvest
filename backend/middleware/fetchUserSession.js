import User from "../database/models/userModel.js"
import { generateAccessToken, verifyRefreshToken } from "../jwtAuth/generateTokens.js"
import { verifyAccessToken } from "../jwtAuth/generateTokens.js"

const fetchUserSession = async(req, res, next) => {

    // fetch access and refresh tokens
    const { accessToken, refreshToken } = req.cookies

    // validate access if it exists
    if(!accessToken) return next()

    // verify access token
    const decoded = verifyAccessToken(accessToken)

    if (decoded) {
        req.user = decoded 
        return next()
    } 

    // verify refresh token
    const refreshDecoded = verifyRefreshToken(refreshToken)
    if (!refreshDecoded) return next()

    // fetch email payload 
    const email = refreshDecoded.email
    
    // find user with email in database
    const user = await User.findOne({
        where: {
            email,
        }
    })
    
    if(!user) return next()

    // generate new token
    const newAccessToken = generateAccessToken(user)

     res.cookie("accessToken", newAccessToken, {
       httpOnly: true,
       maxAge: 1 * 60 * 60 * 1000,
       secure: process.env.ENVIRONMENT === "production",
       sameSite: "lax",
     });

     req.user = verifyAccessToken(newAccessToken)
     next()
}

export {fetchUserSession}