'use strict'

//cargamos modulo express para crear rutas
var express = require('express'); 

//cargamos el controlador que usaremos
var libroController = require('../controllers/libroController'); 

var api = express.Router();

//Rutas

api.post('/librosGuardar', libroController.guardar);
api.get('/mostrarLibros', libroController.mostrarLibros);
api.get('/mostrarAñoIdioma', libroController.mostrarAñoIdioma);
api.get('/mostrarID/:id', libroController.mostrarID);
api.put('/editarLibro/:id', libroController.editarLibro);
api.delete('/eliminarLibro/:id', libroController.eliminarLibro);

//Configuracion

module.exports = api;
