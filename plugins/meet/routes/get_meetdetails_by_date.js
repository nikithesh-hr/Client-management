"use strict";

module.exports = {
  method: "GET",
  path: "/api/meet/getmeetdetailsdate/{date_of_meet}",
  options: {
    tags: ["api"],
    description: "get meetdetails by date",
    auth: "jwt",
    validate: require("../validations/get_meetdetails_by_date"),
  },
  handler: require("../handlers/get_meetdetails_by_date"),
};
