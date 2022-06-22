const sequelize = require('sequelize')
const {Model,Sequelize,DataTypes} = require('sequelize')

const HABITACION_TABLE = 'habitaciones'

const habitacionSchema = {
    codH: {
        primaryKey: true,
        type: DataTypes.UUID
    },
    caracteristicasH: {
        allowNull: false,
        field: 'caracteristicas_habitacion',
        type: DataTypes.STRING
    },
    tipoH: {
        allowNull: false,
        field: 'tipo_habitacion',
        type: DataTypes.STRING
    },
    nroH: {
        allowNull: false,
        field: 'nro_habitacion',
        type: DataTypes.INTEGER
    },
    precioH: {
        allowNull: false,
        field: 'precio_habitacion',
        type: DataTypes.DECIMAL
    },
    pisoH: {
        allowNull:false,
        field: 'piso_habitacion',
        type: DataTypes.INTEGER
    },
    capacidadH:{
        allowNull: false,
        field: 'capacidad_habitacion',
        type: DataTypes.INTEGER
    },
    estadoH: {
        allowNull: false,
        field: 'estado_habitacion',
        type: DataTypes.STRING
    },
    imagen: {
        allowNull: false,
        field: 'imagen_habitaicon',
        type: DataTypes.STRING
    }
}
class Habitacion extends Model{
    static associate(models){
        this.hasMany(models.reserva,{
            foreignKey: 'codH'
        })
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: HABITACION_TABLE,
            modelName: 'habitacion',
            timestamps: false
        }
    }
}
module.exports = {HABITACION_TABLE,habitacionSchema,Habitacion}