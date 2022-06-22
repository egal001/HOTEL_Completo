const boom = require('@hapi/boom');
const crypto = require('crypto')//uuid
const {models} = require('../libs/sequelize')
class HabitacionesService {
  constructor() {}

  async create(habitacion) {
    const nuevaHabitacion = {
      codH: crypto.randomUUID(),
      ...habitacion
    }
    const {
      codH,
      caracteristicasH,
      tipoH,
      nroH,
      precioH,
      pisoH,
      capacidadH,
      estadoH,
      imagen
    } = nuevaHabitacion
    const salida = await models.habitacion.create(nuevaHabitacion)
    return salida
  }

  async update(id, habitacion) {
    const {
      caracteristicasH,
      tipoH,
      nroH,
      precioH,
      pisoH,
      capacidadH,
      estadoH,
      imagen
    } = habitacion
    const data = await models.habitacion.update({
      caracteristicasH:caracteristicasH,
      tipoH:tipoH,
      nroH:nroH,
      precioH:precioH,
      pisoH:pisoH,
      capacidadH:capacidadH,
      estadoH:estadoH,
      imagen:imagen
      },
      {where:{codH:id}}
    )
    if(data == 0){
      throw boom.notFound('habitacion no encontrada')
    }
    return {
      codH:id,
      ...habitacion
    }
  }

  async updateParcial(id, habitacionParcial) {
    const {
      caracteristicasH,
      tipoH,
      nroH,
      precioH,
      pisoH,
      capacidadH,
      estadoH,
      imagen
    } = habitacionParcial
    const data = await models.habitacion.update({
      caracteristicasH:caracteristicasH,
      tipoH:tipoH,
      nroH:nroH,
      precioH:precioH,
      pisoH:pisoH,
      capacidadH:capacidadH,
      estadoH:estadoH,
      imagen:imagen
      },
      {where:{codH:id}}
    )
    if(data == 0){
      throw boom.notFound('habitacion no encontrada')
    }
    return {
      codH:id,
      ...habitacionParcial
    }
  }

  async delete(id) {
    const data = await models.habitacion.destroy({
      where:{codH:id},
    }) 
    if(!data){
      throw boom.notFound('habitacion no encontrada')
    }
  }

  async findAll() {
    const data = await models.habitacion.findAll();
    return data;
  }
  async findBy(id) {
    const data = await models.habitacion.findByPk(id)
    if(!data){
      throw boom.notFound('habitacion no encontrada')
    }
    return data
  }
}

module.exports = HabitacionesService
