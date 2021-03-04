"use strict";

module.exports = {
  method: "DELETE",
  path: "/api/meet/removemeetdetails/{id}",
  options: {
    tags: ["api"],
    description: "remove meetdetails",
    auth: "jwt",
    plugins: { hacli: { permissions: ["admin"] } },
    validate: require("../validations/remove_meetdetails"),
  },
  handler: require("../handlers/remove_meetdetails"),
};
