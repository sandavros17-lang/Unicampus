
import type { Request, Response, NextFunction } from "express";

export const validarCurso = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { codigoCurso, nombreMateria, creditos, profesorId } = req.body;

    if (
        typeof codigoCurso !== "string" ||
        codigoCurso.trim() === ""
    ) {
        return res.status(400).json({
            error: "El código del curso es obligatorio y debe ser texto"
        });
    }

    if (
        typeof nombreMateria !== "string" ||
        nombreMateria.trim() === ""
    ) {
        return res.status(400).json({
            error: "El nombre de la materia es obligatorio y debe ser texto"
        });
    }

    if (
        typeof creditos !== "number" ||
        !Number.isInteger(creditos) ||
        creditos <= 0
    ) {
        return res.status(400).json({
            error: "Los créditos deben ser un número entero positivo"
        });
    }

    if (
        typeof profesorId !== "number" ||
        !Number.isInteger(profesorId) ||
        profesorId <= 0
    ) {
        return res.status(400).json({
            error: "El ID del profesor debe ser un número entero positivo"
        });
    }

    next();
};
