const express = require("express")
const router = express.Router()

const controlValidar = require("../middlewares/validation.middleware")
const {crearClienteRVSchema,findbyClienteRVSchema,actualizarClienteRVSchema} = require("../schemas/clienteReserva")

const ClienteReservaService = require('../services/clienteReserva.service')
const servicioCliente = new ClienteReservaService()

router.get('/',async (req,res,next) => {
  try {
    const cliente = await servicioCliente.findAll()
    res.status(200).json(cliente)
  } catch (error) {
    next(error)
  }

})

router.get('/:codC',controlValidar(findbyClienteRVSchema,'params'),async (req,res,next) => {
  try {
    const {codC: codC} = req.params;
    const cliente = await servicioCliente.findBy(codC)
    res.status(200).json(cliente)
  } catch (error) {
    next(error)
  }

})

router.post('/',controlValidar(crearClienteRVSchema,'body'),async (req,res,next) => {
  try {
    const body = req.body
    const cliente = await servicioCliente.create(body)
    res.status(200).json({
      mensaje: 'registro de cliente exitoso',
      datosCliente: cliente
    })
  } catch (error) {
    next(error)
  }
})

router.put('/:codC',controlValidar(actualizarClienteRVSchema,'body'),async(req, res, next) => {
  try {
    const { codC } = req.params
    const body = {
      codC: codC,
      ...req.body
    }
    const cliente = await servicioCliente.update(codC, body)
    res.status(200).json({
      mensaje: 'cliente actualizada',
      datos: cliente
    })

  } catch (error) {
    next(error)
  }
})

router.patch('/:codC',controlValidar(actualizarClienteRVSchema,'body'),async(req, res, next) => {
    try {
        const { codC } = req.params
        const body = {
          codC: codC,
          ...req.body
        }
        const cliente = await servicioCliente.update(codC, body)
        res.status(200).json({
          mensaje: 'cliente actualizada',
          datos: cliente
        })
    
      } catch (error) {
        next(error)
      }
})

router.delete('/:codC',controlValidar(findbyClienteRVSchema,'params'),async (req,res,next) => {
  try {
    const {codC} = req.params
    await servicioCliente.delete(codC)
    res.status(200).json({
      mensaje: "cliente eliminado"
    })

  } catch (error) {
    next(error)

  }

})

module.exports = router
