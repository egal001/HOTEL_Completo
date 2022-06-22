const boom = require('@hapi/boom');
const crypto = require('crypto')//uuid
const {models} = require('../libs/sequelize')

class recepcionistaService {
  constructor() {}

  async create(recepcionista) {
    const nuevoRecepcionista = {
      codRE: crypto.randomUUID(),
      ...recepcionista
    }
    const {
      codRE,
      nombre,
      apellidoP,
      apellidoM,
      contrasenia,
      correo,
      direccion,
      telefono
    } = nuevoRecepcionista
    const salida = await models.recepcionista.create(nuevoRecepcionista)
    return salida
  }

  async update(id, recepcionista) {
    const {
      nombre,
      apellidoP,
      apellidoM,
      contrasenia,
      correo,
      direccion,
      telefono
    } = recepcionista
    const data = await models.recepcionista.update({
      nombre:nombre,
      apellidoP:apellidoP,
      apellidoM:apellidoM,
      contrasenia:contrasenia,
      correo:correo,
      direccion:direccion,
      telefono:telefono
      },
      {where:{codRE:id}}
    )
    if(data == 0){
      throw boom.notFound('recepcionista no encontrado')
    }
    return {
      codRE:id,
      ...recepcionista
    }
  }

  async updateParcial(id, recepcionistaParcial) {
    const {
      nombre,
      apellidoP,
      apellidoM,
      contrasenia,
      correo,
      direccion,
      telefono
    } = recepcionistaParcial
    const data = await models.recepcionista.update({
      nombre:nombre,
      apellidoP:apellidoP,
      apellidoM:apellidoM,
      contrasenia:contrasenia,
      correo:correo,
      direccion:direccion,
      telefono:telefono
      },
      {where:{codRE:id}}
    )
    if(data == 0){
      throw boom.notFound('recepcionista no encontrado')
    }
    return {
      codRE:id,
      ...recepcionistaParcial
    }
  }

  async delete(id) {
    const data = await models.recepcionista.destroy({
      where:{codRE:id},
    }) 
    if(!data){
      throw boom.notFound('recepcionista no encontrado')
    }
  }

  async findAll() {
    const data = await models.recepcionista.findAll();
    return data;
  }
  async findBy(id) {
    const data = await models.recepcionista.findByPk(id)
    if(!data){
      throw boom.notFound('recepcionista no encontrado')
    }
    return data
  }
}

module.exports = recepcionistaService
