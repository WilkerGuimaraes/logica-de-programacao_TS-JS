class Transport {
  private turnedOn: boolean;
  private speed: number;

  constructor() {
    this.turnedOn = false;
    this.speed = 0;
  }

  getTurnedOn(): boolean {
    return this.turnedOn;
  }

  setTurnedOn(newState: boolean) {
    this.turnedOn = newState;
  }

  getSpeed(): number {
    return this.speed;
  }

  setSpeed(newSpeed: number) {
    this.speed = Math.max(0, Math.min(200, newSpeed));
  }

  turnOn(): void {
    this.turnedOn = true;
    this.speed = 0;
  }

  turnOff(): void {
    this.turnedOn = false;
    this.speed = 0;
  }
}

class Car extends Transport {
  private mileage: number;

  constructor() {
    super();
    this.mileage = 0;
  }

  getMileage(): number {
    return this.mileage;
  }

  setMileage(newMileage: number): void {
    this.mileage = Math.max(0, Math.min(999999, newMileage));
  }
}

const car = new Car();

car.turnOn();
console.log(`Car turned on: ${car.getTurnedOn()}`);
console.log(`Speed: ${car.getSpeed()} km/h`);

car.setSpeed(120);
console.log(`New speed: ${car.getSpeed()} km/h`);

car.setMileage(50000);
console.log(`New mileage: ${car.getMileage()} km`);

car.turnOff();
console.log(`Car turned on: ${car.getTurnedOn()}`);
console.log(`Speed: ${car.getSpeed()} km/h`);
