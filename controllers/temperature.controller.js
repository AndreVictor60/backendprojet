const { logErrors } = require('../errors.utils');
const TemperatureModel = require('../models/temperature.model');

module.exports.save = async (req,res) => {
    const {id,temperature,hash} = req.body;
    try {
        const temp = await TemperatureModel.create({id,temperature,hash});
        res.status(201).json({ temp })
    }
    catch(err) {
      const errors = logErrors(err);
      res.status(200).send({errors})
    }
}

module.exports.getAll = async (req, res) => {
    const allTemperature = await TemperatureModel.find();
    res.status(200).json(allTemperature);
};

module.exports.getById = (req, res) => {
    TemperatureModel.find({ id: req.params.id }).sort({createdAt: 'desc'}).limit(10).exec((err, docs) => {
      if (!err) res.send(docs);
      else console.log("ID unknown : " + err);
    });
  };
