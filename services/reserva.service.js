const boom = require('@hapi/boom');
const crypto = require('crypto')//uuid
const {models} = require('../libs/sequelize')
class ReservaService{
  constructor() {}

  async create(reserva) {
    const nuevaReserva = {
      id: crypto.randomUUID(),
      ...reserva
    }
    const {
      id,
      fechaIngresoR,
      fechaSalidaR,
      catidadPersonasR,
      codH,
      codC,
      codRE,
      precioR
    } = nuevaReserva
    const salida = await models.reserva.create(nuevaReserva)
    return salida
  }

  async update(id, reserva) {
    const {
      fechaIngresoR,
      fechaSalidaR,
      catidadPersonasR,
      codH,
      codC,
      codRE,
      precioR
    } = reserva
    const data = await models.reserva.update({
      fechaIngresoR:fechaIngresoR,
      fechaSalidaR:fechaSalidaR,
      catidadPersonasR:catidadPersonasR,
      codH:codH,
      codC:codC,
      codRE:codRE,
      precioR:precioR
      },
      {where:{id:id}}
    )
    if(data == 0){
      throw boom.notFound('reserva no encontrada')
    }
    return {
      id:id,
      ...reserva
    }
  }

  async updateParcial(id, reservaUpdate) {
    const {
      fechaIngresoR,
      fechaSalidaR,
      catidadPersonasR,
      codH,
      codC,
      codRE,
      precioR
    } = reservaUpdate
    const data = await models.reserva.update({
      fechaIngresoR:fechaIngresoR,
      fechaSalidaR:fechaSalidaR,
      catidadPersonasR:catidadPersonasR,
      codH:codH,
      codC:codC,
      codRE:codRE,
      precioR:precioR
      },
      {where:{id:id}}
    )
    if(data == 0){
      throw boom.notFound('reserva no encontrada')
    }
    return {
      id:id,
      ...reservaUpdate
    }
  }

  async delete(id) {
    const data = await models.reserva.destroy({
      where:{id:id},
    }) 
    if(!data){
      throw boom.notFound('reserva no encontrada')
    }
  }

  async findAll() {
    const data = await models.reserva.findAll();
    return data;
  }
  async findBy(id) {
    const data = await models.reserva.findByPk(id)
    if(!data){
      throw boom.notFound('reserva no encontrada')
    }
    return data
  }
}

module.exports = ReservaService
