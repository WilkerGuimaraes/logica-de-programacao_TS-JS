"use strict";
class Manufacturer {
    constructor(name, cnpj) {
        this.name = name;
        this.cnpj = cnpj;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getCnpj() {
        return this.cnpj;
    }
    setCnpj(cnpj) {
        this.cnpj = cnpj;
    }
}
class Engine {
    constructor(power, chassis, torque) {
        this.power = power;
        this.chassis = chassis;
        this.torque = torque;
    }
    getPower() {
        return this.power;
    }
    setPower(power) {
        this.power = power;
    }
    getChassis() {
        return this.chassis;
    }
    setChassis(chassis) {
        this.chassis = chassis;
    }
    getTorque() {
        return this.torque;
    }
    setTorque(torque) {
        this.torque = torque;
    }
}
class Tire {
    constructor(diameter, measures, manufacturer) {
        this.diameter = diameter;
        this.measures = measures;
        this.manufacturer = manufacturer;
    }
    getDiameter() {
        return this.diameter;
    }
    setDiameter(diameter) {
        this.diameter = diameter;
    }
    getMeasures() {
        return this.measures;
    }
    setMeasures(measures) {
        this.measures = measures;
    }
    getManufacturer() {
        return this.manufacturer;
    }
    setManufacturer(manufacturer) {
        this.manufacturer = manufacturer;
    }
}
class Car {
    constructor(model, plate, manufacturer, engine, tire) {
        this.model = model;
        this.plate = plate;
        this.manufacturer = manufacturer;
        this.engine = engine;
        this.tire = tire;
    }
    getModel() {
        return this.model;
    }
    setModel(model) {
        this.model = model;
    }
    getPlate() {
        return this.plate;
    }
    setPlate(plate) {
        this.plate = plate;
    }
    getManufacturer() {
        return this.manufacturer;
    }
    setManufacturer(manufacturer) {
        this.manufacturer = manufacturer;
    }
    getEngine() {
        return this.engine;
    }
    setEngine(engine) {
        this.engine = engine;
    }
    getTire() {
        return this.tire;
    }
    setTire(tire) {
        this.tire = tire;
    }
}
class Truck {
    constructor(model, plate, doubleCabin, manufacturer, engine, tire, gear, body) {
        this.model = model;
        this.plate = plate;
        this.doubleCabin = doubleCabin;
        this.manufacturer = manufacturer;
        this.engine = engine;
        this.tire = tire;
        this.gear = gear;
        this.body = body;
    }
    getModel() {
        return this.model;
    }
    setModel(model) {
        this.model = model;
    }
    getPlate() {
        return this.plate;
    }
    setPlate(plate) {
        this.plate = plate;
    }
    getDoubleCabin() {
        return this.doubleCabin;
    }
    setDoubleCabin(doubleCabin) {
        this.doubleCabin = doubleCabin;
    }
    getManufacturer() {
        return this.manufacturer;
    }
    setManufacturer(manufacturer) {
        this.manufacturer = manufacturer;
    }
    getEngine() {
        return this.engine;
    }
    setEngine(engine) {
        this.engine = engine;
    }
    getTire() {
        return this.tire;
    }
    setTire(tire) {
        this.tire = tire;
    }
    getGear() {
        return this.gear;
    }
    setGear(gear) {
        this.gear = gear;
    }
    getBody() {
        return this.body;
    }
    setBody(body) {
        this.body = body;
    }
}
class GearType {
    constructor(transmission, manufacturer) {
        this.transmission = transmission;
        this.manufacturer = manufacturer;
    }
    getTransmission() {
        return this.transmission;
    }
    setTransmission(transmission) {
        this.transmission = transmission;
    }
    getManufacturer() {
        return this.manufacturer;
    }
    setManufacturer(manufacturer) {
        this.manufacturer = manufacturer;
    }
}
class Gear {
    constructor(gearQuantity, gearType) {
        this.gearQuantity = gearQuantity;
        this.gearType = gearType;
    }
    getGearQuantity() {
        return this.gearQuantity;
    }
    setGearQuantity(gearQuantity) {
        this.gearQuantity = gearQuantity;
    }
    getGearType() {
        return this.gearType;
    }
    setGearType(gearType) {
        this.gearType = gearType;
    }
}
class Body {
    constructor(bodyType, manufacturer) {
        this.bodyType = bodyType;
        this.manufacturer = manufacturer;
    }
    getBodyType() {
        return this.bodyType;
    }
    setBodyType(bodyType) {
        this.bodyType = bodyType;
    }
    getManufacturer() {
        return this.manufacturer;
    }
    setManufacturer(manufacturer) {
        this.manufacturer = manufacturer;
    }
}
class Fleet {
    constructor(name, type, responsible) {
        this.name = name;
        this.type = type;
        this.responsible = responsible;
        this.cars = [];
        this.trucks = [];
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
    }
    getResponsible() {
        return this.responsible;
    }
    setResponsible(responsible) {
        this.responsible = responsible;
    }
    getCar() {
        return this.cars;
    }
    setCar(cars) {
        this.cars = cars;
    }
    getTruck() {
        return this.trucks;
    }
    setTruck(trucks) {
        this.trucks = trucks;
    }
    addCar(car) {
        this.cars.push(car);
    }
    addTruck(truck) {
        this.trucks.push(truck);
    }
}
class Main {
    static main() {
        // Creating objects of the `Manufacturer` class
        const carManufacturer = new Manufacturer("CarManufacturer", "CarCNPJ");
        const truckManufacturer = new Manufacturer("TruckManufacturer", "TruckCNPJ");
        // Creating objects of the `Engine` class
        const carEngine = new Engine(200, "CarChassis", 150);
        const truckEngine = new Engine(500, "TruckChassis", 300);
        // Creating objects of the `Tire` class
        const carTire1 = new Tire(18, 225, carManufacturer);
        const carTire2 = new Tire(19, 225, carManufacturer);
        const truckTire1 = new Tire(22, 300, truckManufacturer);
        const truckTire2 = new Tire(24, 300, truckManufacturer);
        // Creating objects of the `Gear` and `GearType` classes
        const truckGearType = new GearType("TruckGear", truckManufacturer);
        const truckGear = new Gear(10, truckGearType);
        // Creating objects of the `Body` class
        const truckBody = new Body("Truck", truckManufacturer);
        // Creating objects of the `Car` and `Truck` classes
        const car = new Car("CarModel", "CarPlate", carManufacturer, carEngine, carTire1);
        const truck = new Truck("TruckModel", "TruckPlate", true, truckManufacturer, truckEngine, truckTire1, truckGear, truckBody);
        // Creating objects of the `Fleet` class and adding a car and a truck to the vehicle fleet
        const fleet = new Fleet("Fleet1", "FleetType", "FleetManager");
        fleet.addCar(car);
        fleet.addTruck(truck);
        // Example of accessing fleet data
        console.log(`Fleet: ${fleet.getName()}`);
        console.log(`Manager: ${fleet.getResponsible()}`);
        // Example of accessing data for a car in the fleet
        const firstCarInFleet = fleet.getCar()[0];
        console.log(`Model of the first car in the fleet: ${firstCarInFleet.getModel()}`);
        // Example of accessing data for a truck in the fleet
        const firstTruckInFleet = fleet.getTruck()[0];
        console.log(`Plate of the first truck in the fleet: ${firstTruckInFleet.getPlate()}`);
    }
}
Main.main();
