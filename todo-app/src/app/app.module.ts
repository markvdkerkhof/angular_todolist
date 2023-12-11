// NG MODULES
import { NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRouteSnapshot, CanActivateFn, Route, Router, RouterModule, RouterOutlet, RouterStateSnapshot, Routes, UrlSegment } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoListComponent } from './features/todo/components/todo-list/todo-list.component';
import { TodoDetailsComponent } from './features/todo/components/todo-details/todo-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { ItemService } from './features/todo/services/item-service.service';
import { SearchItemsComponent } from './features/todo/components/search-items/search-items.component';
import { AddTodoComponent } from './features/todo/components/add-todo/add-todo.component';
import { CONSTANTS } from './common/constants';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './shared/features/login/login.component';
import { Observable } from 'rxjs';
import { AuthorizationService } from './shared/services/authorization.service';

const isAuthorized: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const authorizationService = inject(AuthorizationService);
    if (!authorizationService.isAuthorized()) {
      inject(Router).navigate([CONSTANTS.ROUTER_LOGIN]);
      return false;
    }
    return true;
  };

const ROUTES: Routes = [
  { path: CONSTANTS.ROUTER_LOGIN, component: LoginComponent },
  { path: CONSTANTS.ROUTER_LIST, component: TodoListComponent, canActivate: [isAuthorized] },
  { path: CONSTANTS.ROUTER_ITEM + '/:' + CONSTANTS.ROUTER_PARAM_ITEM_ID, component: TodoDetailsComponent, canActivate: [isAuthorized] },
  { path: CONSTANTS.ROUTER_ADD_ITEM, component: AddTodoComponent, canActivate: [isAuthorized] },
  { path: '**', component: LoginComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDetailsComponent,
    AddTodoComponent,
    SearchItemsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    SharedModule
  ],
  providers: [
    DatePipe,
    ItemService
  ],
  exports: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
