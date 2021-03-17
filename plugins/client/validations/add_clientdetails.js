const Joi =  require('joi');


const contact = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  contact_number : Joi.string().required(),
  designation : Joi.string().required()
});

module.exports = {
  payload: Joi.object({
    client_name: Joi.string().required(),
    address: Joi.string().required(),
    strength_of_students: Joi.number().required(),
    client_contact_number: Joi.string().required(),
    status: Joi.string().required().valid('visited', 'waiting_for_closure', 'not_visited', 'closed'),
    remarks: Joi.string().required(),
    point_of_contact: Joi.array().items(contact),
    follow_up_person: Joi.string().required(),
    syllabus: Joi.string().required().valid('CBSE','ICSE', 'SSLC', 'IGCSE', 'PU', 'DEGREE'),
    email: Joi.string().required(),
    website: Joi.string().required(),
    date_of_meeting: Joi.date().iso().required(),
    message: Joi.string().required(),
  }),
};
