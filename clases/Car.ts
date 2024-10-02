import { Vehicle } from "./Vehicle";

export class Car extends Vehicle {
  private doors: number;

  constructor(patent: string, brand: string, model: string, age: number, doors: number) {
    super(patent, brand, model, age);
    this.doors = doors;
  }

  public getDoors(): number {
    return this.doors;
  }

  public setDoors(doors: number): void {
    this.doors = doors;
  }
}
