class Manufacturer {
  private name: string;
  private cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getCnpj(): string {
    return this.cnpj;
  }

  setCnpj(cnpj: string): void {
    this.cnpj = cnpj;
  }
}

class Engine {
  private power: number;
  private chassis: string;
  private torque: number;

  constructor(power: number, chassis: string, torque: number) {
    this.power = power;
    this.chassis = chassis;
    this.torque = torque;
  }

  getPower(): number {
    return this.power;
  }

  setPower(power: number): void {
    this.power = power;
  }

  getChassis(): string {
    return this.chassis;
  }

  setChassis(chassis: string): void {
    this.chassis = chassis;
  }

  getTorque(): number {
    return this.torque;
  }

  setTorque(torque: number): void {
    this.torque = torque;
  }
}

class Tire {
  private diameter: number;
  private measures: number;
  private manufacturer: Manufacturer;

  constructor(diameter: number, measures: number, manufacturer: Manufacturer) {
    this.diameter = diameter;
    this.measures = measures;
    this.manufacturer = manufacturer;
  }

  getDiameter(): number {
    return this.diameter;
  }

  setDiameter(diameter: number): void {
    this.diameter = diameter;
  }

  getMeasures(): number {
    return this.measures;
  }

  setMeasures(measures: number): void {
    this.measures = measures;
  }

  getManufacturer(): Manufacturer {
    return this.manufacturer;
  }

  setManufacturer(manufacturer: Manufacturer): void {
    this.manufacturer = manufacturer;
  }
}

class Car {
  private model: string;
  private plate: string;
  private manufacturer: Manufacturer;
  private engine: Engine;
  private tire: Tire;

  constructor(
    model: string,
    plate: string,
    manufacturer: Manufacturer,
    engine: Engine,
    tire: Tire
  ) {
    this.model = model;
    this.plate = plate;
    this.manufacturer = manufacturer;
    this.engine = engine;
    this.tire = tire;
  }

  getModel(): string {
    return this.model;
  }

  setModel(model: string): void {
    this.model = model;
  }

  getPlate(): string {
    return this.plate;
  }

  setPlate(plate: string): void {
    this.plate = plate;
  }

  getManufacturer(): Manufacturer {
    return this.manufacturer;
  }

  setManufacturer(manufacturer: Manufacturer): void {
    this.manufacturer = manufacturer;
  }

  getEngine(): Engine {
    return this.engine;
  }

  setEngine(engine: Engine): void {
    this.engine = engine;
  }

  getTire(): Tire {
    return this.tire;
  }

  setTire(tire: Tire): void {
    this.tire = tire;
  }
}

class Truck {
  private model: string;
  private plate: string;
  private doubleCabin: boolean;
  private manufacturer: Manufacturer;
  private engine: Engine;
  private tire: Tire;
  private gear: Gear;
  private body: Body;

  constructor(
    model: string,
    plate: string,
    doubleCabin: boolean,
    manufacturer: Manufacturer,
    engine: Engine,
    tire: Tire,
    gear: Gear,
    body: Body
  ) {
    this.model = model;
    this.plate = plate;
    this.doubleCabin = doubleCabin;
    this.manufacturer = manufacturer;
    this.engine = engine;
    this.tire = tire;
    this.gear = gear;
    this.body = body;
  }

  getModel(): string {
    return this.model;
  }

  setModel(model: string): void {
    this.model = model;
  }

  getPlate(): string {
    return this.plate;
  }

  setPlate(plate: string): void {
    this.plate = plate;
  }

  getDoubleCabin(): boolean {
    return this.doubleCabin;
  }

  setDoubleCabin(doubleCabin: boolean): void {
    this.doubleCabin = doubleCabin;
  }

  getManufacturer(): Manufacturer {
    return this.manufacturer;
  }

  setManufacturer(manufacturer: Manufacturer): void {
    this.manufacturer = manufacturer;
  }

  getEngine(): Engine {
    return this.engine;
  }

  setEngine(engine: Engine): void {
    this.engine = engine;
  }

  getTire(): Tire {
    return this.tire;
  }

  setTire(tire: Tire): void {
    this.tire = tire;
  }

  getGear(): Gear {
    return this.gear;
  }

  setGear(gear: Gear): void {
    this.gear = gear;
  }

