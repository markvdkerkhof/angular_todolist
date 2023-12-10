import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchItemsComponent } from "../search-items/search-items.component";
import { Item } from '../../models/item';
import { ItemService } from '../../services/item-service.service';
import { DatePipe } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-todo-list',
    standalone: true,
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.scss',
    imports: [SearchItemsComponent, DatePipe, NgFor],
    providers: [ItemService]
})
export class TodoListComponent implements OnInit, OnDestroy {
    protected items: Item[] = [];

    constructor(private _itemService: ItemService) { 
    }

    ngOnInit() {  
         this._itemService.isInitialized.subscribe(isInitialized => {
             if (isInitialized) {
                 this.items = this._itemService.getItems();
             }
         });
      }

      ngOnDestroy() {
        this._itemService.isInitialized.unsubscribe();
      }
}
