class Vehicle {
  private chassis: string;
  private type: string;
  private maxSpeed: number;
  private static count: number = 0;

  constructor(chassis: string, type: string, maxSpeed: number) {
    this.chassis = chassis;
    this.type = type;
    this.maxSpeed = maxSpeed;
    Vehicle.count++;
  }

  getChassis(): string {
    return this.chassis;
  }

  setChassis(chassis: string): void {
    this.chassis = chassis;
  }

  getType(): string {
    return this.type;
  }

  setType(type: string): void {
    this.type = type;
  }

  getMaxSpeed(): number {
    return this.maxSpeed;
  }

  setMaxSpeed(maxSpeed: number) {
    this.maxSpeed = maxSpeed;
  }

  static getCount(): number {
    return Vehicle.count;
  }

  clean(): void {
    console.log(
      `The ${this.type} vehicle with CHASSIS ${this.chassis} is being cleaned.`
    );
  }

  adjust(): void {
    console.log(
      `The ${this.type} vehicle with CHASSIS ${this.chassis} is being adjusted.`
    );
  }

  increaseSpeed(value: number): void {
    this.maxSpeed += value;
    console.log(
      `The ${this.type} vehicle with CHASSIS ${this.chassis} now has a maximum speed of ${this.maxSpeed} km/h.`
    );
  }
}

class Bicycle extends Vehicle {
  private gearNumber: number;

  constructor(
    chassis: string,
    type: string,
    maxSpeed: number,
    gearNumber: number
  ) {
    super(chassis, type, maxSpeed);
    this.gearNumber = gearNumber;
  }

  getGearNumber(): number {
    return this.gearNumber;
  }

  setGearNumber(gearNumber: number): void {
    this.gearNumber = gearNumber;
  }

  increaseGear(value: number): void {
    this.gearNumber += value;
    const newSpeed = (this.gearNumber / super.getMaxSpeed()) * 100;
    super.increaseSpeed(newSpeed);
  }
}

class Car extends Vehicle {
  private fuel: number;

  constructor(chassis: string, type: string, maxSpeed: number, fuel: number) {
    super(chassis, type, maxSpeed);
    this.fuel = fuel;
  }

  getFuel(): number {
    return this.fuel;
  }

  setFuel(fuel: number): void {
    this.fuel = fuel;
  }

  oilChange(): void {
    console.log(
      `The ${super.getType()} vehicle with CHASSIS ${super.getChassis()} has changed the oil.`
    );
  }
}

class VehicleTest {
  static main(): void {
    const bicycle1 = new Bicycle("AS74498GT2", "Mountain Bike", 70, 6);
    const bicycle2 = new Bicycle("BH84093HJ", "Road Bike", 80, 7);
    const bicycle3 = new Bicycle("IU8374GF3", "Bike", 60, 4);

    const car1 = new Car("LK384HU45", "SUV", 180, 50);
    const car2 = new Car("TU85JK59M", "Sport", 200, 40);

    bicycle1.adjust();
    bicycle1.clean();
    bicycle1.increaseGear(15);

    bicycle2.adjust();
    bicycle2.clean();
    bicycle2.increaseGear(13);

    bicycle3.adjust();
    bicycle3.clean();
    bicycle3.increaseGear(1);

    car1.adjust();
    car1.clean();
    car1.increaseSpeed(45);
    car1.oilChange();

    car2.adjust();
    car2.clean();
    car2.increaseSpeed(80);
    car2.oilChange();

    console.log(`Total number of vehicles created: ${Vehicle.getCount()}`);
  }
}

VehicleTest.main();
