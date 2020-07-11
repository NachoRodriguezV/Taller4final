'use strict'

var Libro = require('../modelos/libros.js');


//funcion para guardar libros
function guardar(req,res){
    
    let libro = new Libro()    
    libro.nombre_libro = req.body.nombre_libro
    libro.autor = req.body.autor
    libro.año_publicado = req.body.año_publicado
    libro.idioma = req.body.idioma
    
    
    libro.save((err,librostore)=>{
        
        if(err) res.status(400).send("Error"+err)

        res.status(200).send({libro: librostore})
    })
}

function mostrarLibros(req,res){
    Libro.find({}, (err, libro)=>{
        if(!libro) return res.status(400).send({message: "No hay libros para mostrar"})
        res.status(200).send({libro})
    }
    )}

function mostrarID(req, res){
    let idreq = req.params.id
    Libro.findById(idreq, (err, libro)=>{
        if(err) return res.status(500).send({message: "Error al realizar la consulta"})
        if(!libro) return res.status(404).send({message: "El libro no existe"})

        res.status(200).send({libro})
    })
}    

function mostrarAñoIdioma(req,res){

    let añoreq = req.query.año_publicado
    let idiomareq = req.query.idioma
    Libro.find({ año_publicado: añoreq, idioma: idiomareq }, (err,libro) =>{
        if (!libro) return res.status(404).send({message: "No existe libro con ese año e idioma"})
        res.status(200).send({libro})                
    })
}

function editarLibro(req,res){
    let libroid = req.params.id
    let update = req.body

    Libro.findByIdAndUpdate(libroid, update, (err,libroActualizado)=>{
        if(err) return res.status(500).send({message: "Error al realizar la consulta"})
        res.status(200).send({libro: libroActualizado})
    })
}

function eliminarLibro(req,res){
    let libroid = req.params.id
    Libro.findById(libroid, (err,libro)=>{
        if(err) return res.status(500).send({message: "Error al realizar la consulta"})

        libro.remove(err =>{
        if(!libro) return res.status(404).send({message: "El libro no existe"})
        res.status(200).send({message: "Libro eliminado"})
    })
})
}

module.exports = {
    guardar,
    mostrarLibros,
    mostrarID,
    mostrarAñoIdioma,
    editarLibro,
    eliminarLibro
}