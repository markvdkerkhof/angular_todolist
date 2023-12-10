// NG MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoListComponent } from './features/todo/components/todo-list/todo-list.component';
import { TodoDetailsComponent } from './features/todo/components/todo-details/todo-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { ItemService } from './features/todo/services/item-service.service';
import { SearchItemsComponent } from './features/todo/components/search-items/search-items.component';
import { AddTodoComponent } from './features/todo/components/add-todo/add-todo.component';
import { CONSTANTS } from './common/constants';

const ROUTES: Routes = [
    { path: CONSTANTS.ROUTER_LIST, component: TodoListComponent },
    { path: CONSTANTS.ROUTER_ITEM + '/:' + CONSTANTS.NAVIGATION_ITEM_ID, component: TodoDetailsComponent },
    { path: CONSTANTS.ROUTER_ADD_ITEM, component: AddTodoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDetailsComponent,
    AddTodoComponent,
    SearchItemsComponent,
  ],
  imports: [    
    BrowserModule,
    RouterOutlet,        
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    DatePipe,
    ItemService
  ],
  exports: [],
  bootstrap: [AppComponent]
})

export class AppModule { }