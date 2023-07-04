const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const commentSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    comment: { type: String },
  },
  { timestamps: true }
);

const movieSchema = new Schema({
  title: { type: String },
  actor: [{ type: String }],
  details: { type: String },
  poster: { type: String },
  director: { type: String },
  nowShowing: { type: Boolean },
  comments: [commentSchema],
  genre: { type: String },
});

module.exports = model("Movie", movieSchema);
