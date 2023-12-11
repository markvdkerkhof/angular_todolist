import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CONSTANTS } from '../../../../common/constants';
import { ItemService } from '../../services/item-service.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.scss'

})
export class TodoDetailsComponent implements OnInit {

  protected selectedItem: Item | null = null;
  protected selectedItemId: number | undefined;

  constructor(private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _itemService: ItemService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params: Params) => {
      this.selectedItemId = params[CONSTANTS.ROUTER_PARAM_ITEM_ID];
      this.selectedItem = this._itemService.selectedItem;
    });
  }

  protected goBack() {
    this._router.navigate([CONSTANTS.ROUTER_LIST]);
  }
}
