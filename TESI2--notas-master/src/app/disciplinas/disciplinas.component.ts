import { Component, OnInit } from '@angular/core';
import { DisciplinasService } from '../disciplinas.service';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {
  constructor(public disciplinas: DisciplinasService) {}
  dSemanaModel: String;
  horarioModel: String;
  p1Model: String;
  p2Model: String;
  nmModel: String;
  ngOnInit() {}
  adicionarDisciplina() {
    let addedDisciplina = {
      nome: this.nmModel,
      dSemana: this.dSemanaModel,
      horario: this.horarioModel,
      p1: this.p1Model,
      p2: this.p2Model,
      ntp1: '0',
      ntp2: '0'
    };
    this.disciplinas.add(addedDisciplina);
    this.nmModel = '';
    this.dSemanaModel = '';
    this.horarioModel = '';
    this.p1Model = '';
    this.p2Model = '';
  }
}
