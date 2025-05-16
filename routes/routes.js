//Importa express que permite crear servidor y manejar rutas
import express from 'express';

import { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje } from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialesController.js';

//Crea instancia del enrutador express, se utilizara para definir las rutas del sitio web
const router = express.Router();

// ================== RUTAS TIPO GET ==================//
//Ruta para la pagina de inicio, cuando el usuario accede a la URL raiz '/', se ejecuta la funcion 'paginaInicio'
router.get('/', paginaInicio);

//Ruta para la pagina de nosotros, cuando el usuario accede a la URL '/nosotros', se ejecuta la funcion 'paginaNosotros'
router.get('/nosotros', paginaNosotros);

//Ruta para la pagina viajes, cuando el usuario accede a la URL '/viajes', se ejecuta la funcion 'paginaViajes'
router.get('/viajes', paginaViajes);

//Ruta para mostrar detalle de un viaje especifico, usa parametro dinamico ':slug' para identificar cada viaje
//Ejemplo URL: '/viajes/aventura-en-Peru'
router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);

// ================== RUTAS TIPO POST ==================//

router.post('/testimoniales', guardarTestimonial);

// ================== EXPORTACION ==================//
export default router;