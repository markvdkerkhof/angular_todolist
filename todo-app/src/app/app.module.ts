// NG MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoListComponent } from './features/todo/components/todo-list/todo-list.component';
import { TodoItemComponent } from './features/todo/components/todo-item/todo-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { ItemService } from './features/todo/services/item-service.service';
import { SearchItemsComponent } from './features/todo/components/search-items/search-items.component';

const ROUTES: Routes = [
    { path: 'list', component: TodoListComponent },
    { path: 'item/:id', component: TodoItemComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    SearchItemsComponent,
  ],
  imports: [
    
    BrowserModule,
    RouterOutlet,        
    CommonModule,
    FormsModule,
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