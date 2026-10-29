import { Router } from "express";
import {
    traerTodosProfesores,
    traerUnProfesor,
    crearProfesor,
    actualizarProfesor,
    eliminarProfesorHard,
} from "../controllers/profesores.controller";
import { ValidarDatosProfesores } from "../middelwares/profesores.middleware";

const router = Router();

router.get('/', traerTodosProfesores);
router.get('/:id', traerUnProfesor);
router.post('/', ValidarDatosProfesores, crearProfesor);
router.put('/:id', ValidarDatosProfesores, actualizarProfesor);
router.delete('/:id', eliminarProfesorHard);

export default router;