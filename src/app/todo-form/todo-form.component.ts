import {Component, OnInit} from '@angular/core';
import {TodoService} from "../services/todo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  // @Output() add = new EventEmitter<string>();
  todoItem = '';

  constructor(
    private todoService: TodoService,
    private router: Router
  ) {
  }

  ngOnInit(): void {

  }

  addTodo(todoItem: string): void {
    const currentTodoList = this.todoService.shareTodoValue$.getValue();
    currentTodoList.push({
      id: currentTodoList.length + 1,
      title: todoItem,
    })
    this.todoService.updateTodoValue(currentTodoList);
    this.router.navigate(['/list'])
  }


  // addTodoFrm(): void {
  //   this.add.emit(this.todoItem)
  //   console.log('todo item', this.todoItem)
  // }

}
