import { Auto, Moto, Camion } from "./clases";
import { registro } from "./RegistroAutomotor";

const auto = new Auto("X4U46A", "Fiat", "Pulse", 2024);
const auto2 = new Auto("5MKW52", "Toyota", "Corolla", 2013);
const auto3 = new Auto("UEY456", "Ford", "Focus", 2015);

const moto = new Moto("X4U46A", "Honda", "CB500X", 2024);
const moto2 = new Moto("5MKW52", "Yamaha", "MT-07", 2013);
const moto3 = new Moto("UEY456", "Kawasaki", "Ninja 650", 2015);

const camion = new Camion("X4U46A", "Mercedes-Benz", "Actros", 2024);
const camion2 = new Camion("5MKW52", "Volvo", "FH", 2013);
const camion3 = new Camion("UEY456", "Scania", "R500", 2015);

console.log(
  "Registro actual: ",
  registro.obtenerAutos(),
  registro.obtenerMotos(),
  registro.obtenerCamiones(),
);

console.log("--------------");

registro.agregarAuto(auto);
registro.agregarAuto(auto2);
registro.agregarAuto(auto3);

console.log(
  "Registro actualizado:",
  registro.obtenerAutos(),
  registro.obtenerMotos(),
  registro.obtenerCamiones(),
);

console.log("--------------");

registro.agregarMoto(moto);
registro.agregarMoto(moto2);
registro.agregarMoto(moto3);

registro.agregarCamion(camion);
registro.agregarCamion(camion2);
registro.agregarCamion(camion3);

console.log(
  "Registro actualizado: ",
  registro.obtenerAutos(),
  registro.obtenerMotos(),
  registro.obtenerCamiones(),
);

console.log("----------------");

registro.modificarAuto(0, new Auto("GUP203", "Honda", "Civic", 2004));
console.log("Registor de autos: ", registro.obtenerAutos());

console.log("----------------");

registro.darDeBajaMoto(1);

console.log("Registro actualizado: ", registro.obtenerMotos());
