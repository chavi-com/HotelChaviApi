//const express = require('express') FORMA VIEJA DE IMPORTAR
import express from 'express'

//traigo libreria que controla variables d entorno
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()



//app es la variable que almacena toda la funcionalidad de expres 
const app = express()


//atendiendo peticiones y respondiendo
//1. peticion de tipo get para buscar habitaciones
app.get('/hotelesChavi/habitaciones', function (req, res) {
  res.send('buscando todas las abitaciones')
})

//2. peticion de tipo get para buscar  una abitacion
app.get('/hotelesChavi/habitacion/:id', function (req, res) {
  res.send('buscando una abitacion por id')
})

//3. peticion de tipo post para agregar habitacion en BD
app.post('/hotelChavi/habitacion', function (req, res) {
  res.send('agregando abitacion')
})

//4. peticion de tipo put para editar habitacion
app.put('/hotelchavi/modificarabitacion', function (req, res) {
  res.send('acutalizando habitacion')
})

app.listen(process.env,function(){
    console.log("servidor encendido")
})