import { Request, Response } from 'express';
import { Asistencia } from '../interface/asistencia.interface';
import { asistencias } from '../data/asistencia.data';

let siguienteId = 4; 

export const listar = (_req: Request, res: Response) => {
  // #swagger.tags = ['Asistencias']
  // #swagger.description = 'Endpoint para listar todos los registros de asistencia'
  // #swagger.responses[200] = { description: 'Lista de asistencias obtenida exitosamente' }
  res.json(asistencias);
};

export const obtenerPorId = (req: Request, res: Response) => {
  // #swagger.tags = ['Asistencias']
  // #swagger.description = 'Endpoint para obtener un registro de asistencia por su ID'
  // #swagger.responses[200] = { description: 'Asistencia encontrada exitosamente' }
  // #swagger.responses[404] = { description: 'Asistencia no encontrada' }
  
  const id = Number(req.params.id);
  const asistencia = asistencias.find((a) => a.id === id);

  if (!asistencia) {
    res.status(404).json({ mensaje: 'Asistencia no encontrada' });
    return;
  }
  res.json(asistencia);
};

export const crear = (req: Request, res: Response) => {
  // #swagger.tags = ['Asistencias']
  // #swagger.description = 'Endpoint para crear un nuevo registro de asistencia'
  // #swagger.responses[201] = { description: 'Asistencia creada exitosamente' }

  const nueva: Asistencia = { ...req.body, id: siguienteId };
  siguienteId++;
  asistencias.push(nueva);
  res.status(201).json(nueva);
};

export const actualizar = (req: Request, res: Response) => {
  // #swagger.tags = ['Asistencias']
  // #swagger.description = 'Endpoint para actualizar un registro de asistencia existente'
  // #swagger.responses[200] = { description: 'Asistencia actualizada exitosamente' }
  // #swagger.responses[404] = { description: 'Asistencia no encontrada' }

  const id = Number(req.params.id);
  const indice = asistencias.findIndex((a) => a.id === id);

  if (indice === -1) {
    res.status(404).json({ mensaje: 'Asistencia no encontrada' });
    return;
  }
  asistencias[indice] = { ...req.body, id };
  res.json(asistencias[indice]);
};

export const eliminar = (req: Request, res: Response) => {
  // #swagger.tags = ['Asistencias']
  // #swagger.description = 'Endpoint para eliminar un registro de asistencia'
  // #swagger.responses[200] = { description: 'Asistencia eliminada exitosamente' }
  // #swagger.responses[404] = { description: 'Asistencia no encontrada' }

  const id = Number(req.params.id);
  const indice = asistencias.findIndex((a) => a.id === id);

  if (indice === -1) {
    res.status(404).json({ mensaje: 'Asistencia no encontrada' });
    return;
  }
  asistencias.splice(indice, 1);
  res.json({ mensaje: 'Asistencia eliminada' });
};