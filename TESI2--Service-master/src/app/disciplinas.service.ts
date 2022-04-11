import { Injectable } from '@angular/core';

@Injectable()
export class DisciplinasService {
  private disciplinas: string[] = [
    'Desenvolvimento para Servidores II',
    'Desenvolvimento para dispositivos móveis I',
    'Negócios e Marketing Eletrônicos',
    'Projeto de prototipagem e testes de Usabilidade',
    'Projeto do trabalho de graduação em Sistemas',
    'Tópicos Especiais em Sistemas para Internet II'
  ];

  addDisciplina(disciplina: string) {
    this.disciplinas.push(disciplina);
  }
  rmDisciplina(index: number) {
    this.disciplinas.splice(index, 1);
  }
  getDisciplinas() {
    return this.disciplinas;
  }
}
