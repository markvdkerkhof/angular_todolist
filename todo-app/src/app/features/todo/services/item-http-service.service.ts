import { Observable } from 'rxjs/internal/Observable';
import {of, timeout } from 'rxjs';
import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'  
})
export class ItemHttpService {
constructor() { }
  getItems(): Observable<Item[]> {    
    return of ([
      new Item('item 1', new Date()), 
      new Item('item 2', new Date())]);    
  };
}