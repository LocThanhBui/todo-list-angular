import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {TodoModel} from "../model/todo.model";

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  public  shareTodoValue$ = new BehaviorSubject<TodoModel[]>([]);
  constructor(

  ) { }

  updateTodoValue(value: TodoModel[]){
    this.shareTodoValue$.next(value);
  }

}
