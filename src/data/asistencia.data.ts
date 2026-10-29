import { Asistencia } from '../interface/asistencia.interface';

export const asistencia: Asistencia[] = [
  { id: 1, inscripcionId: 1, fecha: '2026-10-26', presente: true },
  { id: 2, inscripcionId: 2, fecha: '2026-10-26', presente: false, observacion: 'Faltó con aviso' },
  { id: 3, inscripcionId: 1, fecha: '2026-10-27', presente: true },
];