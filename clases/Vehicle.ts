export class Vehicle {

  protected patent: string;
  protected brand: string;
  protected model: string;
  protected age: number;

  constructor(patent: string, brand: string, model: string, age: number) {
    this.patent = patent;
    this.brand = brand;
    this.model = model;
    this.age = age;
  }

  public getPatent(): string {
    return this.patent;
  }
  public getBrand(): string {
    return this.brand;
  }

  public getModel(): string {
    return this.model;
  }

  public getAge(): number {
    return this.age;
  }



  public setPatent(patent: string): void {
    this.patent = patent;
  }
  public setBrand(brand: string): void {
    this.brand = brand;
  }

  public setModel(model: string): void {
    this.model = model;
  }

  public setAge(age: number): void {
    this.age = age;
  }


}
