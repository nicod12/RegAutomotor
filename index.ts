import { registro } from "./RegistroAutomotor";

registro.setVehiculo("auto", "toyota", "corolla", 2019, "BUH123");
registro.setVehiculo("moto", "Yamaha", "MT-09", 2018, "YUY456");
registro.setVehiculo("camion", "Scania", "R 450", 2020, "IRI789");

console.log(
  "registro de vehiculo antes de actualizar",
  registro.getVehiculos(),
);

registro.modificarVehiculo("BUH123", { modelo: "Corolla 2020", anio: 2020 });

console.log("registro de vehiculo actualizado", registro.getVehiculos());

registro.darDebaja("YUY456");

console.log("Vehículos después de dar de baja:");
console.log(registro.getVehiculos());
