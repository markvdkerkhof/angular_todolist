import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item-service.service';
import { SearchItemsComponent } from "../search-items/search-items.component";
import { CONSTANTS } from '../../../../common/constants';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit, OnDestroy {

  protected items: Item[] = [];

  private _itemServiceInitializedSubscription: Subscription | null = null;

  constructor(private _itemService: ItemService, private _router: Router) { }

  ngOnInit() {
    this._itemServiceInitializedSubscription = this._itemService.isInitialized.subscribe(isInitialized => {
      if (isInitialized) {
        this.items = this._itemService.getItems();
      }
    });
  }

  ngOnDestroy() {
    if (this._itemServiceInitializedSubscription) {
      this._itemServiceInitializedSubscription;
    }
  }

  add() {
    this._router.navigate([CONSTANTS.ROUTER_ADD_ITEM]);
  }

  protected itemClicked(item: Item) {
    this._itemService.selectedItem = item;
    this._router.navigate([CONSTANTS.ROUTER_ITEM, item.id]);
  }

  protected highlightFoundItems(searchValue: string) {
    this.items.forEach(item => {
      item.found = item.title.includes(searchValue);
    });
  }
}
