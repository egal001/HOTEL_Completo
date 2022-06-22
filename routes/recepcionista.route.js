const express = require("express")
const router = express.Router()//ENCARGARDO DEL PROCESO DE ROUTING

const controlValidar = require("../middlewares/validation.middleware")
const {crearRecepcionistaSchema,actualizarRecepcionistaSchema,findByRecepcionistaSchema} = require("../schemas/recepcionista.schema")

const recepcionistaService = require('../services/recepcionista.service')
const servicioRecepcion = new recepcionistaService()

router.get('/',async (req,res,next) => {
  try {
    const recepcionistas = await servicioRecepcion.findAll()
    res.status(200).json(recepcionistas)
  } catch (error) {
    next(error)
  }

})

router.get('/:codRE',controlValidar(findByRecepcionistaSchema,'params'),async (req,res,next) => {
  try {
    const {codRE} = req.params;
    const recepcionista = await servicioRecepcion.findBy(codRE)
    res.status(200).json(recepcionista)
  } catch (error) {
    next(error)
  }

})

router.post('/',controlValidar(crearRecepcionistaSchema,'body'),async (req,res,next) => {
  try {
    const body = req.body
    const recepcionista = await servicioRecepcion.create(body)
    res.status(200).json({
      mensaje: 'registro de recepcionista exitoso',
      datosRecepcion: recepcionista
    })
  } catch (error) {
    next(error)
  }
})

router.put('/:codRE',controlValidar(actualizarRecepcionistaSchema,'body'),async(req, res, next) => {
  try {
    const {codRE } = req.params
    const body = {
      codRE: codRE,
      ...req.body
    }
    const recepcionista = await servicioRecepcion.update(codRE, body)
    res.status(200).json({
      mensaje: 'empleado actualizado',
      datos: recepcionista
    })

  } catch (error) {
    next(error)
  }
})

router.patch('/:codRE',controlValidar(actualizarRecepcionistaSchema,'body'),async(req, res, next) => {
  try {
    const {codRE } = req.params
    const body = {
      codRE: codRE,
      ...req.body
    }
    const recepcionista = await servicioRecepcion.updateParcial(codRE, body)
    res.status(200).json({
      mensaje: 'empleado actualizado parcialmente',
      datos: recepcionista
    })

  } catch (error) {
    next(error)
  }
})

router.delete('/:codRE',controlValidar(findByRecepcionistaSchema,'params'),async (req,res,next) => {
  try {
    const {codRE} = req.params
    await servicioRecepcion.delete(codRE)
    res.status(200).json({
      mensaje: "recepcinoista eliminado"
    })

  } catch (error) {
    next(error)

  }

})


module.exports = router
