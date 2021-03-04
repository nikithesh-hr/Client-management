const Joi = require("@hapi/joi").extend(require("@hapi/joi-date"));


const contact = Joi.object({
  title: Joi.string().required(),
  name: Joi.string().required(),
  email: Joi.string().required(),
  contact_number : Joi.string().required(),
  designation : Joi.string().required()
});

module.exports = {
  payload: Joi.object({
    date_of_meet: Joi.date().format("YYYY-MM-DD").utc().required(),
    place_of_meet: Joi.string().required(),
    point_of_contact : Joi.array().items(contact),
    follow_up_person: Joi.string().required(),
    remarks: Joi.string().required(),
    client_id :Joi.string().required()
  }),
};

 