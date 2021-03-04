"use strict";

const Joi = require("@hapi/joi").extend(require("@hapi/joi-date"));

module.exports = {
  params: Joi.object({
    start_date: Joi.date().format("YYYY-MM-DD").utc().required(),
    end_date: Joi.date().format("YYYY-MM-DD").utc().required()
  }),
};
