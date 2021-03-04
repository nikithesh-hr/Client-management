"use strict";

const Boom = require("@hapi/boom");
const Clientdetails = require("../schemas/clientdetails");

module.exports = async (request, h) => {
  const {
    payload,
    params 
  } = request;
   
  const filter = {
    _id: params.id 
     };

  try {
    const clientdetails = await Clientdetails.findOneAndUpdate(filter, payload);
    console.log(clientdetails,"clientdetails");
    
    if (!clientdetails) {
      return Boom.badRequest("invalid clientdetails id");
    }

    return {
      statusCode: 204,
      message: "clientdetails updated!",
      clientdetails,
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
