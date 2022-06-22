const sequelize = require('sequelize')
const {Model,Sequelize,DataTypes} = require('sequelize')

const CLIENTE_RESERVA_TABLE = 'clienteReservas'

const clienteReservaSchema = {
    codC: {
        primaryKey: true,
        type: DataTypes.UUID
    },
    nombreCliente: {
        allowNull: false,
        field: 'nombre_cliente',
        type: DataTypes.STRING
    },
    apellidosCliente: {
        allowNull: false,
        field: 'apellidos_cliente',
        type: DataTypes.STRING
    },
    correoCliente: {
        allowNull: false,
        field: 'correo_cliente',
        type: DataTypes.STRING
    },
    numeroCelularCliente: {
        allowNull: false,
        field: 'nro_celular_cliente',
        type: DataTypes.STRING
    },
    fechaIngreso: {
        allowNull:false,
        field: 'fecha_ingreso',
        type: DataTypes.DATE
    },
    fechaSalida:{
        allowNull: false,
        field: 'fecha_salida',
        type: DataTypes.DATE
    },
    tipoHabitacion: {
        allowNull: false,
        field: 'tipo_habitacion',
        type: DataTypes.STRING
    },
    tipoDePago: {
        allowNull: false,
        field: 'tipo_pago',
        type: DataTypes.STRING
    }
}
class ClienteReserva extends Model{
    static associate(models){
        this.hasMany(models.reserva,{
            foreignKey: 'codC'
        })
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: CLIENTE_RESERVA_TABLE,
            modelName: 'clienteReserva',
            timestamps: false
        }
    }
}
module.exports = {CLIENTE_RESERVA_TABLE,clienteReservaSchema,ClienteReserva}