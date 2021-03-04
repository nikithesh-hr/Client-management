"use strict";

module.exports = {
  method: "DELETE",
  path: "/api/client/removeclientdetails/{id}",
  options: {
    tags: ["api"],
    description: "remove announcement",
    auth: "jwt",
    plugins: { hacli: { permissions: ["admin"] } },
    validate: require("../validations/remove_clientdetails"),
  },
  handler: require("../handlers/remove_clientdetails"),
};
