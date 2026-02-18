import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  list: string[] = [];

  constructor() {}

  getList() {
    return this.list;
  }

  addTask(task: string) {
    this.list.push(task);
  }

  deleteTask(index: number) {
    this.list.splice(index, 1);
  }

  clearList() {
    this.list = [];
  }
}
