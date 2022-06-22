const Joi = require('joi')

const codH = Joi.string().uuid()
const caracteristicasH = Joi.string().min(10)
const tipoH = Joi.string().min(10)
const nroH = Joi.number().min(1)
const precioH = Joi.number().min(100)
const pisoH = Joi.number().min(1).max(5)
const capacidadH = Joi.number().min(1).max(8)
const estadoH = Joi.string()
const imagen = Joi.string()

const crearHabitacionSchema = Joi.object({
  caracteristicasH:caracteristicasH.required(),
  tipoH:tipoH.required(),
  nroH:nroH.required(),
  precioH:precioH.required(),
  pisoH:pisoH.required(),
  capacidadH:capacidadH.required(),
  estadoH: estadoH.required(),
  imagen: imagen.required()
})

const actualizarHabitacionesSchema = Joi.object({
  caracteristicasH,
  tipoH,
  nroH,
  precioH,
  pisoH,
  capacidadH,
  estadoH,
  imagen
})

const findByHabitacionSchema = Joi.object({
  codH: codH.required()
})

module.exports = {crearHabitacionSchema,actualizarHabitacionesSchema,findByHabitacionSchema}
