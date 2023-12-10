import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CONSTANTS } from '../../../../common/constants';
import { ItemService } from '../../services/item-service.service';
import { Item } from '../../models/item';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss'

})
export class AddTodoComponent implements OnInit{
  selectedItemId: number | undefined;
  selectedItem: Item | null = null;

  addTodoForm = new FormGroup({
    title: new FormControl('', Validators.required)
});

  constructor(private  _router: Router,
    private _itemService: ItemService){}
  
  ngOnInit() {     }

  protected onSubmit() {
    this._itemService.addItem(this.addTodoForm?.value?.title);
    this.goBack();
  
  };
  
  protected goBack() {
    this._router.navigate([CONSTANTS.ROUTER_LIST]);
  }
}
