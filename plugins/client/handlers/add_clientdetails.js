"use strict";

const Boom = require("@hapi/boom");
const Clientdetails = require("../schemas/clientdetails");

module.exports = async (request, h) => {
  const {
    payload 
  } = request;
 
  const data = payload;

  try {
    const clientdetail = await Clientdetails.create(data);

    return {
      statusCode: 201,
      message: `clientdetails added`,
      data: {
        clientdetail,
      },
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
