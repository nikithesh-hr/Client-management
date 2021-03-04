"use strict";

module.exports = {
  method: "POST",
  path: "/api/users/add-moderator",
  options: {
    tags: ["api"],
    description: "create a new user",
    auth: "jwt",
    plugins: { hacli: { permissions: ["superadmin"] } },
    validate: require("../validations/add_user.js"),
  },
  handler: require("../handlers/add_moderator"),
};
