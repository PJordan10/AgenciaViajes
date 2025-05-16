//importa el modulo 'express' que es un framework para comstruir aplicaciones web en Node.js
import express from 'express';

import router from './routes/routes.js';

import db from './config/db.js';

db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch( error => console.log(error));

//crea una instancia de una aplicacion de express
const app = express();

//define el puerto en el que el servidor escuchara
//usa el valor definido en la variable de entorno PORT o el puerto 3000 por defecto
const port = process.env.PORT || 3000;

/*app.get('/', (req, res) => {
    res.send('!Bienvenido a la pagina principal!');
});*/


app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.use(express.static('public'));

//inicia el servidor para que escuche en el puerto definido
app.listen(port, () => {
    //muestra un mensaje en la consola indicando que el servidor esta corriendo
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});

//habilitar pug
app.set('view engine', 'pug');

//obtener año actual
app.use((req, res, next) => {
    const year = new Date();
    //locals permiten almacenar variables que se pueden usar en las vistas
    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de Viajes";

    next();
});

app.get('/', (req, res) => {
    res.send('!Bienvenido a la pagina principal!');
});

/*ruta raiz
app.get('/', (req, res) => {
    //responde con un mensaje de bienvenida
    res.send('Hola desde res.send');
});*/

/*Ruta 2: res.json - Envío de datos JSON
app.get ('/json', (req, res) => {
    //responde con un objeto JSON
    res.json({
        mensaje: 'Hola en formato JSON',
        usuario: 'Yuli',
        activo: true,
    });
});*/

/* Ruta 3: res.redirect - Redireccionamiento
app.get('/redirigir', (req, res) => {
    res.redirect('/json');
});*/

/* Ruta 4: res.render - Renderizar vista con datos
app.get('/vista', (req, res) => {
    res.render('index', { titulo: 'Hola desde EJS', usuario: 'Juan' });
});*/

/* Ruta 5: req.query - Obtener parámetros de consulta (URL)
app.get('/buscar', (req, res) => {
    const { nombre, edad } = req.query;
    res.send(`Parámetros recibidos: nombre = ${nombre}, edad = ${edad}`);
});*/

/* Ruta 6: req.params - Obtener parámetros en la ruta
app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    res.send(`ID de usuario recibido: ${id}`);
}); */
  
  
  
  