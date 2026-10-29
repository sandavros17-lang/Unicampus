import type { Request, Response } from "express";
import { listaProfesores } from "../data/profesores.data";
import { type profesor } from "../interface/profesores.interface";

// Listar todos los profesores
export function traerTodosProfesores(req: Request, res: Response) {
    /* 
      #swagger.tags = ['Profesores']
      #swagger.summary = 'Traer todos los profesores'
      #swagger.description = 'Endpoint para obtener todos los profesores registrados'
      #swagger.security = [{
        "ApiKeyAuth": []
      }]
    */
    const profesores: profesor[] = listaProfesores;
    res.status(200).json({
        ok: true,
        mensaje: "lista de profesores disponibles",
        total: profesores.length,
        data: profesores,
    });
}

// Traer un solo profesor
export function traerUnProfesor(req: Request, res: Response) {
    /* 
      #swagger.tags = ['Profesores']
      #swagger.summary = 'Traer un profesor'
      #swagger.description = 'Endpoint para obtener un profesor por su ID'
      #swagger.parameters['id'] = {
      description: 'ID del profesor',
      type: 'string',
      required: true,
      example: '12438'
      }
      #swagger.security = [{
        "ApiKeyAuth": []
      }]
    */
    const id = Number(req.params.id);
    const profesor = listaProfesores.find((p) => p.id === id);
    if (!profesor) {
        return res.status(404).json({
            ok: false,
            mensaje: "profesor no encontrado",
        });
    }
    res.status(200).json({
        ok: true,
        mensaje: "profesor encontrado",
        data: profesor,
    });
}

// Crear un profesor
export function crearProfesor(req: Request, res: Response) {
    /* 
      #swagger.tags = ['Profesores']
      #swagger.summary = 'Crear un profesor'
      #swagger.description = 'Endpoint para crear un profesor por su ID'
      #swagger.parameters['id'] = {
        description: 'ID del profesor',
        type: 'number',
        required: true,
        example: 1
      }
      #swagger.parameters['profesorActualizado'] = {
        in: 'body',
        description: 'Campos del profesor a actualizar',
        required: true,
        schema: {
          cedula: "cedula9",
          nombres: "Nombre",
          correoInstitucional: "nuevo_correo@gmail.com",
          tiempoCompleto: true
        }
      }
      #swagger.security = [{
        "ApiKeyAuth": []
      }]
    */
    const { cedula, nombres, correoInstitucional, tiempoCompleto } = req.body;
    const nuevoProfesor: profesor = {
            id: listaProfesores.length + 1,
        cedula,
        nombres,
        correoInstitucional,
        tiempoCompleto,
    };
    listaProfesores.push(nuevoProfesor);
    res.status(201).json({
        ok: true,
        mensaje: "profesor creado",
        data: nuevoProfesor,
    });
}

// Actualizar un profesor
export function actualizarProfesor(req: Request, res: Response) {
    /* 
      #swagger.tags = ['Profesores']
      #swagger.summary = 'Actualizar un profesor'
      #swagger.description = 'Endpoint para actualizar un profesor por su ID'
      #swagger.security = [{
        "ApiKeyAuth": []
      }]
    */
    const id = Number(req.params.id);
    const { cedula, nombres, correoInstitucional, tiempoCompleto } = req.body;
    const profesor = listaProfesores.find((p) => p.id === id);
    if (!profesor) {
        return res.status(404).json({
            ok: false,
            mensaje: "profesor no encontrado",
        });
    }
    profesor.nombres = nombres;
    profesor.cedula = cedula;
    profesor.correoInstitucional = correoInstitucional;
    profesor.tiempoCompleto = tiempoCompleto;
    res.status(200).json({
        ok: true,
        mensaje: "profesor actualizado",
        data: profesor,
    });
}

// Eliminar profesor
export function eliminarProfesorHard(req: Request, res: Response) {
    /* 
      #swagger.tags = ['Profesores']
      #swagger.summary = 'eliminar un profesor'
      #swagger.description = 'Endpoint para eliminar un profesor por su ID'
      #swagger.security = [{
        "ApiKeyAuth": []
      }]
    */
    const id = Number(req.params.id);
    const index = listaProfesores.findIndex((p) => p.id === id);
    if (index === -1) {
        return res.status(404).json({ ok: false, mensaje: `El profesor con id ${id} no existe` });
    }
    const [profesorEliminado] = listaProfesores.splice(index, 1);
    res.status(200).json({
        ok: true,
        mensaje: "profesor eliminado con exito",
        data: profesorEliminado,
    });
}
