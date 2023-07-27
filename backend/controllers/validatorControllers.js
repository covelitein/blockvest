import { Sequelize } from "sequelize";
import bcrypt from "bcrypt";
import User from "../database/models/userModel.js";
import Joi from "joi";

export const checkUserName = async (req, res) => {
  const { username } = req.body;

  if(!username) return res.status(200).send({ error: "empty field!" });

  if(username.length < 4) return res.status(200).send({ error: "username is too short!" });

  const user = await User.findOne({
    where: {
        username
    }
  })

  if(user) return res.status(200).send({ error: 'username unavailable' })

  return res.status(200).send({ message:'username available' })
};

export const checkEmail = async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("email"),
  })

  const { error } = schema.validate(req.body)
  if (error) return res.status(200).send({ error: error.details[0].message })

  return res.status(200).send({ message: 'valid email' })
}