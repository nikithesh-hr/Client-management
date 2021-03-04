"use strict";

module.exports = {
  method: "GET",
  path: "/api/client/getclientdetails/{id}",
  options: {
    tags: ["api"],
    description: "get clientdetails by id",
    auth: "jwt",
    plugins: { hacli: false },
    validate: require("../validations/get_clientdetails_by_id")
  },
  handler: require("../handlers/get_cliendetails_by_id"),
};
