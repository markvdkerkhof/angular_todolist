import { Injectable } from '@angular/core';
import { ItemHttpService } from './item-http.service';
import { Item } from '../models/item';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  isInitialized = new BehaviorSubject<boolean>(false);

  private _selectedItem: Item | null = null;
  private items: Item[] = [];

  get selectedItem(): Item | null {
    return this._selectedItem;
  }

  set selectedItem(value: Item | null) {
    this._selectedItem = value;
  }

  constructor(
    private _itemHttpService: ItemHttpService) {
    this._itemHttpService.getItems().subscribe(items => {
      this.items = items;
      this.isInitialized.next(true);
    });
  }

  getItems(): Item[] {
    return this.items;
  }

  addItem(title: string | null | undefined) {
    if (!title) {
      return;
    }
    const newItem = new Item(this.items.length + 1, title);
    this.items.push(newItem);
  }
}
