import { Car, Truck, MotorCycle } from "./clases";

export class VehicleReg {
  private cars: Car[] = [];
  private motorCycles: MotorCycle[] = [];
  private trucks: Truck[] = [];

  public setAddCar(car: Car): void {
    this.cars.push(car);
  }

  public setAddMotorCycle(motorCycle: MotorCycle): void {
    this.motorCycles.push(motorCycle);
  }

  public setAddTruck(truck: Truck): void {
    this.trucks.push(truck);
  }

  public getCars(): Car[] {
    if (this.cars.length === 0) {
      console.log("No hay autos disponibles");
    }
    return this.cars;
  }

  public getMotorCycles(): MotorCycle[] {
    if (this.motorCycles.length === 0) {
      console.log("No hay motos disponibles");
    }
    return this.motorCycles;
  }

  public getTrucks(): Truck[] {
    if (this.trucks.length === 0) {
      console.log("No hay camiones disponibles");
    }
    return this.trucks;
  }

  public removeReg<T>(vehicleArray: T[], index: number): void {
    if (index >= 0 && index < vehicleArray.length) {
      vehicleArray.splice(index, 1);
      console.log(`Vehículo en el índice ${index} eliminado.`);
    } else {
      console.log("Índice inválido.");
    }
  }
}

export const reg = new VehicleReg();
