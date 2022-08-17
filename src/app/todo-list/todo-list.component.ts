import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoModel} from "../model/todo.model";
import {TodoService} from "../services/todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todoList!: TodoModel[];
  @Output() deleteTodoItem = new EventEmitter<number>();


  constructor(
    private todoService: TodoService,
  ) {
  }

  ngOnInit(): void {
    this.todoService.shareTodoValue$.subscribe( )
  }


  delete(id: number): void {
    this.deleteTodoItem.emit(id);
  }

}
