import { Auto } from "./clases/Auto";
import { Camion } from "./clases/Camion";
import { Moto } from "./clases/Moto";

export class RegistroAutomotor {
  private autos: Auto[] = [];
  private motos: Moto[] = [];
  private camiones: Camion[] = [];

  public agregarAuto(auto: Auto): void {
    this.autos.push(auto);
  }

  public agregarMoto(moto: Moto): void {
    this.motos.push(moto);
  }

  public agregarCamion(camion: Camion): void {
    this.camiones.push(camion);
  }

  public obtenerAutos(): Auto[] {
    return this.autos;
  }

  public obtenerMotos(): Moto[] {
    return this.motos;
  }

  public obtenerCamiones(): Camion[] {
    return this.camiones;
  }
}

export const registro = new RegistroAutomotor();
