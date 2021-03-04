"use strict";

const mongoose = require("mongoose");

mongoose.Promise = require("bluebird");
const { Schema } = mongoose;

const valid_permissions = ["moderator", "superadmin", "admin"];

//Define a schema
const schema = new Schema(
  {
    first_name: { type: String, required: true, lowercase: true },
    second_name: { type: String, required: true, lowercase: true },
    user_name: { type: String, required: true, lowercase: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    permission: { type: String, enum: valid_permissions, required: true },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("users", schema);
