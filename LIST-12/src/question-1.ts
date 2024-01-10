interface Motorized {
  startEngine(): void;
  refuel(liters: number): void;
}

interface Drivable {
  turn(angle: number): void;
}

abstract class Transport {
  protected name: string;
  protected passengerNumber: number;
  protected currentSpeed: number;

  constructor(name: string, passengerNumber: number, currentSpeed: number) {
    this.name = name;
    this.passengerNumber = passengerNumber;
    this.currentSpeed = currentSpeed;
  }

  abstract isStopped(): boolean;
}

abstract class AirTransport extends Transport {
  protected currentAltitude: number;

  constructor(
    name: string,
    passengerNumber: number,
    currentSpeed: number,
    currentAltitude: number
  ) {
    super(name, passengerNumber, currentSpeed);
    this.currentAltitude = currentAltitude;
  }

  abstract ascend(meters: number): void;
  abstract descend(meters: number): void;
}

class Airplane extends AirTransport implements Motorized, Drivable {
  private engineNumber: number;
  private engineOn: boolean;

  constructor(
    name: string,
    passengerNumber: number,
    currentSpeed: number,
    currentAltitude: number,
    engineNumber: number
  ) {
    super(name, passengerNumber, currentSpeed, currentAltitude);
    this.engineNumber = engineNumber;
    this.engineOn = false;
  }

  isStopped(): boolean {
    return this.currentSpeed === 0 && this.currentAltitude === 0;
  }

  ascend(meters: number): void {
    if (this.engineOn) {
      this.currentAltitude += meters;
      console.log(
        `Ascending ${meters} meters. Current altitude: ${this.currentAltitude} meters.`
      );
    } else {
      console.log("Cannot ascend. The engine is off.");
    }
  }

  descend(meters: number): void {
    if (this.engineOn) {
      if (this.currentAltitude >= meters) {
        this.currentAltitude -= meters;
        console.log(
          `Descending ${meters} meters. Current altitude: ${this.currentAltitude} meters.`
        );
      } else {
        console.log("Cannot descend. Minimum altitude reached.");
      }
    } else {
      console.log("Cannot descend. The engine is off.");
    }
  }

  turn(angle: number): void {
    console.log(`Turning with an angle of ${angle} degrees.`);
  }

  refuel(liters: number): void {
    console.log(`Refueling with ${liters} liters of fuel.`);
  }

  startEngine(): void {
    this.engineOn = true;
    console.log("Engine started.");
  }

  stopEngine(): void {
    this.engineOn = false;
    console.log("Engine stopped.");
  }
}

class HotAirBalloon extends AirTransport {
  private droppedWeight: number;
  private heated: boolean;

  constructor(
    name: string,
    passengerNumber: number,
    currentSpeed: number,
    currentAltitude: number,
    droppedWeight: number
  ) {
    super(name, passengerNumber, currentSpeed, currentAltitude);
    this.droppedWeight = droppedWeight;
    this.heated = false;
  }

  isStopped(): boolean {
    return this.currentSpeed === 0 && this.currentAltitude === 0;
  }

  ascend(meters: number): void {
    this.currentAltitude += meters;
    console.log(
      `Ascending ${meters} meters. Current altitude: ${this.currentAltitude} meters.`
    );
  }

  descend(meters: number): void {
    if (this.currentAltitude >= meters) {
      this.currentAltitude -= meters;
      console.log(
        `Descending ${meters} meters. Current altitude: ${this.currentAltitude} meters.`
      );
    } else {
      console.log("Cannot descend. Minimum altitude reached.");
    }
  }

  dropWeight(weight: number): void {
    if (this.currentAltitude > 0) {
      console.log(`Dropping ${weight} kg of weight.`);
      this.droppedWeight += weight;
    } else {
      console.log("Cannot drop weight. Balloon on the ground.");
    }
  }

  heatAir(temp: number): void {
    if (this.currentSpeed === 0) {
      console.log(`Heating the air to ${temp} degrees Celsius.`);
      this.heated = true;
    } else {
      console.log("Cannot heat the air while in motion.");
    }
  }

  getDroppedWeight(): number {
    return this.droppedWeight;
  }
}

abstract class LandTransport extends Transport {
  protected type: string;

  constructor(
    name: string,
    passengerNumber: number,
    currentSpeed: number,
    type: string
  ) {
    super(name, passengerNumber, currentSpeed);
    this.type = type;
  }

