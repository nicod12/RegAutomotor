export class Moto {
  private patente: string;
  private marca: string;
  private modelo: string;
  private anio: number;

  constructor(patente: string, marca: string, modelo: string, anio: number) {
    this.patente = patente;
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
  }

  getPatente(): string {
    return this.patente;
  }

  setPatente(patente: string): void {
    this.patente = patente;
  }

  getMarca(): string {
    return this.marca;
  }

  setMarca(marca: string): void {
    this.marca = marca;
  }

  getModelo() {
    return this.modelo;
  }

  setModelo(modelo: string): void {
    this.modelo = modelo;
  }

  getAnio(): number {
    return this.anio;
  }

  setAnio(anio: number): void {
    this.anio = anio;
  }
}
