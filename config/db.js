import { Sequelize } from "sequelize"; 

const db = new Sequelize('agenciaviajes', 'root', '', {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false // Desactivar los campos createdAt y updatedAt
    },
    pool: {
        max: 5, // Número máximo de conexiones en el pool
        min: 0, // Número mínimo de conexiones en el pool
        acquire: 30000, // Tiempo máximo para adquirir una conexión (en ms)
        idle: 10000 // Tiempo máximo que una conexión puede estar inactiva antes de ser liberada (en ms)
    },
    operatorAliases: false, // Desactivar los alias de operadores (opcional)
});

export default db; // Exportar la instancia de Sequelize para usarla en otros archivos