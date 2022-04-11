import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  getRandomNumber() {
    return Math.floor(Math.random() * (61 - 1)) + 1;
  }

  getSixNumbers() {
    let listaNumeros: number[] = [];
    for (let i = 1; i < 7; i++) {
      let rn = this.getRandomNumber();
      if (!listaNumeros.includes(rn)) {
        listaNumeros.push(rn);
      } else {
        i -= 1;
      }
    }
    return listaNumeros;
  }
}
