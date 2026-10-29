import type { Request, Response } from "express";
import  {listaProfesores } from "../data/profesores.data";
import { type profesor } from "../interface/profesores.interface";
import { ValidarDatosProfesores } from "../middelwares/profesores.middleware";


//listar todos los profesores
export function traerTodosProfesores(req: Request, res: Response) {
    const profesores: profesor[] = listaProfesores;

    res.status(200).json({
        ok: true,
        mensaje: "lista de profesores disponibles",
        total: profesores.length,
        data: profesores,
    });
}

//traer un solo profesor
export function traerUnProfesor(req: Request, res: Response){
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

//crear un profesor
export function crearProfesor(req: Request, res: Response){
    const {cedula, nombres, correoInstitucional, tiempoCompleto} = req.body;
    const profesor: profesor = {
        id: Number(listaProfesores.length + 1),
        cedula,
        nombres,
        correoInstitucional,
        tiempoCompleto,
    };
    listaProfesores.push(profesor);
    res.status(201).json({
        ok: true,
        mensaje: "profesor creado",
        data: profesor,
    });
}

//actualizar un profesor
export function actualizarProfesor(req: Request, res: Response){
    const id = Number(req.params.id);
    const {cedula, nombres, correoInstitucional, tiempoCompleto} = req.body;
    let profesor = listaProfesores.find((p) => p.id === id);
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

//eliminar profesor
export function elimiarProfesorHard (req: Request, res: Response){
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
