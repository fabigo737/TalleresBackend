const {MongoClient} = require("mongodb")

const uri = "mongodb+srv://root:1234162@bit.wjfnwhh.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri)

const getData = async () =>{
    const dataBase = client.db('BITDBEXAMPLES')
    const collection = dataBase.collection('animals')
    const animals = await collection.find().toArray()

    return animals
}

const getSales = async () =>{
    const dataBase = client.db('mongodbVSCodePlaygroundDB')
    const collection = dataBase.collection('sales')
    const sales = await collection.find().toArray()

    return sales
}

const newSale = async (document) =>{
  const dataBase = client.db("mongodbVSCodePlaygroundDB")
  const collection = dataBase.collection("sales")
  collection.insertOne(document)
}

const getSaleByItem = async (item) => {
  const dataBase = client.db("mongodbVSCodePlaygroundDB")
  const collection = dataBase.collection("sales")
  const result = await collection.find(item).toArray()

  return result
}

/**
async function run() {
    try {
      const database = client.db('BITDBEXAMPLES');
      const movies = database.collection('animals');
      // Query for a movie that has the title 'Back to the Future'
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);

*/


module.exports = {getData, getSales, newSale, getSaleByItem}