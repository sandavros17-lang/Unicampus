// middleware - matricula (dia 13  trabajo grupo)

import { Request, Response, NextFunction } from 'express';

export const validarMatricula = (req: Request, res: Response, next: NextFunction): void => {
    const { estudianteId, cursoId, semestre, notaFinal } = req.body;

    if (estudianteId === undefined || cursoId === undefined || semestre === undefined || notaFinal === undefined) {
        res.status(400).json({ error: "Todos los campos son obligatorios (estudianteId, cursoId, semestre, notaFinal)" });
        return;
    }

    if (typeof estudianteId !== 'number' || estudianteId <= 0) {
        res.status(400).json({ error: "El campo 'estudianteId' debe ser un número entero positivo" });
        return;
    }

    if (typeof cursoId !== 'number' || cursoId <= 0) {
        res.status(400).json({ error: "El campo 'cursoId' debe ser un número entero positivo" });
        return;
    }

    if (typeof semestre !== 'string' || semestre.trim() === '') {
        res.status(400).json({ error: "El campo 'semestre' debe ser una cadena de texto no vacía" });
        return;
    }

    if (typeof notaFinal !== 'number' || notaFinal < 0) {
        res.status(400).json({ error: "El campo 'notaFinal' debe ser un numero positivo" });
        return;
    }

    next();
};

// fin - middleware - matricula (dia 13  trabajo grupo)