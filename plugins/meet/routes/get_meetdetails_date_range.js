"use strict";

module.exports = {
  method: "GET",
  path: "/api/meet/get-meetdetails-datebyrange/{start_date}&&{end_date}",
  options: {
    tags: ["api"],
    description: "get meetdetails by daterange",
    auth: "jwt",
    validate: require("../validations/get_meetdetails_date_range"),
  },
  handler: require("../handlers/get_meetdetails_date_range"),
};
