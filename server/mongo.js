require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGO_URI;

let client;
let database;
let collection;

async function connect() {
  if (client && client.topology?.isConnected()) {
    return { database, collection };
  }

  try {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Conectado ao MongoDB com sucesso!");

    database = client.db('testdb');
    collection = database.collection('testcollection');

    return { database, collection };
  } catch (err) {
    console.error("Erro ao conectar:", err);
    throw err;
  }
}

async function insertAndFind() {
  if (!collection) {
    throw new Error("Banco de dados não conectado. Chame `connect()` antes.");
  }

  await collection.insertOne({ greeting: 'Hello Mongo!' });
  console.log("Documento inserido com sucesso!");

  const document = await collection
  .findOne({greeting: 'Hello Mongo!'})
  .then((document) => res.json(`${document.greeting} + Express`));
  console.log(document.greeting);
}

module.exports = {
  connect,
  insertAndFind
};
