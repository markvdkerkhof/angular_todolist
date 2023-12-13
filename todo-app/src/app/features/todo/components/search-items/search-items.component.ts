import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrl: './search-items.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchItemsComponent implements OnInit {

  @Output() searchUpdated = new EventEmitter<string>();

  searchValue: string = '';

  ngOnInit() {
    this.searchValue = 'item 1';
    this.searchUpdated.emit(this.searchValue);
  }

  protected search() {
    this.searchUpdated.emit(this.searchValue);
  }
}
