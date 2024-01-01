"use strict";
class Equipment {
    constructor() {
        this.turnedOn = false;
    }
    getTurnedOn() {
        return this.turnedOn;
    }
    turnOn() {
        this.turnedOn = true;
    }
    turnOff() {
        this.turnedOn = false;
    }
}
class SoundEquipment extends Equipment {
    constructor() {
        super();
        this.volume = 0;
        this._stereo = false;
    }
    getVolume() {
        return this.volume;
    }
    setVolume(newVolume) {
        this.volume = Math.max(0, Math.min(10, newVolume));
    }
    getStereo() {
        return this._stereo;
    }
    mono() {
        this._stereo = false;
    }
    stereo() {
        this._stereo = true;
    }
}
const soundEquipment = new SoundEquipment();
soundEquipment.turnOn();
console.log(`Equipment turned on: ${soundEquipment.getTurnedOn()}`);
console.log(`Volume: ${soundEquipment.getVolume()}`);
soundEquipment.setVolume(8);
console.log(`New volume: ${soundEquipment.getVolume()}`);
soundEquipment.stereo();
console.log(`Stereo mode: ${soundEquipment.getStereo()}`);
soundEquipment.turnOff();
console.log(`Equipment turned on: ${soundEquipment.getTurnedOn()}`);
