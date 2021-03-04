"use strict";

const Boom = require("@hapi/boom");
const Meetdetails = require("../schemas/meetdetails");



module.exports = async (request, h) => {
    
  try {
    const { params } = request;
    const meetdetail = await Meetdetails.findOne( { 
      _id : params.id });

    return {
      statusCode: 200,
      message: `meet details by id`,
      data: {
        meetdetail,
      },
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
