import { Car } from "./clases";
import { reg } from "./VehicleReg";


const car = new Car("304XFG", "Toyota", "Hilux", 2019, 4)

reg.setAddCar(car);

console.log(reg.getCars());

car.setAge(2020);
car.setPatent("XOXO12")

console.log("----------------");

console.log(reg.getCars());

reg.removeReg(reg.getCars(), 0);

console.log("-----------------");

console.log(reg.getCars());


