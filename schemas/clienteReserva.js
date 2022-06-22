const Joi = require('joi')

const codC = Joi.string().uuid()
const nombreCliente = Joi.string().min(3)
const apellidosCliente = Joi.string().min(5).max(30)
const correoCliente = Joi.string().email().max(50);
const numeroCelularCliente = Joi.string().min(9)
const fechaIngreso = Joi.date()
const fechaSalida = Joi.date()
const tipoHabitacion = Joi.string().min(5)
const tipoDePago = Joi.string()

const crearClienteRVSchema = Joi.object({
    nombreCliente: nombreCliente.required(),
    apellidosCliente: apellidosCliente.required(),
    correoCliente: correoCliente.required(),
    numeroCelularCliente: numeroCelularCliente.required(),
    fechaIngreso: fechaIngreso.required(),
    fechaSalida: fechaSalida.required(),
    tipoHabitacion: tipoHabitacion.required(),
    tipoDePago: tipoDePago.required()
})

const actualizarClienteRVSchema = Joi.object({
    nombreCliente,
    apellidosCliente,
    correoCliente,
    numeroCelularCliente,
    fechaIngreso,
    fechaSalida,
    tipoHabitacion,
    tipoDePago
})

const findbyClienteRVSchema = Joi.object({
    codC: codC.required()
})

module.exports = {crearClienteRVSchema,actualizarClienteRVSchema,findbyClienteRVSchema}