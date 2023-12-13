import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { CONSTANTS } from '../../../../common/constants';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTodoComponent {

  protected selectedItem: Item | null = null;

  protected addTodoForm = new FormGroup({
    title: new FormControl('', Validators.required)
  });

  constructor(
    private _router: Router,
    private _itemService: ItemService) { }

  protected onSubmit() {
    this._itemService.addItem(this.addTodoForm?.value?.title);
    this.goBack();
  }

  protected goBack() {
    this._router.navigate([CONSTANTS.ROUTER_LIST]);
  }
}
