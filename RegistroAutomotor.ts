import { TipoDeVehiculo, Vehiculo } from "./Vehiculos";


export class RegistroAutomotor  {
    private vehiculos: Vehiculo [] = [];

    getVehiculos(): Vehiculo[] {
        return this.vehiculos;
    }

    setVehiculo(type: TipoDeVehiculo, marca: string, modelo: string, año: number, patente: string): void {
        const nuevoVehiculo: Vehiculo = { tipo: type, marca, modelo, año, patente };
        this.vehiculos.push(nuevoVehiculo);
    }



    darDebaja(patente: string): void {
        this.vehiculos = this.vehiculos.filter(vehiculo => vehiculo.patente !== patente);
    }
}