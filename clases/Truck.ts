import { Vehicle } from "./Vehicle";

export class Truck extends Vehicle {
  private loadCapacity: number;

  constructor(patent: string, brand: string, model: string, age: number, loadCapacity: number) {
    super(patent, brand, model, age);
    this.loadCapacity = loadCapacity;
  }

  public getDoors(): number {
    return this.loadCapacity;
  }

  public setDoors(loadCapacity: number): void {
    this.loadCapacity = loadCapacity;
  }
}

