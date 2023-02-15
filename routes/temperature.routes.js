const router = require("express").Router();
const temperatureController = require('../controllers/temperature.controller');

router.get(temperatureController.getAll);
router.get("/:id",temperatureController.getById);
router.post("/save", temperatureController.save);

module.exports = router;