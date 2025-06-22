const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017"; // Use correct URI
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    const db = client.db("testDB");
    const users = db.collection("users");

    const result = await users.insertOne({ name: "John", age: 19 });
    console.log("Document inserted with _id:", result.insertedId);

    const docs = await users.find().toArray();
    console.log("All Users:", docs);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}
run();