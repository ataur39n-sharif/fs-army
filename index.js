require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 5000

app.use('/api/v1', require('./routes'))

app.listen(port, () => console.log(`App listening on port ${port}!`))