"use strict";

const Joi = require("@hapi/joi").extend(require("@hapi/joi-date"));

module.exports = {
  params: Joi.object({
    date_of_meet: Joi.date().format("YYYY-MM-DD").utc().required()
   }),
};
