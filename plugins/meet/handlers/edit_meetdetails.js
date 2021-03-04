"use strict";

const Boom = require("@hapi/boom");
const Meetdetails = require("../schemas/meetdetails");
module.exports = async (request, h) => {
  const { payload, params } = request;

 
  const options = { useFindAndModify: false, new: true };
  try {
    const meetdetail = await Meetdetails.findOneAndUpdate(
      { _id: params.id },
      payload,
      options
    );

    if (!meetdetail) {
      return Boom.badRequest("invalid meetdetail id");
    }

    return {
      statusCode: 204,
      message: "meetdetail updated!",
      meetdetail,
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
