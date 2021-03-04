"use strict";

exports.plugin = {
  name: "users",
  version: "1.0.0",
  register: (server, options) => {
    // routes
    
    server.route(require("./routes/add_admin"));
    server.route(require("./routes/add_moderator"));
    server.route(require("./routes/add_superadmin"));

  },
};
