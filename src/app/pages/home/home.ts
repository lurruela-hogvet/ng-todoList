import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { ButtonComponent } from '../../shared/button/button.component';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-home',
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  form = new FormGroup({
    task: new FormControl(''),
  });

  tasks: any[] = [];

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.tasks = this.listService.getList();
  }

  save() {
    if (!this.form.value.task?.trim().length) return;
    this.listService.addTask(this.form.controls.task.value!);
    this.form.reset();
  }

  deleteTask(index: number) {
    this.listService.deleteTask(index);
  }

  editTask(task: any, index: number) {
    this.form.controls.task.setValue(task);
    this.listService.deleteTask(index);
  }

  clearList() {
    this.listService.clearList();
    this.tasks = this.listService.getList();
  }
}
