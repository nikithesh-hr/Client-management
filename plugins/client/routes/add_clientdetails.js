"use strict";

module.exports = {
  method: "POST",
  path: "/api/client/addclientdetails",
  options: {
    tags: ["api"],
    description: "add new client",
    auth: "jwt",
    plugins: { hacli: { permissions: ["admin"] } },
    validate: require("../validations/add_clientdetails"),
  },
  handler: require("../handlers/add_clientdetails"),
};
