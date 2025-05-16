import { Testimonial } from "../models/Testimonial.js";

const guardarTestimonial = async (req, res) => {
    //validar los datos del formulario
    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if (!nombre) {
        errores.push({ 'mensaje': 'Agrega tu Nombre' });
    }
    if (!correo) {
        errores.push({ 'mensaje': 'Tu Correo es Obligatorio' });
    }
    if (!mensaje) {
        errores.push({ 'mensaje': 'Un Testimonial no puede ir Vacío' });
    }
// hasta aca en clase, terminar resto

    if (errores.length > 0) {
        //consultar base de datos
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        });
    } else {
        //almacenar en la base de datos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });

            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    }
}

export {
    guardarTestimonial
}