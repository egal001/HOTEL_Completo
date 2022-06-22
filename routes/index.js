const express = require('express');

const habitacionesRouter = require('./habitaciones');
const reservasRouter = require('./reservas.route')
const recepcionistaRouter = require('./recepcionista.route')
const clienteReserva = require('./clientereserva.route')

function rutas(app){
  const router = express.Router();
  app.use('/cliente/r1',router);
  router.use('/habitaciones', habitacionesRouter);
  router.use('/reservas', reservasRouter);
  router.use('/clientes', clienteReserva);
  router.use('/recepcionistas', recepcionistaRouter);

}
module.exports = rutas;
