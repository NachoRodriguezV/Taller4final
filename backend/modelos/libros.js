'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const LibroSchema = ({
    nombre_libro:String,
    autor:String,
    año_publicado:String,
    idioma:String 
})

module.exports = mongoose.model('libros',LibroSchema)