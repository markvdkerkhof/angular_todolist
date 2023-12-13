import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CONSTANTS } from '../../../../common/constants';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoDetailsComponent implements OnChanges {
  @Input({ required: true }) id?: number;

  protected selectedItem: Item | null = null;

  constructor(
    private _router: Router,
    private _itemService: ItemService) { }

  ngOnChanges() {
    this.selectedItem = this._itemService.selectedItem;
    if (this.selectedItem?.id != this.id) {
      this.goBack();
    }
  }

  protected goBack() {
    this._router.navigate([CONSTANTS.ROUTER_LIST]);
  }
}
