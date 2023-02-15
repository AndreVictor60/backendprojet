const mongoose = require('mongoose');

const temperatureSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true
    },
    temperature: {
      type: String,
      required: true,
    },
    hash: {
      type: String,
      required: true,
      unique: true,
      max: 1024,
      minlength: 6
    },
  },
  {
    timestamps: true,
  }
);


const TemperatureModel = mongoose.model("temperature", temperatureSchema);

module.exports = TemperatureModel;