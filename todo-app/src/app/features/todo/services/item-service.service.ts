import { Injectable } from '@angular/core';
import { ItemHttpService } from './item-http-service.service';
import { Item } from '../models/item';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  isInitialized = new BehaviorSubject<boolean>(false);

  private items: Item[] = [];

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
