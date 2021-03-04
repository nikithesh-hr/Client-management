
"use strict";

const Boom = require("@hapi/boom");
const Clientdetails = require("../schemas/clientdetails");
 

module.exports = async (request, h) => {
  try {
    const { params } = request;
    const clientdetails = await Clientdetails.find({ 
        _id : params.id });

    return {
      statusCode: 200,
      message: `client details by id`,
      data: {
        clientdetails,
      },
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
