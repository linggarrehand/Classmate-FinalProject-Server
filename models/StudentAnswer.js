const mongoose = require("mongoose");

const studentAnswerSchema = new mongoose.Schema({
  Assignment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Assignment",
    required: true,
  },
  Student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: ["Assigned", "Returned", "Missing"],
    required: true,
  },
  imgUrl: String,
  turnedAt: Date,
  Answers: [
    {
      rowNumber: {
        type: Number,
      },
      answer: String,
      answerType: {
        enum: ["pg", "essay"],
      },
      isWrong: Boolean,
    },
  ],
});

const StudentAnswer = mongoose.model("StudentAnswer", studentAnswerSchema);

module.exports = StudentAnswer;
