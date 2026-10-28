import { Router } from 'express';
import {
  getEstudiantes,
  getEstudianteById,
  createEstudiante,
  updateEstudiante,
  deleteEstudiante
} from '../controllers/estudiante.controller';
import { validarEstudiante } from '../middlewares/estudiante.middleware';

const router = Router();

router.get('/', getEstudiantes);
router.get('/:id', getEstudianteById);
router.post('/', validarEstudiante, createEstudiante);
router.put('/:id', validarEstudiante, updateEstudiante);
router.delete('/:id', deleteEstudiante);

export default router;