"use strict";

const Boom = require("@hapi/boom");
const Meetdetails = require("../schemas/meetdetails");


 
module.exports = async (request, h) => {
 
  const { params } = request;
  try {
    const meetdetail = await Meetdetails.find({date_of_meet : params.date_of_meet});

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
