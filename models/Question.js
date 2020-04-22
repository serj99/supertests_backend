const mongoose = require("mongoose");

const Question = mongoose.model(
  "Question",
  new mongoose.Schema({
    content: String,
    answer: Number,
    options: [],
  })
);

module.exports = Question;

