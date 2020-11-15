const router = require("express").Router();
let Qna = require("../models/Qna.model");

//get elements
router.route("/").get(async (req, res) => {
  try {
    const qnas = await Qna.find();
    res.json(qnas);
  } catch (err) {
    res.json({ message: err });
  }
  //   Qa.find()
  //     .then((qa) => res.json(qa))
  //     .catch((err) => res.status(400).json("Error:" + err));
});

//add elements
router.route("/addqna").post(async (req, res) => {
  const Qnas = new Qna({
    name: req.body.name,
    occupation: req.body.occupation,
    subject: req.body.subject,
    question: req.body.question,
    // tags: req.body.tags,
    answer: req.body.answer,
  });

  try {
    const savedQnas = await Qnas.save();
    res.json(savedQnas);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
