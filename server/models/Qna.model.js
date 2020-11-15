const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const qnaSchema = new Schema(
  {
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    subject: { type: String, required: true },
    question: { type: String, required: true },
    // tags: { type: String, required: true },
    answer: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Qna = mongoose.model("Qna", qnaSchema);

module.exports = Qna;
