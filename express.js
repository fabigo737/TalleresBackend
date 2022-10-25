const express = require('express')
const app = express()
const port = 3000
const {getBathrooms, get300, getNotSmoke, orderbyreview} = require('./main')


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


app.listen(port)