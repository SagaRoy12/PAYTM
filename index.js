const express = require("express")
const app = express()
const mainRouter = require('./routes/index')

app.use('/api/v1' , mainRouter) // all routes will be redirected to Routers 