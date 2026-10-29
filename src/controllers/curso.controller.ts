
import type { Request, Response } from "express";
import { cursos, generarId } from "../data/curso.ts";
import type { Curso } from "../interface/curso.interface.ts";

export const listarCursos = (req: Request, res: Response) => {
    res.json(cursos.filter(curso => curso.activo));
};

// gerestilosotf
export const buscarCursoPorId = (req: Request, res: Response) => {
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

//pot
export const crearCurso = (req: Request, res: Response) => {
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

//put
export const actualizarCurso = (req: Request, res: Response) => {
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

//softdelete
export const desactivarCurso = (req: Request, res: Response) => {
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

//hardelete
export const eliminarCursoDefinitivamente = (req: Request, res: Response) => {
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