  abstract park(): void;
}

class Car extends LandTransport implements Motorized, Drivable {
  private cylinderNumber: number;
  private engineOn: boolean;
  private maxSpeed: number = 200;

  constructor(
    name: string,
    passengerNumber: number,
    currentSpeed: number,
    type: string,
    cylinderNumber: number
  ) {
    super(name, passengerNumber, currentSpeed, type);
    this.cylinderNumber = cylinderNumber;
    this.engineOn = false;
  }

  isStopped(): boolean {
    return this.currentSpeed === 0;
  }

  park(): void {
    if (this.isStopped()) {
      console.log(`${this.name} is parked.`);
    } else {
      console.log("You need to stop the car before parking.");
    }
  }

  turn(angle: number): void {
    if (this.engineOn) {
      console.log(`${this.name} is turning with an angle of ${angle} degrees.`);
    } else {
      console.log("You need to start the engine before turning.");
    }
  }

  refuel(liters: number): void {
    console.log(`Refueling ${this.name} with ${liters} liters of fuel.`);
  }

  startEngine(): void {
    if (!this.engineOn) {
      console.log(`${this.name} started the engine.`);
      this.engineOn = true;
    } else {
      console.log(`${this.name} already has the engine on.`);
    }
  }

  engageClutch(): void {
    console.log("Pressing the clutch.");
  }

  accelerate(desiredSpeed: number): void {
    if (this.engineOn) {
      if (desiredSpeed <= this.maxSpeed) {
        console.log(`${this.name} is accelerating to ${desiredSpeed} km/h.`);
        this.currentSpeed = desiredSpeed;
      } else {
        console.log(
          `${this.name} exceeded the maximum speed of ${this.maxSpeed} km/h.`
        );
      }
    } else {
      console.log("You need to start the engine before accelerating.");
    }
  }
}

class Bicycle extends LandTransport implements Drivable {
  private spokeNumber: number;
  private inMotion: boolean;

  constructor(
    name: string,
    passengerNumber: number,
    currentSpeed: number,
    type: string,
    spokeNumber: number
  ) {
    super(name, passengerNumber, currentSpeed, type);
    this.spokeNumber = spokeNumber;
    this.inMotion = false;
  }

  isStopped(): boolean {
    return !this.inMotion;
  }

  park(): void {
    if (this.isStopped()) {
      console.log(`${this.name} is parked.`);
    } else {
      console.log("You need to stop the bicycle before parking.");
    }
  }

  turn(angle: number): void {
    if (this.inMotion) {
      console.log(`${this.name} is turning with an angle of ${angle} degrees.`);
    } else {
      console.log("You need to pedal before turning.");
    }
  }

  pedal(): void {
    if (!this.inMotion) {
      console.log(`${this.name} started pedaling.`);
      this.inMotion = true;
      this.currentSpeed = 10; // Adjust initial speed as needed
    } else {
      console.log(`${this.name} is already in motion.`);
    }
  }

  stopPedaling(): void {
    if (this.inMotion) {
      console.log(`${this.name} stopped pedaling.`);
      this.inMotion = false;
      this.currentSpeed = 0;
    } else {
      console.log(`${this.name} is already stopped.`);
    }
  }
}

// Testing
class Main {
  static main(): void {
    const airplane = new Airplane("Boeing 747", 200, 900, 10000, 4);
    airplane.startEngine();
    airplane.refuel(5000);
    airplane.ascend(500);
    airplane.turn(15);

    console.log("\n");

    const hotAirBalloon = new HotAirBalloon("Hot Air Balloon", 4, 0, 0, 0);
    console.log(hotAirBalloon.isStopped());

    hotAirBalloon.ascend(2000);
    hotAirBalloon.dropWeight(100);
    hotAirBalloon.heatAir(80);
    hotAirBalloon.descend(500);

    console.log(`Dropped weight: ${hotAirBalloon.getDroppedWeight()} kg`);

    console.log("\n");

    const car = new Car("Beetle", 4, 60, "Sedan", 4);
    car.startEngine();
    car.refuel(50);
    car.turn(30);

    console.log("\n");

    const bicycle = new Bicycle("Caloi", 1, 20, "BMX", 36);
    bicycle.turn(45);
  }
}

Main.main();
