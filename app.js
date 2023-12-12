import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors)

app.get('/name', (req, res) => {
    res.send('Mufaro')
})

app.listen('5001', () => console.log("Server running & listening on port http://localhost:5001"))