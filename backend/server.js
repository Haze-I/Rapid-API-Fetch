const mongoose = require('mongoose')
const dotenv = require("dotenv");
dotenv.config();
const express = require('express')
const countryRoutes = require('./routes/country')
const userRoutes = require('./routes/user')

const app = express()

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


app.use('/api/user', userRoutes)
app.use('/api', countryRoutes)

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })