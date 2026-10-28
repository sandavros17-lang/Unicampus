import { Request, Response, NextFunction } from 'express';

export const validarEstudiante = (req: Request, res: Response, next: NextFunction): void => {
  const { codigoEstudiante, nombres, carrera, promedioAcumulado } = req.body;

  if (!codigoEstudiante || !nombres || !carrera || promedioAcumulado === undefined) {
    res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    return;
  }

  if (typeof promedioAcumulado !== 'number' || promedioAcumulado < 0 || promedioAcumulado > 5) {
    res.status(400).json({ error: 'El promedio acumulado debe ser un número válido entre 0 y 5.' });
    return;
  }

  next();
};