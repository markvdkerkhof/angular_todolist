import { Subscription } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';
import { CONSTANTS } from '../../../../common/constants';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit, OnDestroy {

  protected items: Item[] = [];

  private _itemServiceInitializedSubscription: Subscription | null = null;
  private searchValue: string = '';

  constructor(
    private _itemService: ItemService,
    private _router: Router) { }

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

  protected searchUpdated(searchValue: string) {
    this.searchValue = searchValue;
  }

  protected highlightItem(item: Item): boolean {
    return item.title.includes(this.searchValue);
  }
}
