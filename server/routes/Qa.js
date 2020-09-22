const router = require("express").Router();
let Qa = require("../models/Qa.model");

//get elements
router.route("/").get(async (req, res) => {
  try {
    const qas = await Qa.find();
    res.json(qas);
  } catch (err) {
    res.json({ message: err });
  }
  //   Qa.find()
  //     .then((qa) => res.json(qa))
  //     .catch((err) => res.status(400).json("Error:" + err));
});

//add elements
router.route("/add").post(async (req, res) => {
  const Qas = new Qa({
    question: req.body.question,
    tags: req.body.tags,
    answer: req.body.answer,
  });

  try {
    const savedQas = await Qas.save();
    res.json(savedQas);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
