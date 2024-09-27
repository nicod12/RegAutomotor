export class Auto {
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
    if (!patente) {
      throw new Error("La patente es obligatoria");
    }
    this.patente = patente;
  }

  getMarca(): string {
    return this.marca;
  }

  setMarca(marca: string): void {
    if (!marca) {
      throw new Error("La marca es obligatoria");
    }

    this.marca = marca;
  }

  getModelo() {
    return this.modelo;
  }

  setModelo(modelo: string): void {
    if (!modelo) {
      throw new Error("El modelo es obligatorio");
    }

    this.modelo = modelo;
  }

  getAnio(): number {
    return this.anio;
  }

  setAnio(anio: number): void {
    if (!anio) {
      throw new Error("El año es obligatorio");
    }

    this.anio = anio;
  }
}
