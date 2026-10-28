// router - matricula (dia 13  trabajo grupo)

import { Router } from 'express';
import {
    obtenerMatriculas,
    obtenerMatriculaPorId,
    crearMatricula,
    actualizarMatricula,
    eliminarMatricula
} from '../controllers/matricula.controller';
import { validarMatricula } from '../middlewares/matricula.middleware';

const router = Router();

router.get('/', obtenerMatriculas);
router.get('/:id', obtenerMatriculaPorId);
router.post('/', validarMatricula, crearMatricula);
router.put('/:id', validarMatricula, actualizarMatricula);
router.delete('/:id', eliminarMatricula);

export default router;

// fin router - matricula (dia 13  trabajo grupo)
