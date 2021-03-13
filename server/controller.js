const db = require('./db/index.js');
const axios = require('axios');

const controller = {};

controller.createNearbyTransitOptions = async (req, res) => {
  const payload = req.body;
  try {
    const response = await db.createNearbyTransitOptions(payload);
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(400).send(`Unable to create record with the id ${payload._id}`);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

controller.getNearbyTransitOptions = async (req, res) => {
  const { id } = req.params;
  const response = await db.getNearbyTransitOptions(id);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(400).send('Unable to find ID');
  }
};

controller.updateNearbyTransitOptions = async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  try {
    await db.updateNearbyTransitOptions(id, payload);
    const response = await db.getNearbyTransitOptions(id);
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(400).send('Unable to update ID');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

controller.deleteNearbyTransitOptions = async (req, res) => {
  const { id } = req.params;
  const response = await db.deleteNearbyTransitOptions(id);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(400).send('Unable to find ID');
  }
};

controller.getNearbyBuildings = async (req, res) => {
  const { id } = req.params;
  const endpoint = process.env.NEARBY_WORKSPACES ? process.env.NEARBY_WORKSPACES + id : `http://localhost:5001/api/nearbyworkspaces/buildings/${id}`;
  try {
    const { data } = await axios.get(endpoint);
    res.status(200).json(data);
  } catch(error) {
    console.log(`Error fetching nearby workspaces: ${error}`);
    res.status(400).send('Unable to retrieve nearby workspaces');
  }
};

module.exports = controller;
