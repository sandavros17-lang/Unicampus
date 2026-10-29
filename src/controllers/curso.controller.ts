
import type { Request, Response } from "express";
import { cursos, generarId } from "../data/curso.ts";
import type { Curso } from "../interface/curso.interface.ts";

// GET: Listar cursos
export const listarCursos = (req: Request, res: Response) => {
    /* #swagger.tags = ['Cursos']
       #swagger.summary = 'Listar cursos activos'
       #swagger.description = 'Obtiene la lista de todos los cursos activos.'
       #swagger.responses[200] = {
           description: 'Lista de cursos obtenida exitosamente'
       }
    */
    res.json(cursos.filter(curso => curso.activo));
};

// GET: Buscar curso por ID
export const buscarCursoPorId = (req: Request, res: Response) => {
    /* #swagger.tags = ['Cursos']
       #swagger.summary = 'Buscar curso por ID'
       #swagger.description = 'Busca un curso activo utilizando su ID.'
       #swagger.parameters['id'] = {
           in: 'path',
           description: 'ID del curso',
           required: true,
           type: 'integer'
       }
       #swagger.responses[200] = {
           description: 'Curso encontrado exitosamente'
       }
       #swagger.responses[400] = {
           description: 'El ID debe ser un número entero positivo'
       }
       #swagger.responses[404] = {
           description: 'Curso no encontrado'
       }
    */
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            error: "El ID debe ser un número entero positivo"
        });
    }

    const curso = cursos.find(curso => curso.id === id && curso.activo);

    if (!curso) {
        return res.status(404).json({
            error: "Curso no encontrado"
        });
    }

    res.json(curso);
};

// POST: Crear curso
export const crearCurso = (req: Request, res: Response) => {
    /* #swagger.tags = ['Cursos']
       #swagger.summary = 'Crear curso'
       #swagger.description = 'Registra un nuevo curso.'
       #swagger.parameters['body'] = {
           in: 'body',
           description: 'Datos del nuevo curso',
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
           description: 'Datos del curso inválidos'
       }
    */
    const { codigoCurso, nombreMateria, creditos, profesorId } = req.body;

    const nuevoCurso: Curso = {
        id: generarId(),
        codigoCurso,
        nombreMateria,
        creditos,
        profesorId,
        activo: true
    };

    cursos.push(nuevoCurso);

    res.status(201).json(nuevoCurso);
};

// PUT: Actualizar curso
export const actualizarCurso = (req: Request, res: Response) => {
    /* #swagger.tags = ['Cursos']
       #swagger.summary = 'Actualizar curso'
       #swagger.description = 'Actualiza los datos de un curso activo.'
       #swagger.parameters['id'] = {
           in: 'path',
           description: 'ID del curso',
           required: true,
           type: 'integer'
       }
       #swagger.parameters['body'] = {
           in: 'body',
           description: 'Datos actualizados del curso',
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
           description: 'El ID debe ser un número entero positivo'
       }
       #swagger.responses[404] = {
           description: 'Curso no encontrado'
       }
    */
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            error: "El ID debe ser un número entero positivo"
        });
    }

    const curso = cursos.find(curso => curso.id === id && curso.activo);

    if (!curso) {
        return res.status(404).json({
            error: "Curso no encontrado"
        });
    }

    const { codigoCurso, nombreMateria, creditos, profesorId } = req.body;

    curso.codigoCurso = codigoCurso;
    curso.nombreMateria = nombreMateria;
    curso.creditos = creditos;
    curso.profesorId = profesorId;

    res.json(curso);
};

// DELETE: Desactivar curso (eliminación lógica)
export const desactivarCurso = (req: Request, res: Response) => {
    /* #swagger.tags = ['Cursos']
       #swagger.summary = 'Desactivar curso'
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
    const id = Number(req.params.id);
    const curso = cursos.find(curso => curso.id === id && curso.activo);

    if (!curso) {
        return res.status(404).json({
            error: "Curso activo no encontrado"
        });
    }

    curso.activo = false;

    res.json({
        mensaje: "Curso desactivado correctamente",
        curso
    });
};

// DELETE: Eliminar curso definitivamente
export const eliminarCursoDefinitivamente = (req: Request, res: Response) => {
    /* #swagger.tags = ['Cursos']
       #swagger.summary = 'Eliminar curso definitivamente'
       #swagger.description = 'Elimina permanentemente un curso del arreglo.'
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
    const id = Number(req.params.id);
    const indice = cursos.findIndex(curso => curso.id === id);

    if (indice === -1) {
        return res.status(404).json({
            error: "Curso no encontrado"
        });
    }

    const eliminado = cursos.splice(indice, 1);

    res.json({
        mensaje: "Curso eliminado definitivamente",
        curso: eliminado[0]
    });
};
