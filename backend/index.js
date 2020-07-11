'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

var cors = require('cors')
app.use(cors())
app.options('*', cors());

var libro_routes = require('./routes/libroRoute')
const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/api', libro_routes)

mongoose.connect('mongodb+srv://nacho:conectar123@cluster0-muu6j.mongodb.net/taller3?retryWrites=true&w=majority',(err,res) =>{
     
       app.listen(4000,()=>{
            console.log("Funcionando en el puerto 4000")
        })
})