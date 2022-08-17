import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {TodoFormComponent} from "./todo-form/todo-form.component";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {
    path: '', component: AppComponent,
    children: [
      {
        path: 'home', component: HomeComponent,
      },
      {
        path: 'add', component: TodoFormComponent,
      },
      {
        path: 'list', component: TodoListComponent
      }]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
