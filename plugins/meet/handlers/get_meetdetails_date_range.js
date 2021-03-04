"use strict";

const Boom = require("@hapi/boom");
const Meetdetails = require("../schemas/meetdetails");


module.exports = async (request, h) => {
  
 try {
 
    const meetdetail = await Meetdetails.find(
      {"date_of_meet" : { $gte : new  Date(request.params.start_date), 
        $lte:  new  Date(request.params.end_date) }}, function(err, data) {
          if(err)
            console.log(err); 
        });
   

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
