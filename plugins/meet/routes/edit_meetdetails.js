"use strict";

module.exports = {
  method: "PATCH",
  path: "/api/meet/editmeetdetailsdetails/{id}",
  options: {
    tags: ["api"],
    description: "eddit_meetdetails",
    auth: "jwt",
    plugins: { hacli: { permissions: ["admin"] } },
    validate: require("../validations/edit_meetdetails"),
  },
  handler: require("../handlers/edit_meetdetails"),
};
