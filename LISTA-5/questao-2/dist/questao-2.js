"use strict";
class Equipamento {
    constructor() {
        this.ligado = false;
    }
    getLigado() {
        return this.ligado;
    }
    liga() {
        this.ligado = true;
    }
    desliga() {
        this.ligado = false;
    }
}
class EquipamentoSonoro extends Equipamento {
    constructor() {
        super();
        this.volume = 0;
        this._stereo = false;
    }
    getVolume() {
        return this.volume;
    }
    setVolume(novoVolume) {
        this.volume = Math.max(0, Math.min(10, novoVolume));
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
