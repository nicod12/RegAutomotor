import { TipoDeVehiculo, Vehiculo } from "./Vehiculos";

export class RegistroAutomotor {
  private vehiculos: Vehiculo[] = [];

  getVehiculos(): Vehiculo[] {
    return this.vehiculos;
  }

  setVehiculo(
    tipo: TipoDeVehiculo,
    marca: string,
    modelo: string,
    año: number,
    patente: string,
  ): void {
    const nuevoVehiculo: Vehiculo = { tipo: tipo, marca, modelo, año, patente };
    this.vehiculos.push(nuevoVehiculo);
  }

  modificarVehiculo(
    patente: string,
    datosModificados: Partial<Vehiculo>,
  ): void {
    const vehiculo = this.vehiculos.find((v) => v.patente === patente);
    if (vehiculo) {
      Object.assign(vehiculo, datosModificados);
    }
  }

  darDebaja(patente: string): void {
    this.vehiculos = this.vehiculos.filter(
      (vehiculo) => vehiculo.patente !== patente,
    );
  }
}

export const registro = new RegistroAutomotor();
