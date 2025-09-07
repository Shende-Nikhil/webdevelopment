// Parent class
class Vehicle {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }

    startEngine() {
        console.log(`${this.brand} engine started with ${this.wheels} wheels.`);
    }
}

// Child class
class Car extends Vehicle {
    constructor(brand, wheels, doors) {
        super(brand, wheels);
        this.doors = doors;
    }

    honk() {
        console.log(`${this.brand} car honks!`);
    }
}

// Grandchild class
class ElectricCar extends Car {
    constructor(brand, wheels, doors, batteryCapacity) {
        super(brand, wheels, doors);
        this.batteryCapacity = batteryCapacity;
    }

    charge() {
        console.log(`${this.brand} car is charging with ${this.batteryCapacity} kWh battery.`);
    }
}


let myCar = new ElectricCar("Tesla", 4, 4, 100);


console.log(myCar.brand);        
console.log(myCar.wheels);       
console.log(myCar.doors);        
console.log(myCar.batteryCapacity); 

myCar.startEngine();  
myCar.honk();         
myCar.charge();       
