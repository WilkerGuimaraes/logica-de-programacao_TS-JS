class Equipment {
  private turnedOn: boolean;

  constructor() {
    this.turnedOn = false;
  }

  getTurnedOn(): boolean {
    return this.turnedOn;
  }

  turnOn(): void {
    this.turnedOn = true;
  }

  turnOff(): void {
    this.turnedOn = false;
  }
}

class SoundEquipment extends Equipment {
  private volume: number;
  private _stereo: boolean;

  constructor() {
    super();
    this.volume = 0;
    this._stereo = false;
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(newVolume: number) {
    this.volume = Math.max(0, Math.min(10, newVolume));
  }

  getStereo(): boolean {
    return this._stereo;
  }

  mono(): void {
    this._stereo = false;
  }

  stereo(): void {
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
