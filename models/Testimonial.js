import { Sequelize } from "sequelize";
import db from "../config/db.js"; // Importar la instancia de Sequelize desde el archivo de configuración

export const Testimonial = db.define('testimoniales', {
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
});