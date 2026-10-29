import { Router } from 'express';
import { validarAsistencia } from '../middlewares/validarAsistencia';
import { listar, obtenerPorId, crear, actualizar, eliminar } from '../controllers/asistencia.controller';

const router = Router();

router.get('/', listar);
router.get('/:id', obtenerPorId);
router.post('/', validarAsistencia, crear);
router.put('/:id', validarAsistencia, actualizar);
router.delete('/:id', eliminar);

export default router;