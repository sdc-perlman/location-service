const fs = require('fs').promises;
const path = require('path')
const { exec } = require('child_process');
const { Pool, Client } = require('pg');
const words = require('./words.js');

require('dotenv').config({ path: path.join(__dirname, '../../', '.env')});

const LOCATIONS = 100;
const LOCATIONS_SQRT = Math.floor(Math.sqrt(LOCATIONS));

const randomFloatBetween = (min, max) => Math.random() * (max - min + 1) + min;
const randomIntBetween = (min, max) => Math.floor(randomFloatBetween(min, max));
const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);
const randomElement = array => array[randomIntBetween(0, array.length - 1)];

const initFile = path.join(__dirname, 'init-postgres.sh');

const init = async () => {
  const fileData = `#!/bin/bash
sudo -u ${process.env.USER} dropdb ${process.env.PGDATABASE}
sudo -u ${process.env.USER} dropuser ${process.env.PGUSER}
sudo -u ${process.env.USER} createuser ${process.env.PGUSER}
sudo -u ${process.env.USER} createdb --owner=${process.env.PGUSER} ${process.env.PGDATABASE}
`;

  try {
    await fs.rm(initFile);
  } catch (error) {
    console.log('init file does not exist');
  }

  await fs.writeFile(initFile, fileData);
};

const randomWordBetween = (min, max) => {
  let word = '';

  for (let i = 0; i < randomIntBetween(min, max); i++) {
    word += randomElement(words);
  }

  return word;
};

const randomAddress = () => {
  const suffixes = [
    'St.',
    'Rd.',
    'Ln.',
    'Way',
    'Park',
  ];

  return `${randomIntBetween(1, 5000)} ${capitalize(randomWordBetween(1, 2))} ${capitalize(randomElement(suffixes))}, Utopia, Earth}`;
};

const randomCoordinates = () => `${randomFloatBetween(-90, 90)} ${randomFloatBetween(-180, 180)}`;

const randomTransitType = () => {
  const transitTypes = [
    'metro',
    'bus',
    'bike path',
    'freeway',
  ];

  return randomElement(transitTypes);
};

const randomCost = () => `$${randomIntBetween(2, 100)}`;

const generateLocation = () => {
  return {
    name: randomWordBetween(1, 3),
    address: randomAddress(),
    coordinates: randomCoordinates(),
  };
};

const generateTransit = () => {
  return {
    name: randomWordBetween(4, 10),
    type: randomTransitType(),
    averageCost: randomCost(),
  };
};

const createTables = async client => {
  const locationTableRes = await client.query(`
    CREATE TABLE location (
      id SERIAL PRIMARY KEY,
      name VARCHAR (255) NOT NULL,
      address VARCHAR (255) NOT NULL,
      coordinates VARCHAR (50) NOT NULL
    );
  `);
  console.log('created table: location');

  const transitOptionsTableRes = await client.query(`
    CREATE TABLE transit_options (
      id SERIAL PRIMARY KEY,
      location_id INT NOT NULL,
      name VARCHAR (255) NOT NULL,
      type VARCHAR (50) NOT NULL,
      average_cost VARCHAR (50) NOT NULL,
      CONSTRAINT fk_location
        FOREIGN KEY(location_id)
          REFERENCES location(id)
    );
  `);
  console.log('created table: transit_options');
};

const insertLocationQuery = (id, name, address, coordinates) => `INSERT INTO location (id, name, address, coordinates) VALUES (${id}, '${name}', '${address}', '${coordinates}');`;
const insertTransitOptionQuery = (id, locationId, name, type, averageCost) => `INSERT INTO transit_options (id, location_id, name, type, average_cost) VALUES (${id}, ${locationId}, '${name}', '${type}', '${averageCost}');`;

const insertRecords = async client => {
  let locationId = 0;
  let transitOptionId = 0;
  let query = '';
  while (locationId < LOCATIONS) {
    for (let i = 0; i < LOCATIONS_SQRT; i++) {
      const location = generateLocation();
      query += insertLocationQuery(locationId, location.name, location.address, location.coordinates);

      for (let j = 0; j < randomIntBetween(5, 10); j++) {
        const transit = generateTransit();
        query += insertTransitOptionQuery(transitOptionId, locationId, transit.name, transit.type, transit.averageCost);
        transitOptionId++;
      }

      locationId++;
    }

    await client.query(query);
    query = '';
  }
};

const seedDatabase = async () => {
  const pool = new Pool();
  const client = await pool.connect();

  try {
    await client.query('BEGIN');
    await createTables(client);
    await insertRecords(client);
    await client.query('COMMIT');
  } catch (err) {
    await client.query('ROLLBACK');
    console.log(err.message);
  } finally {
    client.release();
    pool.end();
  }
};

const execHandler = (error, stdout, stderr) => {
  console.log(stdout);
  console.log(stderr);
};

const run = async () => {
  await init();
  exec(`sh ${initFile}`, execHandler);
  console.log(`created database: ${process.env.PGDATABASE}`);
  await seedDatabase();
  console.log(`${LOCATIONS} records generated`);
  process.exit();
};

run();
