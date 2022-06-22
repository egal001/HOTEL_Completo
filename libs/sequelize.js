const {Sequelize} = require('sequelize');
const {setupModels} = require('../db/modelos/index') //importando

const user = 'postgres';
const host = 'localhost';
const port = 5432;
const password = 'efrain'
const database = 'reservaHotel'

const USUARIO = encodeURIComponent(user)
const PASSWORD = encodeURIComponent(password)


const URI = `postgres://${USUARIO}:${PASSWORD}@${host}:${port}/${database}`

const sequelize = new Sequelize(URI,{
  dialect: 'postgres',
  logging: console.log
})
setupModels(sequelize) // se cargaron todos los modelos
sequelize.sync() // ejecuta una sicronizacion 
module.exports = sequelize