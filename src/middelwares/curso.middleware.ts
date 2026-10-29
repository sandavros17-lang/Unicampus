
import { Request, Response, NextFunction } from 'express';

export const validarCurso = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const { codigoCurso, nombreMateria, creditos, profesorId } = req.body;

    if (
        typeof codigoCurso !== 'string' ||
        codigoCurso.trim() === '' ||
        typeof nombreMateria !== 'string' ||
        nombreMateria.trim() === '' ||
        creditos === undefined ||
        profesorId === undefined
    ) {
        res.status(400).json({
            error: 'Todos los campos del curso son obligatorios.'
        });
        return;
    }

    if (
        typeof creditos !== 'number' ||
        !Number.isInteger(creditos) ||
        creditos <= 0
    ) {
        res.status(400).json({
            error: 'Los créditos deben ser un número entero positivo.'
        });
        return;
    }

    if (
        typeof profesorId !== 'number' ||
        !Number.isInteger(profesorId) ||
        profesorId <= 0
    ) {
        res.status(400).json({
            error: 'El ID del profesor debe ser un número entero positivo.'
        });
        return;
    }

    next();
};
