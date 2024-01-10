"use strict";
class Transport {
    constructor(name, passengerNumber, currentSpeed) {
        this.name = name;
        this.passengerNumber = passengerNumber;
        this.currentSpeed = currentSpeed;
    }
}
class AirTransport extends Transport {
    constructor(name, passengerNumber, currentSpeed, currentAltitude) {
        super(name, passengerNumber, currentSpeed);
        this.currentAltitude = currentAltitude;
    }
}
class Airplane extends AirTransport {
    constructor(name, passengerNumber, currentSpeed, currentAltitude, engineNumber) {
        super(name, passengerNumber, currentSpeed, currentAltitude);
        this.engineNumber = engineNumber;
        this.engineOn = false;
    }
    isStopped() {
        return this.currentSpeed === 0 && this.currentAltitude === 0;
    }
    ascend(meters) {
        if (this.engineOn) {
            this.currentAltitude += meters;
            console.log(`Ascending ${meters} meters. Current altitude: ${this.currentAltitude} meters.`);
        }
        else {
            console.log("Cannot ascend. The engine is off.");
        }
    }
    descend(meters) {
        if (this.engineOn) {
            if (this.currentAltitude >= meters) {
                this.currentAltitude -= meters;
                console.log(`Descending ${meters} meters. Current altitude: ${this.currentAltitude} meters.`);
            }
            else {
                console.log("Cannot descend. Minimum altitude reached.");
            }
        }
        else {
            console.log("Cannot descend. The engine is off.");
        }
    }
    turn(angle) {
        console.log(`Turning with an angle of ${angle} degrees.`);
    }
    refuel(liters) {
        console.log(`Refueling with ${liters} liters of fuel.`);
    }
    startEngine() {
        this.engineOn = true;
        console.log("Engine started.");
    }
    stopEngine() {
        this.engineOn = false;
        console.log("Engine stopped.");
    }
}
class HotAirBalloon extends AirTransport {
    constructor(name, passengerNumber, currentSpeed, currentAltitude, droppedWeight) {
        super(name, passengerNumber, currentSpeed, currentAltitude);
        this.droppedWeight = droppedWeight;
        this.heated = false;
    }
    isStopped() {
        return this.currentSpeed === 0 && this.currentAltitude === 0;
    }
    ascend(meters) {
        this.currentAltitude += meters;
        console.log(`Ascending ${meters} meters. Current altitude: ${this.currentAltitude} meters.`);
    }
    descend(meters) {
        if (this.currentAltitude >= meters) {
            this.currentAltitude -= meters;
            console.log(`Descending ${meters} meters. Current altitude: ${this.currentAltitude} meters.`);
        }
        else {
            console.log("Cannot descend. Minimum altitude reached.");
        }
    }
    dropWeight(weight) {
        if (this.currentAltitude > 0) {
            console.log(`Dropping ${weight} kg of weight.`);
            this.droppedWeight += weight;
        }
        else {
            console.log("Cannot drop weight. Balloon on the ground.");
        }
    }
    heatAir(temp) {
        if (this.currentSpeed === 0) {
            console.log(`Heating the air to ${temp} degrees Celsius.`);
            this.heated = true;
        }
        else {
            console.log("Cannot heat the air while in motion.");
        }
    }
    getDroppedWeight() {
        return this.droppedWeight;
    }
}
class LandTransport extends Transport {
    constructor(name, passengerNumber, currentSpeed, type) {
        super(name, passengerNumber, currentSpeed);
        this.type = type;
    }
}
class Car extends LandTransport {
    constructor(name, passengerNumber, currentSpeed, type, cylinderNumber) {
        super(name, passengerNumber, currentSpeed, type);
        this.maxSpeed = 200;
        this.cylinderNumber = cylinderNumber;
        this.engineOn = false;
    }
    isStopped() {
        return this.currentSpeed === 0;
    }
    park() {
        if (this.isStopped()) {
            console.log(`${this.name} is parked.`);
        }
        else {
            console.log("You need to stop the car before parking.");
        }
    }
    turn(angle) {
        if (this.engineOn) {
            console.log(`${this.name} is turning with an angle of ${angle} degrees.`);
        }
        else {
            console.log("You need to start the engine before turning.");
        }
    }
    refuel(liters) {
        console.log(`Refueling ${this.name} with ${liters} liters of fuel.`);
    }
    startEngine() {
        if (!this.engineOn) {
            console.log(`${this.name} started the engine.`);
            this.engineOn = true;
        }
        else {
            console.log(`${this.name} already has the engine on.`);
        }
    }
    engageClutch() {
        console.log("Pressing the clutch.");
    }
    accelerate(desiredSpeed) {
        if (this.engineOn) {
            if (desiredSpeed <= this.maxSpeed) {
                console.log(`${this.name} is accelerating to ${desiredSpeed} km/h.`);
                this.currentSpeed = desiredSpeed;
            }
            else {
                console.log(`${this.name} exceeded the maximum speed of ${this.maxSpeed} km/h.`);
            }
        }
        else {
            console.log("You need to start the engine before accelerating.");
        }
    }
}
class Bicycle extends LandTransport {
    constructor(name, passengerNumber, currentSpeed, type, spokeNumber) {
        super(name, passengerNumber, currentSpeed, type);
        this.spokeNumber = spokeNumber;
        this.inMotion = false;
    }
    isStopped() {
        return !this.inMotion;
    }
    park() {
        if (this.isStopped()) {
            console.log(`${this.name} is parked.`);
        }
        else {
            console.log("You need to stop the bicycle before parking.");
        }
    }
    turn(angle) {
        if (this.inMotion) {
            console.log(`${this.name} is turning with an angle of ${angle} degrees.`);
        }
        else {
            console.log("You need to pedal before turning.");
        }
    }
    pedal() {
        if (!this.inMotion) {
            console.log(`${this.name} started pedaling.`);
            this.inMotion = true;
            this.currentSpeed = 10; // Adjust initial speed as needed
        }
        else {
            console.log(`${this.name} is already in motion.`);
        }
    }
    stopPedaling() {
        if (this.inMotion) {
            console.log(`${this.name} stopped pedaling.`);
            this.inMotion = false;
            this.currentSpeed = 0;
        }
        else {
            console.log(`${this.name} is already stopped.`);
        }
    }
}
// Testing
class Main {
    static main() {
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
