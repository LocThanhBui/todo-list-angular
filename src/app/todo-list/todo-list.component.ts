import {Component, OnInit} from '@angular/core';
import {TodoService} from "../services/todo.service";
import {TodoModel} from "../model/todo.model";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  // @Input() todoList!: TodoModel[];
  // @Output() deleteTodoItem = new EventEmitter<number>();


  todoList!: TodoModel[];

  constructor(
    private todoService: TodoService,
  ) {
  }

  ngOnInit(): void {
    this.todoService.shareTodoValue$.subscribe(value => (this.todoList = value))
  }

  removeTodoItem(id: number): void {
    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i].id === id) {
        this.todoList.splice(i, 1)
      }
    }
  }

  // delete(id: number): void {
  //   this.deleteTodoItem.emit(id);
  // }

}
