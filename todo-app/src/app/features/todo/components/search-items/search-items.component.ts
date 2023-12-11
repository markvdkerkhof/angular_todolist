import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrl: './search-items.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchItemsComponent implements OnInit {

  @Output() onSearchUpdated = new EventEmitter<string>();

  searchValue: string = '';

  ngOnInit() {
    this.searchValue = 'item 1';
    this.onSearchUpdated.emit(this.searchValue);
  }

  protected search() {
    this.onSearchUpdated.emit(this.searchValue);
  }
}
