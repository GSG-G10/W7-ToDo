const Joi = require('joi');

const loginSchema = Joi.object({
  username: Joi.string().email().min(3).max(30)
    .required(),
  password: Joi.string().min(7).max(30).required(),
});

const singUPSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().min(7).max(30)
    .required(),
  password: Joi.string().min(7).max(30).required(),
  confirmPassword: Joi.string().min(7).max(30).required(),
});

module.exports = { loginSchema, singUPSchema };
