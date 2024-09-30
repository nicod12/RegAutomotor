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
  modificarAuto(
    index: number,
    nuevosDatos: Partial<{
      marca: string;
      modelo: string;
      anio: number;
      patente: string;
    }>,
  ): void {
    if (index >= 0 && index < this.autos.length) {
      const auto = this.autos[index];
      if (nuevosDatos.patente) auto.setPatente(nuevosDatos.patente);
      if (nuevosDatos.marca) auto.setMarca(nuevosDatos.marca);
      if (nuevosDatos.modelo) auto.setModelo(nuevosDatos.modelo);
      if (nuevosDatos.anio) auto.setAnio(nuevosDatos.anio);
    }
  }

  modificarMoto(
    index: number,
    nuevosDatos: Partial<{
      marca: string;
      modelo: string;
      anio: number;
      patente: string;
    }>,
  ): void {
    if (index >= 0 && index < this.motos.length) {
      const moto = this.motos[index];
      if (nuevosDatos.patente) moto.setPatente(nuevosDatos.patente);
      if (nuevosDatos.marca) moto.setMarca(nuevosDatos.marca);
      if (nuevosDatos.modelo) moto.setModelo(nuevosDatos.modelo);
      if (nuevosDatos.anio) moto.setAnio(nuevosDatos.anio);
    }
  }

  modificarCamion(
    index: number,
    nuevosDatos: Partial<{
      marca: string;
      modelo: string;
      anio: number;
      patente: string;
    }>,
  ): void {
    if (index >= 0 && index < this.camiones.length) {
      const camion = this.camiones[index];
      if (nuevosDatos.patente) camion.setPatente(nuevosDatos.patente);
      if (nuevosDatos.marca) camion.setMarca(nuevosDatos.marca);
      if (nuevosDatos.modelo) camion.setModelo(nuevosDatos.modelo);
      if (nuevosDatos.anio) camion.setAnio(nuevosDatos.anio);
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
