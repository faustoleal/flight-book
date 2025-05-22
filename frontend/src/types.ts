export interface FinalidadDelVuelos {
  finalidad: string;
}

export interface Aerodromos {
  aerodromo: string;
}

export interface Aviones {
  matricula: string;
  modelo: string;
  potencia: string;
  clase: string;
}

export interface Pilotos {
  id: number;
  name: string;
  usuario: string;
}

export type NewPiloto = Omit<Pilotos, "id">;

export interface HorasDeVuelos {
  id: number;
  desde: Aerodromos;
  hasta: Aerodromos;
  finalidad: FinalidadDelVuelos;
  avion_matricula: Aviones;
  local_dia_p?: number;
  local_dia_c?: number;
  local_noche_p?: number;
  local_noche_c?: number;
  travesia_dia_p?: number;
  travesia_dia_c?: number;
  travesia_noche_p?: number;
  travesia_noche_c?: number;
  aterrizajes: number;
  instructor_de_vuelo?: number;
  reactor?: number;
  multi_motor?: number;
  turbo_helice?: number;
  aeroaplicador?: number;
  instrumentos_real_p?: number;
  instrumentos_real_c?: number;
  capota?: number;
}

export type NewHora = Omit<HorasDeVuelos, "id">;
