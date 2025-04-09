const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('popdepot');
const userCollection = db.collection('user');
const figureCollection = db.collection('figure');

// This will asynchronously test the connection and exit the process if it fails
async function testConnection() {
  await client.connect();
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
}

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ email: user.email }, { $set: user });
}

async function addBlindBox(blindBox) {
  return figureCollection.insertOne(blindBox);
}

async function removeFigure(singleFigure) {
  const figure = await figureCollection.deleteOne(singleFigure);
}


async function getBlindBoxes() {
  const query = { "figure.image": { $exists: true } };
  const options = {
    sort: { "figure.name": 1 },
    limit: 10,
  };
  const cursor = figureCollection.find(query, options);
  return cursor.toArray();
}


async function getCollectionFigures(token) {
  const user = await getUserByToken(token);  
  if (user) {
    return await figureCollection.find({ name: user.email }).toArray();
  }
  return [];
}

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  addBlindBox,
  getBlindBoxes,
  getCollectionFigures,
  removeFigure,
};