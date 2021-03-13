const express = require('express');
const path = require('path')
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3002;
const app = express();
const controller = require('./controller.js');
require('dotenv').config({ path: path.join(__dirname, '../', '.env')});

app.use(cors());
app.use(express.static(__dirname + '/../public'));
app.use('/buildings/:workspaceId', express.static(path.join(__dirname, '../', 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/api/nearbyworkspaces/buildings/:id', controller.getNearbyBuildings);

app.post('/api/getNearbyTransitOptions', controller.createNearbyTransitOptions);
app.get('/api/getNearbyTransitOptions/:id', controller.getNearbyTransitOptions);
app.put('/api/getNearbyTransitOptions/:id', controller.updateNearbyTransitOptions);
app.delete('/api/getNearbyTransitOptions/:id', controller.deleteNearbyTransitOptions);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
