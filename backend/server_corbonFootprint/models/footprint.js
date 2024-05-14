const mongoose =require('mongoose');
const footprintSchema = new mongoose.Schema({
    distanceTraveled: Number,
    fuelConsumed: Number,
    electricityConsumed: Number,
    carbonFootprint: Number
  });
mongoose.model('footprint', footprintSchema);