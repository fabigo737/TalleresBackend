const express = require('express')
const app = express()
const port = 3000
const {getBathrooms, get300, getNotSmoke, orderbyreview, policy, bedrooms, userfilterprice} = require('./main')


app.get('/bathrooms', async (req, res) => {
    const data = await getBathrooms()
    res.send(data)
  })

  app.get('/pricebelow300/desc', async (req, res) => {
    const data = await get300()
    res.send(data)
  })

  app.get('/nosmoke', async (req, res) => {
    const data = await getNotSmoke()
    res.send(data)
  })

  app.get('/orderbyreview', async (req, res) => {
    const data = await orderbyreview()
    res.send(data)
  })

  app.get('/policy', async (req, res) => {
    const data = await policy()
    res.send(data)
  })

  app.get('/bedrooms', async (req, res) => {
    const data = await bedrooms()
    res.send(data)
  })

//Crear una API que reciba como parámetro URL cualquier precio y traer los documentos 
//correspondientes que sean iguales a ese precio, utilizar método GET. 
app.get('/valoruser', async (req, res) => {
  const data = await userfilterprice(valoruser)
  res.send(data)
})


app.listen(port)