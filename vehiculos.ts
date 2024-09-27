export type TipoDeVehiculo = "auto" | "moto" | "camion";

export interface Vehiculo {
  tipo: TipoDeVehiculo;
  marca: string;
  modelo: string;
  anio: number;
  patente: string;
}
