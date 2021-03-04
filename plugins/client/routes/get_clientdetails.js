"use strict";

module.exports = {
  method: "GET",
  path: "/api/client/getclientdetails",
  options: {
    tags: ["api"],
    description: "get clientdetails",
    auth: "jwt",
    plugins: { hacli: false },
  },
  handler: require("../handlers/get_clientdetails"),
};
