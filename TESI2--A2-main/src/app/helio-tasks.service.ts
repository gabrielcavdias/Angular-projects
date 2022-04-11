import { Injectable } from '@angular/core';
interface ListItem {
  id: number;
  content: string;
}
@Injectable()
export class HelioTasksService {
  constructor() {}
  localList: Array<ListItem> = JSON.parse(
    window.localStorage.getItem('todoList')
  );
  todoList: Array<ListItem> = this.localList ? this.localList : [];
  addToList(item: ListItem) {
    this.todoList.push(item);
    window.localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }
  //parameter id

  remove(pid: number) {
    this.todoList = this.todoList.filter((item) => item.id !== pid);
    this.todoList.forEach((item) => {
      if (item.id > pid) {
        item.id = item.id - 1;
      }
    });
    window.localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }
}
