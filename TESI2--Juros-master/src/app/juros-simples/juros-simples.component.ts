import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-simples',
  templateUrl: './juros-simples.component.html',
  styleUrls: ['./juros-simples.component.css']
})
export class JurosSimplesComponent implements OnInit {
  valor: number = 500;
  taxa: number = 3;
  meses: number = 8;
  constructor() {}

  ngOnInit() {}

  simularJuros() {
    let lista: number[] = [];
    let valorTX = (this.valor / 100) * this.taxa;
    let montante = this.valor;
    for (let i = 0; i < this.meses; i++) {
      lista.push(Number(montante) + Number(valorTX));
      montante = Number(montante) + Number(valorTX);
    }
    return lista;
  }
}
