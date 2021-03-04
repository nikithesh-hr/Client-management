"use strict";

const Boom = require("@hapi/boom");
const Clientdetails = require("../schemas/clientdetails");

module.exports = async (request, h) => {
  const {
    params 
  } = request;
 
try {
    const clientdetails = await Clientdetails.findOneAndUpdate(
      { _id: params.id,
      },

      { $set: { visibility: false } }
    );
    return {
      statusCode: 204,
      message: "clientdetails removed",
      data: {
        clientdetails,
      },
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
