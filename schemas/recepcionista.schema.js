const Joi = require('joi')

const codRE = Joi.string().uuid()
const nombre = Joi.string().min(1).max(30);
const apellidoP = Joi.string().min(1).max(30);
const apellidoM = Joi.string().min(1).max(30);
const contrasenia = Joi.string().min(7).max(30);
const correo = Joi.string().email();
const direccion = Joi.string().max(50);
const telefono = Joi.string().min(9)

const crearRecepcionistaSchema = Joi.object({
  nombre: nombre.required(),
  apellidoP: apellidoP.required(),
  apellidoM: apellidoM.required(),
  contrasenia: contrasenia.required(),
  correo: correo.required(),
  direccion: direccion.required(),
  telefono: telefono.required()
})

const actualizarRecepcionistaSchema = Joi.object({
  nombre,
  apellidoP,
  apellidoM,
  contrasenia,
  correo,
  direccion,
  telefono
})

const findByRecepcionistaSchema = Joi.object({
  codRE: codRE.required()
})

module.exports = {crearRecepcionistaSchema,actualizarRecepcionistaSchema,findByRecepcionistaSchema}
