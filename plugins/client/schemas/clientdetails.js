"use strict";

const mongoose = require("mongoose");

mongoose.Promise = require("bluebird");
const { Schema } = mongoose;
const status_c = ['visited', 'waiting_for_closure', 'not_visited', 'closed'];
const syllabus_c = ['CBSE','ICSE', 'SSLC', 'IGCSE', 'PU', 'DEGREE'];
 
//Define a schema
const schema = new Schema(
  {
    client_name: { type: String, required: true },
    address: { type: String, required: true },
    client_contact_number: { type: String, required: true },
    strength_of_students: { type: Number, required: true },
    status: { type: String, enum: status_c},
    remarks: { type: String, required: true },
    point_of_contact:   [
      {
        _id: false,
        name: { type: String, required: false },
        email: { type: String, required: false },
        contact_number : {type: String, required: false },
        designation : {type: String, required: false }
      }
    ]  ,
    syllabus: { type: String, enum: syllabus_c, required: true },
    email: { type: String, required: true },
    website: { type: String, required: true },
    date_of_meeting: { type: String, required: true },
    message: { type: String, required: true },
    visibility: { type: Boolean, required: false, default: true },
    
    follow_up_person: { type: String, required: true }
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("clientdetails", schema);
