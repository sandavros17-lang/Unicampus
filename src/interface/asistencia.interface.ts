export interface Asistencia {
  id?: number;
  inscripcionId: number;
  fecha: string;
  presente: boolean;
  observacion?: string;
}