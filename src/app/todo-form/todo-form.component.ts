import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @Output() add = new EventEmitter<string>();
  todoItem = '';

  constructor() {
  }

  ngOnInit(): void {
  }


  addTodoFrm(): void {
    this.add.emit(this.todoItem)
    console.log('todo item', this.todoItem)
  }

}
