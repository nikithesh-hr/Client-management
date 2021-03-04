"use strict";
exports.plugin = {
  name: "client",
  version: "1.0.0",
  register: (server, options) => {
    // routes
    server.route(require("./routes/add_clientdetails"));
    server.route(require("./routes/update_clientdetails"));
    server.route(require("./routes/get_clientdetails"));
    server.route(require("./routes/get_clientdetails_by_id"));
    server.route(require("./routes/remove_clientdetails"));
  },
};
