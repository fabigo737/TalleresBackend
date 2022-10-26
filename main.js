const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://root:1234162@bit.wjfnwhh.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const getBathrooms = async () =>{
  const database = client.db('sample_airbnb');
  const reviews = database.collection('listingsAndReviews')
  const consulta = { bathrooms: {$gte: 2.0} };
  const resultado = await reviews.find(consulta).limit(500).toArray()
  return resultado
}
const get300 = async () =>{
  const database = client.db('sample_airbnb');
  const reviews = database.collection('listingsAndReviews')
  const consulta = { price: {$lte: 300}};
  const resultado = await reviews.find(consulta).limit(100).sort({ price: 1 }).toArray()
  return resultado
}

const getNotSmoke = async () =>{
  const database = client.db('sample_airbnb');
  const reviews = database.collection('listingsAndReviews')
  const consulta = { amenities: /Smoke detector/};
  const resultado = await reviews.find(consulta).limit(100).toArray()
  return resultado
}
//2017-02-01T00:00:00.000+00:00 2018-12-23T23:59:00.000+00:00
const orderbyreview = async () =>{
  const database = client.db('sample_airbnb');
  const reviews = database.collection('listingsAndReviews')
  const consulta = {last_review: {$gt: new Date("2017-02-01"), $lt: new Date("2018-12-23")}};
  const resultado = await reviews.find(consulta).limit(100).toArray()
  return resultado
}

const policy = async () =>{
  const database = client.db('sample_airbnb');
  const reviews = database.collection('listingsAndReviews')
  const consulta = { $or: [ {"cancellation_policy" : "moderate"}, {"cancellation_policy" : "flexible"} ] }
  const resultado = await reviews.find(consulta).limit(100).toArray()
  return resultado
}

//Crear una API que traiga los resultados que tengan 6 camas y 6 habitaciones.
const bedrooms = async () =>{
  const database = client.db('sample_airbnb');
  const reviews = database.collection('listingsAndReviews')
  const consulta = { $and: [ {"beds" : 6}, {"bedrooms" : 6} ] }
  const resultado = await reviews.find(consulta).toArray()
  return resultado
}

//Crear una API que reciba como parámetro URL cualquier precio y traer los documentos 
//correspondientes que sean iguales a ese precio, utilizar método GET. 

const userfilterprice = async (valoruser) =>{
  const database = client.db('sample_airbnb');
  const reviews = database.collection('listingsAndReviews')
  const consulta = { price: valoruser }
  const resultado = await reviews.find(valoruser).toArray()
  return resultado
}


module.exports = {getBathrooms, get300, getNotSmoke, orderbyreview, policy, userfilterprice}
