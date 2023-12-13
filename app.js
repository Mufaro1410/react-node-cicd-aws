const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(cors())
app.use(express.static(path.join(__dirname, '/frontend/build')))

app.get('/name', (req, res) => {
    res.send('Mufaro')
})

app.listen('5001', () => console.log("Server running & listening on port http://localhost:5001"))