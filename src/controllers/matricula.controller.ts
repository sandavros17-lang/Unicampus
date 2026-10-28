// controller - matricula (dia 13  trabajo grupo)

import { Request, Response } from 'express';
import { matriculasData, nextMatriculaId } from '../data/matricula.data';
import { Matricula } from '../interfaces/matricula.interface';

let currentId = nextMatriculaId;

export const obtenerMatriculas = (req: Request, res: Response): void => {
    res.status(200).json(matriculasData);
};

export const obtenerMatriculaPorId = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id);
    const matricula = matriculasData.find(m => m.id === id);

    if (!matricula) {
        res.status(404).json({ error: `Matrícula con ID ${id} no encontrada` });
        return;
    }
    res.status(200).json(matricula);
};

export const crearMatricula = (req: Request, res: Response): void => {
    const { estudianteId, cursoId, semestre, notaFinal } = req.body;

    const nuevaMatricula: Matricula = {
        id: currentId++,
        estudianteId,
        cursoId,
        semestre,
        notaFinal
    };

    matriculasData.push(nuevaMatricula);
    res.status(201).json(nuevaMatricula);
};

export const actualizarMatricula = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id);
    const indice = matriculasData.findIndex(m => m.id === id);

    if (indice === -1) {
        res.status(404).json({ error: `Matrícula con ID ${id} no encontrada` });
        return;
    }

    const { estudianteId, cursoId, semestre, notaFinal } = req.body;

    matriculasData[indice] = {
        id,
        estudianteId,
        cursoId,
        semestre,
        notaFinal
    };

    res.status(200).json(matriculasData[indice]);
};

export const eliminarMatricula = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id);
    const indice = matriculasData.findIndex(m => m.id === id);

    if (indice === -1) {
        res.status(404).json({ error: `Matrícula con ID ${id} no encontrada` });
        return;
    }

    matriculasData.splice(indice, 1);
    res.status(200).json({ mensaje: `Matrícula con ID ${id} eliminada correctamente` });
};

// fin controller - matricula (dia 13  trabajo grupo)