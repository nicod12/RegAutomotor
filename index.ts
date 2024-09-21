import { RegistroAutomotor } from "./RegistroAutomotor";

const registro = new RegistroAutomotor();

registro.setVehiculo("auto","toyota","corolla",2019,"BUH123");
registro.setVehiculo('moto', 'Yamaha', 'MT-09', 2018, 'YUY456');
registro.setVehiculo("camion", "Scania", "R 450", 2020, "IRI789");

registro.getVehiculos();

console.log(registro.getVehiculos());

