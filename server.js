


const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

app.set('view engine','ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose')
const mongoDB = "mongodb://localhost:6000/mybrary";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
    db.on('error', console.error.bind(console, "MongoDB connection error"));
 

app.use('/', indexRouter)

app.listen(process.env.PORT || 6000)