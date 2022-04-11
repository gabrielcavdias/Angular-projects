import { Component, OnInit } from '@angular/core';
import { HelioTasksService } from '../helio-tasks.service';

@Component({
  selector: 'app-helio-tasks',
  templateUrl: './helio-tasks.component.html',
  styleUrls: ['./helio-tasks.component.css'],
})
export class HelioTasksComponent implements OnInit {
  constructor(public tasksService: HelioTasksService) {}

  ngOnInit() {}
  currentInput = '';
  addToList() {
    let newItem = {
      id: this.tasksService.todoList.length + 1,
      content: this.currentInput,
    };
    this.tasksService.addToList(newItem);
    this.currentInput = '';
  }
  remove(id: number) {
    this.tasksService.remove(id);
  }
}
