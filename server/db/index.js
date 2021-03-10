const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nearby-transit', { useUnifiedTopology: true, useNewUrlParser: true });

const optionsSchema = mongoose.Schema({
  name: String,
  type: String
})

const schema = mongoose.Schema({
  _id: Number,
  nearbyTransitOptions: [optionsSchema]
});

const nearbyTransitModel = mongoose.model('nearby-transit', schema);

const db = {};

db.createNearbyTransitOptions = async payload => {
  return await nearbyTransitModel.create(payload);
};

db.getNearbyTransitOptions = async id => {
  return await nearbyTransitModel.findOne({ _id: id }).exec();
};

db.updateNearbyTransitOptions = async payload => {
  return await nearbyTransitModel.update({ _id: payload._id }, payload).exec();
};

db.deleteNearbyTransitOptions = async id => {
  return await nearbyTransitModel.deleteOne({ _id: id }).exec();
};

module.exports = db;
