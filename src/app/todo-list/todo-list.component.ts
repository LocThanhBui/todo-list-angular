import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoModel} from "../model/todo.model";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todoList!: TodoModel[] ;
  @Output() deleteTodoItem = new EventEmitter<number>();

constructor(private  appComponent: AppComponent) { }

  ngOnInit(): void {
  }

}
