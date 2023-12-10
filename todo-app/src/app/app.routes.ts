import { Routes } from '@angular/router';
import { TodoListComponent } from './features/todo/components/todo-list/todo-list.component';
import { TodoItemComponent } from './features/todo/components/todo-item/todo-item.component';

export const routes: Routes = [
    { path: 'list', component: TodoListComponent },
    { path: 'item/:id', component: TodoItemComponent }
];
