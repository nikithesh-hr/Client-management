"use strict";

const Boom = require("@hapi/boom");
const Meetdetails = require("../schemas/meetdetails");

module.exports = async (request, h) => {
  try {
    const meetdetail = await Meetdetails.find();

    return {
      statusCode: 200,
      message: `meet details`,
      data: {
        meetdetail,
      },
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
