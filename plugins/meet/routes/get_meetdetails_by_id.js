"use strict";

module.exports = {
  method: "GET",
  path: "/api/meet/getmeetdetails/{id}",
  options: {
    tags: ["api"],
    description: "get meetdetails by id ",
    auth: "jwt",
    validate: require("../validations/get_meetdetails_by_id")
  },
  handler: require("../handlers/get_meetdetails_by_id"),
};
