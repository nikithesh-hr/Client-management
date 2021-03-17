"use strict";

const Joi = require('joi');
const contact = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  contact_number : Joi.string().required(),
  designation : Joi.string().required()
});


module.exports = {
  params: Joi.object({ id: Joi.string().required() }),
  payload: Joi.object({
    client_name: Joi.string() ,
    address: Joi.string() ,
    strength_of_students: Joi.number() ,
    client_contact_number: Joi.string() ,
    status: Joi.string().valid('visited', 'waiting_for_closure', 'not_visited', 'closed') ,
    remarks: Joi.string() ,
    point_of_contact: Joi.array().items(contact),
    follow_up_person: Joi.string() ,
    syllabus: Joi.string().valid('CBSE','ICSE', 'SSLC', 'IGCSE', 'PU', 'DEGREE') ,
    email: Joi.string() ,
    website: Joi.string() ,
    date_of_meeting: Joi.date().iso() ,
    message: Joi.string() ,
  }),
};
