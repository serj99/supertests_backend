const mongoose = require("mongoose");

const Finishedtest = mongoose.model(
  "Finishedtest",
  new mongoose.Schema({
    time_started: String,
    time_finished: String,
    correct_answers: Number,
    blank_answers: Number,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    test: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Test"
    }
  })
);

module.exports = Finishedtest;
