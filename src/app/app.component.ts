import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  addTodo(todoItem: string): void {
    this.todoList.push({
      id: this.todoList.length + 1,
      title: todoItem
    })
    console.log('list',this.todoList);
  }

  todoList = [
    {id: 1, title: 'Learn Angular'}
  ];

  removeTodoItem(id: number): void {
    for (let i = 0; i < this.todoList.length; i++) {
      if(this.todoList[i].id === id) {
        this.todoList.splice(i, 1)
      }
    }
  }

}
