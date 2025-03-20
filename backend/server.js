const express = require('express')
const dotenv = require('dotenv').config()
const ConnectDb = require('./config/db')
const { ErrorHandler } = require('./middleware/globleErrorHandler')

Port = process.env.PORT || 6000

ConnectDb()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended:false }))

app.use('/api/blog', require('./routes/blogroutes'))

app.use(ErrorHandler)

app.listen(Port, () =>{
    console.log(`listening on port ${Port}`)
})

