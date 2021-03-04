"use strict";

module.exports = {
  method: "PATCH",
  path: "/api/client/updateclientdetails/{id}",
  options: {
    tags: ["api"],
    description: "update client details",
    auth: "jwt",
    plugins: { hacli: { permissions: ["admin"] } },
    validate: require("../validations/update_clientdetails"),
  },
  handler: require("../handlers/update_clientdetails"),
};
