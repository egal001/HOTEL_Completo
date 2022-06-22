const express = require("express")
const router = express.Router()

const controlValidar = require("../middlewares/validation.middleware")
const {crearReservaSchema,actualizarReservaSchema,findByReservaSchema} = require("../schemas/reserva.schema")

const ReservaService = require('../services/reserva.service')
const servicioReservas = new ReservaService()

router.get('/',async (req,res,next) => {
  try {
    const reservas = await servicioReservas.findAll()
    res.status(200).json(reservas)
  } catch (error) {
    next(error)
  }

})

router.get('/:id',controlValidar(findByReservaSchema,'params'),async (req,res,next) => {
  try {
    const {id} = req.params;
    const reserva = await servicioReservas.findBy(id)
    res.status(200).json(reserva)
  } catch (error) {
    next(error)
  }

})

router.post('/',controlValidar(crearReservaSchema,'body'),async (req,res,next) => {
  try {
    const body = req.body
    const reserva = await servicioReservas.create(body)
    res.status(200).json({
      mensaje: 'registro de reserva exitoso',
      datosreserva: reserva
    })
  } catch (error) {
    next(error)
  }
})

router.put('/:id',controlValidar(actualizarReservaSchema,'body'),async(req, res, next) => {
  try {
    const { id } = req.params
    const body = {
      id: id,
      ...req.body
    }
    const reserva = await servicioReservas.update(id, body)
    res.status(200).json({
      mensaje: 'reserva actualizada',
      datos: reserva
    })

  } catch (error) {
    next(error)
  }
})

router.patch('/:id',controlValidar(actualizarReservaSchema,'body'),async(req, res, next) => {
  try {
    const { id } = req.params
    const body = {
      id: id,
      ...req.body
    }
    const reserva = await servicioReservas.updateParcial(id, body)
    res.status(200).json({
      mensaje: 'reserva actualizada parcial',
      datos: reserva
    })

  } catch (error) {
    next(error)
  }
})

router.delete('/:id',controlValidar(findByReservaSchema,'params'),async (req,res,next) => {
  try {
    const {id} = req.params
    await servicioReservas.delete(id)
    res.status(200).json({
      mensaje: "reserva eliminada",
    })

  } catch (error) {
    next(error)

  }
})

module.exports = router

