import { Injectable } from '@angular/core';
import { ItemHttpService } from './item-http-service.service';
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
    //console.log('get selectedItem', this._selectedItem);
    return this._selectedItem;
  }

  set selectedItem(value: Item | null) {
    //console.log('set selectedItem', value);
    this._selectedItem = value;    
  }

  constructor(private _itemHttpService: ItemHttpService) { 
    this._itemHttpService.getItems().subscribe(items => {
      this.items = items;
      this.isInitialized.next(true);
    });
  }

  getItems(): Item[] {
    return this.items;
  } 
}
