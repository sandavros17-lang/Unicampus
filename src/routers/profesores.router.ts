import { Router } from "express";
import {
    traerTodosProfesores,
    traerUnProfesor,
    crearProfesor,
    actualizarProfesor,
    elimiarProfesorHard,
} from "../controllers/profesores.controller.js";
import { ValidarDatosProfesores } from "../middelwares/profesores.middleware.js";
const router = Router();

router.get('/api/profesores',traerTodosProfesores);
router.get('/api/profesores/:id',traerUnProfesor);
router.post('/api/profesores', ValidarDatosProfesores, crearProfesor);
router.put('/api/profesores/:id', ValidarDatosProfesores, actualizarProfesor);
router.delete('/api/profesores/:id', elimiarProfesorHard);

export default router;