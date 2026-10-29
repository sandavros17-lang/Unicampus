// base de datos - matricula (dia 13  trabajo grupo)

import { Matricula } from '../interface/matricula.interface';

export const matriculasData: Matricula[] = [

    {
        id: 1,
        estudianteId: 'EST-2026-01',
        cursoId: 101,
        semestre: "2026-2",
        notaFinal: 4.2
    },
    {
        id: 2,
        estudianteId: 'EST-2026-02',
        cursoId: 102,
        semestre: "2026-2",
        notaFinal: 3.9
    },

    {
        id: 3,
        estudianteId: 'EST-2026-03',
        cursoId: 102,
        semestre: "2026-2",
        notaFinal: 2.9
    },

    {
        id: 4,
        estudianteId: 'EST-2026-04',
        cursoId: 101,
        semestre: "2026-2",
        notaFinal: 3.8
    },

    {
        id: 5,
        estudianteId: 'EST-2026-05',
        cursoId: 103,
        semestre: "2026-2",
        notaFinal: 4.0
    },

    {
        id: 6,
        estudianteId: 'EST-2026-06',
        cursoId: 101,
        semestre: "2026-2",
        notaFinal: 3.8
    },

    {
        id: 7,
        estudianteId: 'EST-2026-07',
        cursoId: 101,
        semestre: "2026-2",
        notaFinal: 4.4
    },

    {
        id: 8,
        estudianteId: 'EST-2026-08',
        cursoId: 102,
        semestre: "2026-2",
        notaFinal: 2.1
    },

    {
        id: 9,
        estudianteId: 'EST-2026-09',
        cursoId: 101,
        semestre: "2026-2",
        notaFinal: 4.8
    },

];

export let nextMatriculaId: number = 10;

// fin - base de datos - matricula (dia 13  trabajo grupo)
