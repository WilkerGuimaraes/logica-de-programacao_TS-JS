class Equipamento {
  private ligado: boolean;

  constructor() {
    this.ligado = false;
  }

  getLigado(): boolean {
    return this.ligado;
  }

  liga(): void {
    this.ligado = true;
  }

  desliga(): void {
    this.ligado = false;
  }
}

class EquipamentoSonoro extends Equipamento {
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

  setVolume(novoVolume: number) {
    this.volume = Math.max(0, Math.min(10, novoVolume));
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

const equipamentoSonoro = new EquipamentoSonoro();

equipamentoSonoro.liga();
console.log(`Equipamento ligado: ${equipamentoSonoro.getLigado()}`);
console.log(`Volume: ${equipamentoSonoro.getVolume()}`);

equipamentoSonoro.setVolume(8);
console.log(`Novo volume: ${equipamentoSonoro.getVolume()}`);

equipamentoSonoro.stereo();
console.log(`Modo stereo: ${equipamentoSonoro.getStereo()}`);

equipamentoSonoro.desliga();
console.log(`Equipamento ligado: ${equipamentoSonoro.getLigado()}`);
