const boom = require('@hapi/boom');
const crypto = require('crypto')//uuid
const {models} = require('../libs/sequelize')
class ClienteReservaService {
  constructor() {}

  async create(cliente) {
    const nuevoCliente = {
      codC: crypto.randomUUID(),
      ...cliente
    }
    const {
        nombreCliente,
        apellidosCliente,
        correoCliente,
        numeroCelularCliente,
        fechaIngreso,
        fechaSalida,
        tipoHabitacion,
        tipoDePago
    } = nuevoCliente
    const salida = await models.clienteReserva.create(nuevoCliente)
    return salida
  }

  async update(id, clienteReserva) {
    const {
        nombreCliente,
        apellidosCliente,
        correoCliente,
        numeroCelularCliente,
        fechaIngreso,
        fechaSalida,
        tipoHabitacion,
        tipoDePago
    } = clienteReserva
    const data = await models.clienteReserva.update({
        nombreCliente:nombreCliente,
        apellidosCliente:apellidosCliente,
        correoCliente:correoCliente,
        numeroCelularCliente:numeroCelularCliente,
        fechaIngreso:fechaIngreso,
        fechaSalida:fechaSalida,
        tipoHabitacion:tipoHabitacion,
        tipoDePago:tipoDePago
      },
      {where:{codC:id}}
    )
    if(data == 0){
        throw boom.notFound('datos cliente no encontrado')
    }
    return {
      codC:id,
      ...clienteReserva
    }
  }

  async updateParcial(id, clienteReservaParcial) {
    const {
        nombreCliente,
        apellidosCliente,
        correoCliente,
        numeroCelularCliente,
        fechaIngreso,
        fechaSalida,
        tipoHabitacion,
        tipoDePago
    } = clienteReservaParcial
    const data = await models.clienteReserva.update({
        nombreCliente:nombreCliente,
        apellidosCliente:apellidosCliente,
        correoCliente:correoCliente,
        numeroCelularCliente:numeroCelularCliente,
        fechaIngreso:fechaIngreso,
        fechaSalida:fechaSalida,
        tipoHabitacion:tipoHabitacion,
        tipoDePago:tipoDePago
      },
      {where:{codC:id}}
    )
    if(data == 0){
        throw boom.notFound('datos cliente no encontrado')
    }
    return {
      codC:id,
      ...clienteReservaParcial
    }
  }

  async delete(id) {
    const data = await models.clienteReserva.destroy({
      where:{codC:id},
    }) 
    if(!data){
        throw boom.notFound('datos cliente no encontrado')
    }
  }

  async findAll() {
    const data = await models.clienteReserva.findAll();
    return data;
  }
  async findBy(id) {
    const data = await models.clienteReserva.findByPk(id)
    if(!data){
      throw boom.notFound('datos cliente no encontrado')
    }
    return data
  }
}

module.exports = ClienteReservaService
