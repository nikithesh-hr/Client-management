"use strict";

const Boom = require("@hapi/boom");
const Meetdetails = require("../schemas/meetdetails");

module.exports = async (request, h) => {
  const {payload } = request;
 
  const data = payload;

  try {
    const meetdetail = await Meetdetails.create(data);

    return {
      statusCode: 201,
      message: `meetdetails added`,
      data: {
        meetdetail,
      },
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
