const db = require('../db/index.js');

const controller = {};

controller.createNearbyTransactionOptions = async (req, res) => {
  const payload = req.body;
  const response = await db.createNearbyTransactionOptions(payload);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(400).send('Unable to find ID');
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

controller.updateNearbyTransactionOptions = async (req, res) => {
  const payload = req.body;
  const response = await db.updateNearbyTransactionOptions(payload);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(400).send('Unable to find ID');
  }
};

controller.deleteNearbyTransactionOptions = async (req, res) => {
  const payload = req.body;
  const response = await db.deleteNearbyTransactionOptions(payload);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(400).send('Unable to find ID');
  }
};

controller.getNearbyBuildings = async (req, res) => {
  const { id } = req.params;
  const endpoint = process.env.NEARBY_WORKSPACES + id || `http://localhost:5001/api/nearbyworkspaces/buildings/${id}`;
  try {
    const { data } = await axios.get(endpoint);
    res.status(200).json(data);
  } catch(error) {
    console.log(`Error fetching nearby workspaces: ${error}`);
    res.status(400).send('Unable to retrieve nearby workspaces');
  }
};

module.exports = controller;
