import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemHttpService {
  constructor() { }

  getItems(): Observable<Item[]> {
    return of([
      new Item(1, 'item 1'),
      new Item(2, 'item 2')]);
  }
}
