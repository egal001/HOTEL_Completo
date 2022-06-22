const sequelize = require('sequelize')
const {Model,Sequelize,DataTypes} = require('sequelize')

const RECEPCIONISTA_TABLE = 'recepcionistas'

const recepcionistaSchema = {
    codRE: {
        primaryKey: true,
        type: DataTypes.UUID
    },
    nombre: {
        allowNull: false,
        field: 'nombre_recepcionista',
        type: DataTypes.STRING
    },
    apellidoP: {
        allowNull: false,
        field: 'apellido_p',
        type: DataTypes.STRING
    },
    apellidoM: {
        allowNull: false,
        field: 'apellido_m',
        type: DataTypes.STRING
    },
    contrasenia: {
        allowNull: false,
        field: 'contrasenia_recepcionista',
        type: DataTypes.STRING
    },
    correo: {
        allowNull:false,
        field: 'correo_recepcionista',
        type: DataTypes.STRING
    },
    direccion:{
        allowNull: false,
        field: 'direccion_recepcionista',
        type: DataTypes.STRING
    },
    telefono: {
        allowNull: false,
        field: 'telefono_recepcionista',
        type: DataTypes.STRING
    }
}
class Recepcionista extends Model{
    static associate(models){
        this.hasMany(models.reserva,{
            foreignKey: 'codRE'
        })
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: RECEPCIONISTA_TABLE,
            modelName: 'recepcionista',
            timestamps: false
        }
    }
}
module.exports = {RECEPCIONISTA_TABLE,recepcionistaSchema,Recepcionista}