"use strict";

module.exports = {
  method: "POST",
  path: "/api/meet/addmeetdetails",
  options: {
    tags: ["api"],
    description: "add new meet with client",
     auth: "jwt",
     plugins: { hacli: { permissions: ["admin"] } },
    validate: require("../validations/add_meetdetails"),
  },
  handler: require("../handlers/add_meetdetails"),
};
