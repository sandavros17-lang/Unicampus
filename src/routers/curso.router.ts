
import { Router } from "express";
import {
    listarCursos,
    buscarCursoPorId,
    crearCurso,
    actualizarCurso,
    desactivarCurso,
    eliminarCursoDefinitivamente
} from "../controllers/curso.controller.ts";
import { validarCurso } from "../middelwares/curso.middleware.ts";

const router = Router();

// Listar cursos
router.get("/", (req, res, next) => {
    /* #swagger.tags = ['Cursos']
       #swagger.summary = 'Listar cursos activos'
       #swagger.description = 'Obtiene todos los cursos que están activos.'
       #swagger.responses[200] = {
           description: 'Lista de cursos obtenida exitosamente'
       }
    */
    return listarCursos(req, res);
});

// Buscar curso por ID
router.get("/:id", (req, res, next) => {
    /* #swagger.tags = ['Cursos']
       #swagger.summary = 'Buscar curso por ID'
       #swagger.parameters['id'] = {
           in: 'path',
           description: 'ID del curso',
           required: true,
           type: 'integer'
       }
       #swagger.responses[200] = {
           description: 'Curso encontrado'
       }
       #swagger.responses[400] = {
           description: 'ID inválido'
       }
       #swagger.responses[404] = {
           description: 'Curso no encontrado'
       }
    */
    return buscarCursoPorId(req, res);
});

// Crear curso
router.post("/", (req, res, next) => {
    /* #swagger.tags = ['Cursos']
       #swagger.summary = 'Crear un curso'
       #swagger.parameters['body'] = {
           in: 'body',
           required: true,
           schema: {
               codigoCurso: 'INF101',
               nombreMateria: 'Programación I',
               creditos: 5,
               profesorId: 1
           }
       }
       #swagger.responses[201] = {
           description: 'Curso creado exitosamente'
       }
       #swagger.responses[400] = {
           description: 'Datos inválidos'
       }
    */
    return next();
}, validarCurso, crearCurso);

// Actualizar curso
router.put("/:id", (req, res, next) => {
    /* #swagger.tags = ['Cursos']
       #swagger.summary = 'Actualizar un curso'
       #swagger.parameters['id'] = {
           in: 'path',
           description: 'ID del curso',
           required: true,
           type: 'integer'
       }
       #swagger.parameters['body'] = {
           in: 'body',
           required: true,
           schema: {
               codigoCurso: 'INF102',
               nombreMateria: 'Programación II',
               creditos: 5,
               profesorId: 2
           }
       }
       #swagger.responses[200] = {
           description: 'Curso actualizado exitosamente'
       }
       #swagger.responses[400] = {
           description: 'Datos inválidos'
       }
       #swagger.responses[404] = {
           description: 'Curso no encontrado'
       }
    */
    return next();
}, validarCurso, actualizarCurso);

// Desactivar curso
router.delete("/soft/:id", (req, res, next) => {
    /* #swagger.tags = ['Cursos']
       #swagger.summary = 'Desactivar un curso'
       #swagger.description = 'Desactiva un curso sin eliminarlo definitivamente.'
       #swagger.parameters['id'] = {
           in: 'path',
           description: 'ID del curso',
           required: true,
           type: 'integer'
       }
       #swagger.responses[200] = {
           description: 'Curso desactivado correctamente'
       }
       #swagger.responses[404] = {
           description: 'Curso activo no encontrado'
       }
    */
    return desactivarCurso(req, res);
});

// Eliminar curso definitivamente
router.delete("/hard/:id", (req, res, next) => {
    /* #swagger.tags = ['Cursos']
       #swagger.summary = 'Eliminar curso definitivamente'
       #swagger.description = 'Elimina permanentemente un curso.'
       #swagger.parameters['id'] = {
           in: 'path',
           description: 'ID del curso',
           required: true,
           type: 'integer'
       }
       #swagger.responses[200] = {
           description: 'Curso eliminado definitivamente'
       }
       #swagger.responses[404] = {
           description: 'Curso no encontrado'
       }
    */
    return eliminarCursoDefinitivamente(req, res);
});

export default router;
