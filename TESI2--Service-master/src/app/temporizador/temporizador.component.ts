import { Component, OnInit } from '@angular/core';
import { TemporizadorService } from '../temporizador.service';
@Component({
  selector: 'app-temporizador',
  templateUrl: './temporizador.component.html',
  styleUrls: ['./temporizador.component.css']
})
export class TemporizadorComponent implements OnInit {
  constructor(public temporizador: TemporizadorService) {}
  intervalo: number;

  handleChange() {
    this.temporizador.stop();
    this.temporizador.start(this.intervalo * 1000);
  }
  ngOnInit() {}
}
