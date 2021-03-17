"use strict";

const Joi = require('joi');
module.exports = {
  params: Joi.object({
    start_date: Joi.date().iso().required(),
    end_date: Joi.date().iso().required()
  }),
};
