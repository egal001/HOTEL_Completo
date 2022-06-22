const Joi = require('joi');

const id = Joi.string().uuid()
const fechaIngresoR = Joi.date()
const fechaSalidaR = Joi.date()
const catidadPersonasR = Joi.number().min(1).max(8)
const codH = Joi.string().min(3) //codigo habitacion
const codC = Joi.string().min(3) //codigoCliente
const codRE = Joi.string().min(3) //codigo recepcionista
const precioR = Joi.number().min(100)

const crearReservaSchema = Joi.object({
  fechaIngresoR: fechaIngresoR.required(),
  fechaSalidaR: fechaSalidaR.required(),
  catidadPersonasR: catidadPersonasR.required(),
  codH: codH.required(),
  codC: codC.required(),
  codRE: codRE.required(),
  precioR: precioR.required()
})

const actualizarReservaSchema = Joi.object({
  fechaIngresoR,
  fechaSalidaR,
  catidadPersonasR,
  codH,
  codC,
  codRE,
  precioR
})

const findByReservaSchema = Joi.object({
  id: id.required()
})

module.exports = {crearReservaSchema,actualizarReservaSchema,findByReservaSchema}
