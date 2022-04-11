import { Injectable } from '@angular/core';

@Injectable()
export class TemporizadorService {
  private temporizador;
  private contador = 0;
  constructor() {}
  start(ms: number) {
    if (!this.temporizador) {
      this.temporizador = setInterval(() => {
        this.contador++;
      }, ms);
    }
  }
  stop() {
    if (this.temporizador) {
      clearInterval(this.temporizador);
      this.temporizador = null;
      this.contador = 0;
    }
  }
  getContador() {
    return this.contador;
  }
}
