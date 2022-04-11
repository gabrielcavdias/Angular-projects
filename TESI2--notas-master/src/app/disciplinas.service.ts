import { Injectable } from '@angular/core';

interface Disciplina {
  nome: String;
  dSemana: String;
  horario: String;
  p1: String;
  p2: String;
  ntp1: String;
  ntp2: String;
}
@Injectable()
export class DisciplinasService {
  private storage: Storage;
  private lista: Array<Disciplina>;
  constructor() {
    this.storage = window.localStorage;
    if (this.storage.getItem('disciplinas')) {
      this.lista = JSON.parse(this.storage.getItem('disciplinas'));
    } else {
      this.lista = [];
    }
  }
  getLista() {
    return this.lista;
  }
  add(disciplina: Disciplina) {
    this.lista.push(disciplina);
    //Atualizar Local Storage
    this.storage.setItem('disciplinas', JSON.stringify(this.lista));
  }
  remove(index: number) {
    this.lista.splice(index, 1);
    //Atualizar Local Storage
    this.storage.setItem('disciplinas', JSON.stringify(this.lista));
  }
  changeNtp1(index: number, nvNota: String) {
    this.lista[index].ntp1 = nvNota;
    this.storage.setItem('disciplinas', JSON.stringify(this.lista));
  }
  changeNtp2(index: number, nvNota: String) {
    this.lista[index].ntp2 = nvNota;
    this.storage.setItem('disciplinas', JSON.stringify(this.lista));
  }
}
