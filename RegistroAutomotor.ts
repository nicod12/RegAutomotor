import { Auto } from "./clases/Auto";
import { Camion } from "./clases/Camion";
import { Moto } from "./clases/Moto";

export class RegistroAutomotor {
  private autos: Auto[] = [];
  private motos: Moto[] = [];
  private camiones: Camion[] = [];

  agregarAuto(auto: Auto): void {
    this.autos.push(auto);
  }

  agregarMoto(moto: Moto): void {
    this.motos.push(moto);
  }

  agregarCamion(camion: Camion): void {
    this.camiones.push(camion);
  }

  obtenerAutos(): Auto[] {
    if (this.autos.length === 0) {
      console.log("No hay autos disponibles");
    }
    return this.autos;
  }

  obtenerMotos(): Moto[] {
    if (this.motos.length === 0) {
      console.log("No hay motos disponibles");
    }
    return this.motos;
  }

  obtenerCamiones(): Camion[] {
    if (this.camiones.length === 0) {
      console.log("No hay camiones disponibles");
    }
    return this.camiones;
  }
  modificarAuto(index: number, auto: Auto): void {
    if (index >= 0 && index < this.autos.length) {
      this.autos[index] = auto;
    }
  }

  modificarMoto(index: number, moto: Moto): void {
    if (index >= 0 && index < this.motos.length) {
      this.motos[index] = moto;
    }
  }

  modificarCamion(index: number, camion: Camion): void {
    if (index >= 0 && index < this.camiones.length) {
      this.camiones[index] = camion;
    }
  }

  darDeBajaAuto(index: number): void {
    if (index >= 0 && index < this.autos.length) {
      this.autos.splice(index, 1);
    }
  }

  darDeBajaMoto(index: number): void {
    if (index >= 0 && index < this.motos.length) {
      this.motos.splice(index, 1);
    }
  }

  darDeBajaCamion(index: number): void {
    if (index >= 0 && index < this.camiones.length) {
      this.camiones.splice(index, 1);
    }
  }
}

export const registro = new RegistroAutomotor();