  getBody(): Body {
    return this.body;
  }

  setBody(body: Body): void {
    this.body = body;
  }
}

class GearType {
  private transmission: string;
  private manufacturer: Manufacturer;

  constructor(transmission: string, manufacturer: Manufacturer) {
    this.transmission = transmission;
    this.manufacturer = manufacturer;
  }

  getTransmission(): string {
    return this.transmission;
  }

  setTransmission(transmission: string) {
    this.transmission = transmission;
  }

  getManufacturer(): Manufacturer {
    return this.manufacturer;
  }

  setManufacturer(manufacturer: Manufacturer): void {
    this.manufacturer = manufacturer;
  }
}

class Gear {
  private gearQuantity: number;
  private gearType: GearType;

  constructor(gearQuantity: number, gearType: GearType) {
    this.gearQuantity = gearQuantity;
    this.gearType = gearType;
  }

  getGearQuantity(): number {
    return this.gearQuantity;
  }

  setGearQuantity(gearQuantity: number): void {
    this.gearQuantity = gearQuantity;
  }

  getGearType(): GearType {
    return this.gearType;
  }

  setGearType(gearType: GearType): void {
    this.gearType = gearType;
  }
}

class Body {
  private bodyType: string;
  private manufacturer: Manufacturer;

  constructor(bodyType: string, manufacturer: Manufacturer) {
    this.bodyType = bodyType;
    this.manufacturer = manufacturer;
  }

  getBodyType(): string {
    return this.bodyType;
  }

  setBodyType(bodyType: string): void {
    this.bodyType = bodyType;
  }

  getManufacturer(): Manufacturer {
    return this.manufacturer;
  }

  setManufacturer(manufacturer: Manufacturer): void {
    this.manufacturer = manufacturer;
  }
}

class Fleet {
  private name: string;
  private type: string;
  private responsible: string;
  private cars: Car[];
  private trucks: Truck[];

  constructor(name: string, type: string, responsible: string) {
    this.name = name;
    this.type = type;
    this.responsible = responsible;
    this.cars = [];
    this.trucks = [];
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getType(): string {
    return this.type;
  }

  setType(type: string): void {
    this.type = type;
  }

  getResponsible(): string {
    return this.responsible;
  }

  setResponsible(responsible: string): void {
    this.responsible = responsible;
  }

  getCar(): Car[] {
    return this.cars;
  }

  setCar(cars: Car[]): void {
    this.cars = cars;
  }

  getTruck(): Truck[] {
    return this.trucks;
  }

  setTruck(trucks: Truck[]): void {
    this.trucks = trucks;
  }

  addCar(car: Car): void {
    this.cars.push(car);
  }

  addTruck(truck: Truck): void {
    this.trucks.push(truck);
  }
}

class Main {
  static main(): void {
    // Creating objects of the `Manufacturer` class
    const carManufacturer = new Manufacturer("CarManufacturer", "CarCNPJ");
    const truckManufacturer = new Manufacturer(
      "TruckManufacturer",
      "TruckCNPJ"
    );

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
    const car = new Car(
      "CarModel",
      "CarPlate",
      carManufacturer,
      carEngine,
      carTire1
    );
    const truck = new Truck(
      "TruckModel",
      "TruckPlate",
      true,
      truckManufacturer,
      truckEngine,
      truckTire1,
      truckGear,
      truckBody
    );

    // Creating objects of the `Fleet` class and adding a car and a truck to the vehicle fleet
    const fleet = new Fleet("Fleet1", "FleetType", "FleetManager");
    fleet.addCar(car);
    fleet.addTruck(truck);

    // Example of accessing fleet data
    console.log(`Fleet: ${fleet.getName()}`);
    console.log(`Manager: ${fleet.getResponsible()}`);

    // Example of accessing data for a car in the fleet
    const firstCarInFleet = fleet.getCar()[0];
    console.log(
      `Model of the first car in the fleet: ${firstCarInFleet.getModel()}`
    );

    // Example of accessing data for a truck in the fleet
    const firstTruckInFleet = fleet.getTruck()[0];
    console.log(
      `Plate of the first truck in the fleet: ${firstTruckInFleet.getPlate()}`
    );
  }
}

Main.main();
