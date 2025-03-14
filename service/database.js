const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('popdepot');
const userCollection = db.collection('user');
const figureCollection = db.collection('figure');

// This will asynchronously test the connection and exit the process if it fails
async function testConnection() {
  try {
    await client.connect();
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
}

async function addUser(user) {
  try {
  const result = await userCollection.insertOne(user);
  console.log("user inserted", result.insertedId);
} catch (error) {
  console.error("Error adding user", error);
} 
}

async function main() {
  try {
  const blindBoxes = await getBlindBoxes();
  console.log("Retrived Blindboxes", blindBoxes);
  } catch (error) {
    console.error("error fetching", error);
  } finally {
    client.close();
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

async function addFigure(figure) {
  return figureCollection.insertOne(figure);
}

// db.figure.insertMany([
//   {figure: {name:"Hirono" , image:"Hirono_1_draw.png" }},
//   {figure: {name:"Inosoul" , image:"Inosoul-1.png" }},
//   {figure: {name:"Nyota" , image:"Nyota-1.png" }}
// ])

async function getBlindBoxes() {
  const query = { "figure.image": { $exists: true } };
  const options = {
    sort: { "figure.name": 1 },
    limit: 10,
  };
  const cursor = figureCollection.find(query, options);
  return cursor.toArray();
}

main();

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  addFigure,
  getBlindBoxes,
};