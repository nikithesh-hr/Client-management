"use strict";

const Boom = require("@hapi/boom");
const Meetdetails = require("../schemas/meetdetails");
module.exports = async (request, h) => {
  const {
    params,
    auth: { credentials },
  } = request;
  const { current_user } = credentials;

  try {
    const meetdetail = await Meetdetails.findOneAndUpdate(
      { _id: params.id, user_id: current_user.id },

      { $set: { visibility: false } },
      options
    );

    return {
      statusCode: 204,
      message: "meetdetail removed",
      data: {
        meetdetail,
      },
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
