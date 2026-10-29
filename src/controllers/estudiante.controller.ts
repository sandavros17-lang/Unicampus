import { Request, Response } from 'express';
import { estudiantesData } from '../data/estudiante.data';
import { Estudiante } from '../interface/estudiantes.interfaces';

export const getEstudiantes = (req: Request, res: Response) => {
  // #swagger.tags = ['Estudiantes']
  // #swagger.description = 'Endpoint para listar todos los estudiantes'
  // #swagger.responses[200] = { description: 'Lista de estudiantes obtenida exitosamente' }
  res.json(estudiantesData);
};

export const getEstudianteById = (req: Request, res: Response) => {
  // #swagger.tags = ['Estudiantes']
  // #swagger.description = 'Endpoint para obtener un estudiante por su ID'
  // #swagger.responses[200] = { description: 'Estudiante encontrado exitosamente' }
  // #swagger.responses[404] = { description: 'Estudiante no encontrado.' }

  const id = Number(req.params.id);
  const estudiante = estudiantesData.find((e) => e.id === id);

  if (!estudiante) {
    res.status(404).json({ error: 'Estudiante no encontrado.' });
    return;
  }

  res.json(estudiante);
};

export const createEstudiante = (req: Request, res: Response) => {
  // #swagger.tags = ['Estudiantes']
  // #swagger.description = 'Endpoint para crear un nuevo estudiante'
  // #swagger.responses[201] = { description: 'Estudiante creado exitosamente' }

  const nuevoEstudiante: Estudiante = {
    id: estudiantesData.length + 1,
    ...req.body
  };

  estudiantesData.push(nuevoEstudiante);
  res.status(201).json(nuevoEstudiante);
};

export const updateEstudiante = (req: Request, res: Response) => {
  // #swagger.tags = ['Estudiantes']
  // #swagger.description = 'Endpoint para actualizar un estudiante existente'
  // #swagger.responses[200] = { description: 'Estudiante actualizado exitosamente' }
  // #swagger.responses[404] = { description: 'Estudiante no encontrado.' }

  const id = Number(req.params.id);
  const index = estudiantesData.findIndex((e) => e.id === id);

  if (index === -1) {
    res.status(404).json({ error: 'Estudiante no encontrado.' });
    return;
  }

  estudiantesData[index] = { id, ...req.body };
  res.json(estudiantesData[index]);
};

export const deleteEstudiante = (req: Request, res: Response) => {
  // #swagger.tags = ['Estudiantes']
  // #swagger.description = 'Endpoint para eliminar un estudiante'
  // #swagger.responses[200] = { description: 'Estudiante eliminado correctamente' }
  // #swagger.responses[404] = { description: 'Estudiante no encontrado.' }

  const id = Number(req.params.id);
  const index = estudiantesData.findIndex((e) => e.id === id);

  if (index === -1) {
    res.status(404).json({ error: 'Estudiante no encontrado.' });
    return;
  }

  const eliminado = estudiantesData.splice(index, 1);
  res.json({ mensaje: 'Estudiante eliminado correctamente', estudiante: eliminado[0] });
};