import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public  shareTodoValue$ = new BehaviorSubject<string>("");
  constructor() { }

  updateTodoValue(value: string){
    this.shareTodoValue$.next(value);
  }

}
