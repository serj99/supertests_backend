const mongoose = require("mongoose");

const Test = mongoose.model(
  "Test",
  new mongoose.Schema({
    name: String,
    duration: String,
    questions: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question"
    }]
  })
);

module.exports = Test;
