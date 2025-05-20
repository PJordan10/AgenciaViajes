import Sequelize from 'sequelize';

const db = new Sequelize(
  'b5tkpullu8pj3dqpwwio', // base de datos
  'uonifjw3nrbrwjz8',     // usuario
  '1QRne9ZxXVo6Qs3vL13Y', // contraseña
  {
    host: 'b5tkpullu8pj3dqpwwio-mysql.services.clever-cloud.com',
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306, // agregar explícitamente el puerto si es necesario
    define: {
      timestamps: false
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    operatorsAliases: false
  }
);

export default db;