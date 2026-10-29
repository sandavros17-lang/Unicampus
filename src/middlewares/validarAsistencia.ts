import { Request, Response, NextFunction } from 'express';
import { Asistencia } from '../interface/asistencia.interface';

export const validarAsistencia = (req: Request, res: Response, next: NextFunction) => {
  const body: Partial<Asistencia> = req.body ?? {};

  if (typeof body.inscripcionId !== 'number' || body.inscripcionId <= 0) {
    res.status(400).json({ mensaje: 'inscripcionId es obligatorio y debe ser un número positivo' });
    return;
  }

  if (typeof body.fecha !== 'string' || body.fecha.trim() === '') {
    res.status(400).json({ mensaje: 'fecha es obligatoria y debe ser texto' });
    return;
  }

  if (typeof body.presente !== 'boolean') {
    res.status(400).json({ mensaje: 'presente es obligatorio y debe ser true o false' });
    return;
  }

  if (body.observacion !== undefined && typeof body.observacion !== 'string') {
    res.status(400).json({ mensaje: 'observacion debe ser texto' });
    return;
  }

  next();
};