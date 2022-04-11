import { Component, OnInit } from '@angular/core';
import { DisciplinasService } from '../disciplinas.service';

@Component({
  selector: 'disciplinasApp',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {
  constructor(public disciplinas: DisciplinasService) {}
  nvDisciplina: String = '';

  handleAdd(nvDisciplina) {
    if (nvDisciplina != '') {
      this.disciplinas.addDisciplina(nvDisciplina);
    }
  }
  ngOnInit() {}
}
