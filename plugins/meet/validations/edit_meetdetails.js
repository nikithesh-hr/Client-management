const Joi = require("@hapi/joi").extend(require("@hapi/joi-date"));


const contact = Joi.object({
  title: Joi.string(),
  name: Joi.string(),
  email: Joi.string(),
  contact_number : Joi.string(),
  designation : Joi.string() 
});

module.exports = {
  params: Joi.object({ id: Joi.string().required() }), 
  payload: Joi.object({
    person_meeting_client: Joi.string() ,
    date_of_meet: Joi.date().format("YYYY-MM-DD").utc() ,
    place_of_meet: Joi.string() ,
    point_of_contact : Joi.array().items(contact),
    follow_up_person: Joi.string()  ,
    remarks: Joi.string() 
  }),
};
 