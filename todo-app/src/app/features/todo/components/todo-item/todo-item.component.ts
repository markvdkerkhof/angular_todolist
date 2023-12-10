import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CONSTANTS } from '../../../../common/constants';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent implements OnInit{

selectedItemId: number | undefined;

constructor(private _activatedRoute: ActivatedRoute){}
  ngOnInit() {  
    this._activatedRoute.params.subscribe((params: Params) => {
      this.selectedItemId = params[CONSTANTS.NAVIGATION_ITEM_ID];
    });
  }
}
