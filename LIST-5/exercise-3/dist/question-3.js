"use strict";
class Transport {
    constructor() {
        this.turnedOn = false;
        this.speed = 0;
    }
    getTurnedOn() {
        return this.turnedOn;
    }
    setTurnedOn(newState) {
        this.turnedOn = newState;
    }
    getSpeed() {
        return this.speed;
    }
    setSpeed(newSpeed) {
        this.speed = Math.max(0, Math.min(200, newSpeed));
    }
    turnOn() {
        this.turnedOn = true;
        this.speed = 0;
    }
    turnOff() {
        this.turnedOn = false;
        this.speed = 0;
    }
}
class Car extends Transport {
    constructor() {
        super();
        this.mileage = 0;
    }
    getMileage() {
        return this.mileage;
    }
    setMileage(newMileage) {
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
