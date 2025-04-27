require('dotenv').config();

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });

    const database = client.db('testdb'); // nome do banco
    const collection = database.collection('testcollection'); // nome da coleção

    await collection.insertOne({ greeting: 'Hello Mongo' }, () => client.close());
    console.log("Documento inserido com sucesso!");
  } catch(err){
    console.log("Ocorreu um erro: ", err);
  }
}
run().catch(console.dir);
