
import { Router } from "express";
import {
    listarCursos,
    buscarCursoPorId,
    crearCurso,
    actualizarCurso,
    desactivarCurso,
    eliminarCursoDefinitivamente
} from "../controllers/curso.controller.ts";
import { validarCurso } from "../middelwares/curso.middleware.ts";

const router = Router();

//get general
router.get("/", listarCursos);

// getindividual
router.get("/:id", buscarCursoPorId);

//post crear cursosr
router.post("/", validarCurso, crearCurso);

//putactuliti
router.put("/:id", validarCurso, actualizarCurso);

// delete uno
router.delete("/soft/:id", desactivarCurso);

//delete general
router.delete("/hard/:id", eliminarCursoDefinitivamente);

export default router;
