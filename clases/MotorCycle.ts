import { Vehicle } from "./Vehicle";

export class MotorCycle extends Vehicle {
  private displacement: number;

  constructor(patent: string, brand: string, model: string, age: number, displacement: number) {
    super(patent, brand, model, age);
    this.displacement = displacement;
  }

  public getDoors(): number {
    return this.displacement;
  }

  public setDoors(displacement: number): void {
    this.displacement = displacement;
  }
}
