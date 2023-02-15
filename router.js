const express = require("express");
const router = express.Router();

module.exports = router;


router.get("/", (req, res) => {
  res.json("Hello world!!");
});

router.get("/persons", (req, res) => {
  res.json(persons);
});
function getPerson(id) {
  return persons.find((p) => p.id === +id);
}
router.get("/persons/:id", (req, res) => {
  res.json(getPerson(req.params.id));
});


router.use((req, res) => {
    res.status(404);
    res.json({
      error: "Page not found",
    });
  });