"use strict";

module.exports = {
  method: "GET",
  path: "/api/meet/getmeetdetails",
  options: {
    tags: ["api"],
    description: "get meetdetails ",
    auth: "jwt",
  },
  handler: require("../handlers/get_meetdetails"),
};
