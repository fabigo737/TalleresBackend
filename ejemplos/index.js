const express = require('express')
const {getData, getSales, newSale, getSaleByItem} = require('./db')
const app = express()
const bodyParser = require('body-parser') 
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))


app.get('/animals/species', async (req, res) => {
  const data = await getData()
  res.send(data)
})

app.get("/mongo/sales", async (req, res) =>{
  const data = await getSales()
  res.send(data)
})

app.post("/mongo/sales/newSale", async (req, res) =>{
  await newSale(req.body)
  res.send('finished')
})

app.post("/mongo/sales/getSaleByItem", async (req, res) =>{
  const item = req.body
  const result = await getSaleByItem(item)
  res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


