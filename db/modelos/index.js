const {CLIENTE_RESERVA_TABLE,clienteReservaSchema,ClienteReserva} = require('./clienteReserva.model')
const {HABITACION_TABLE,habitacionSchema,Habitacion} = require('./habitacion.model')
const {RECEPCIONISTA_TABLE,recepcionistaSchema,Recepcionista} = require('./recepcionista.model')
const {RESERVA_TABLE,reservaSchema,Reserva} = require('./reserva.model')

function setupModels(sequelize){
    ClienteReserva.init(clienteReservaSchema,ClienteReserva.config(sequelize))//tablas
    Habitacion.init(habitacionSchema,Habitacion.config(sequelize))
    Recepcionista.init(recepcionistaSchema, Recepcionista.config(sequelize))
    Reserva.init(reservaSchema,Reserva.config(sequelize))

    ClienteReserva.associate(sequelize.models) //asociacion
    Habitacion.associate(sequelize.models)
    Recepcionista.associate(sequelize.models)
} 

module.exports = {setupModels}
 