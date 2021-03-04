"use strict";
exports.plugin = {
  name: "meet",
  version: "1.0.0",
  register: (server, options) => {
    // routes
    server.route(require("./routes/add_meetdetails"));
    server.route(require("./routes/edit_meetdetails"));
    server.route(require("./routes/get_meetdetails"));
    server.route(require("./routes/get_meetdetails_by_id"));
    server.route(require("./routes/get_meetdetails_by_date"));
    server.route(require("./routes/get_meetdetails_date_range"));
    server.route(require("./routes/remove_meetdetails"));
  },
};
