const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000

let cars = [];

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cars', (req, res) => {
    res.status(200).json(cars)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
