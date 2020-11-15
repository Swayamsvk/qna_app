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
    name: req.body.name,
    occupation: req.body.occupation,
    subject: req.body.subject,
    question: req.body.question,
    // tags: req.body.tags,
    // answer: req.body.answer,
  });

  try {
    const savedQas = await Qas.save();
    res.json(savedQas);
  } catch (err) {
    res.json({ message: err });
  }
});

router.route("/:id").get((req, res) => {
  Qa.findById(req.params.id)
    .then((qa) => res.json(qa))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/update/:id").post((req, res) => {
  Qa.findById(req.params.id)
    .then((qa) => {
      console.log(req.body.id);
      qa.name = req.body.name;
      qa.occupation = req.body.occupation;
      qa.subject = req.body.subject;
      qa.question = req.body.question;
      qa.save()
        .then(() => res.json("Qa added"))
        .catch((err) => res.status(400).json("Error:" + err));
    })
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
