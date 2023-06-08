import Joi from 'joi'
import passwordComplexity from 'joi-password-complexity'
import JoiPhoneNumber from 'joi-phone-number'
import jwt from 'jsonwebtoken'

const joiExt = Joi.extend(JoiPhoneNumber);

const signUpValidation = (body)=> {
  
    const schema = Joi.object({
      fullname: Joi.string().required().label("full name"),
      username: Joi.string().required().label("user name"),
      email: Joi.string().email().required().label("email"),
      address: Joi.string().required().label("address"),
      phonenumber: joiExt
        .string()
        .phoneNumber()
        .required()
        .label("phone number"),
      password: passwordComplexity().required().label("password"),
    });

    return schema.validate(body)
} 

const signInValidation = (body) => {

  const schema = Joi.object({
    email: Joi.string().email().required().label("email"),
    password: Joi.string().required().label("password"),
  });

  return schema.validate(body);
}




export { signInValidation, signUpValidation };