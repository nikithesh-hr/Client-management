"use strict";

const Joi = require("@hapi/joi");

module.exports = {
  payload: Joi.object({
    first_name: Joi.string().required(),
    second_name: Joi.string().required(),
    user_name: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().required(),
  }),
};
