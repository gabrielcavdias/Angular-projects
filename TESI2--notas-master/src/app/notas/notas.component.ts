import { Component, OnInit } from '@angular/core';
import { DisciplinasService } from '../disciplinas.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  constructor(public disciplinas: DisciplinasService) {}
  inputModel = 12;
  ngOnInit() {}
  ntP1(index: number, nt: String) {
    this.disciplinas.changeNtp1(index, nt);
    console.log('Mudei a nota para ', nt);
  }
}
