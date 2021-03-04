"use strict";

module.exports = {
  method: "POST",
  path: "/api/users/add-superadmin",
  options: {
     tags: ["api"],
     description: "create a new user",
     auth: "jwt",
     validate: require("../validations/add_user.js"),
  },
  handler: require("../handlers/add_superadmin"),
};
