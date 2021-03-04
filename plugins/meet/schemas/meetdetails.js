"use strict";
const mongoose = require("mongoose");

mongoose.Promise = require("bluebird");
const { Schema } = mongoose;
 

//Define a schema
const schema = new Schema({
 
  date_of_meet:{ type: String, required: true }  ,
  place_of_meet: { type: String, required: true },
  point_of_contact:   [
     {
      _id: false,
      name: { type: String, required: false },
      email: { type: String, required: false },
      contact_number : {type: String, required: false },
      designation : {type: String, required: false }
     }
  ]  ,
  visibility: { type: Boolean, required: false, default: true },
  remarks: { type: String, required: true },
  client_id :{type: String, required: true }

});

module.exports = mongoose.model("meetdetails", schema);
