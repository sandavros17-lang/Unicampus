
import type { Curso } from "../interface/curso.interface.ts";
export const cursos: Curso[] = [
    {
        id: 1,
        codigoCurso: "101t",
        nombreMateria: "Programación I",
        creditos: 4,
        profesorId: 1,
        activo: true
    },
    {
        id: 2,
        codigoCurso: "201e",
        nombreMateria: "Base de Datos",
        creditos: 5,
        profesorId: 2,
        activo: true
    },
    {
        id: 3,
        codigoCurso: "301t",
        nombreMateria: "Desarrollo Web",
        creditos: 4,
        profesorId: 3,
        activo: true
    }
];

let siguienteId = 4;

export const generarId = (): number => {
    return siguienteId++;
};
