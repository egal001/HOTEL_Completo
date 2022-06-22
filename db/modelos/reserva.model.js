const sequelize = require('sequelize')
const {Model,Sequelize,DataTypes} = require('sequelize')

const RESERVA_TABLE = 'reserva'

const reservaSchema = {
    id: {
        primaryKey: true,
        type: DataTypes.UUID
    },
    fechaIngresoR: {
        allowNull: false,
        type: DataTypes.DATE
    },
    fechaSalidaR: {
        allowNull: false,
        type: DataTypes.DATE
    },
    precioR: {
        allowNull: false,
        type: DataTypes.DECIMAL
    },
    catidadPersonasR: {
        allowNull: false,
        type: DataTypes.STRING
    },
    codH: {
        type: DataTypes.UUID,
        allowNull:false,
        references:{
            model:'habitaciones'
        }
    },
    codC: {
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model: 'clienteReservas'
        }
    },
    codRE: {
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model: 'recepcionistas'
        }
    }

}
class Reserva extends Model{
    static associate(models){
        this.belongsTo(models.habitacion,{
            as: 'habitacion' 
        });
        this.belongsTo(models.clienteReserva,{
            as: 'clienteReserva' 
        });
            this.belongsTo(models.recepcionista,{
            as: 'recepcionista'
        });
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: RESERVA_TABLE,
            modelName: 'reserva',
            timestamps: false
        }
    }
}
module.exports = {RESERVA_TABLE,reservaSchema,Reserva}