export type TipoDeVehiculo = "auto" | "moto" | "camion";

export interface Vehiculo {
  tipo: TipoDeVehiculo;
  marca: string;
  modelo: string;
  año: number;
  patente: string;
}

