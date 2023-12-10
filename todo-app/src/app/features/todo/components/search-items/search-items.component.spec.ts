import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchItemsComponent } from './search-items.component';
import { AppModule } from '../../../../app.module';

describe('SearchItemsComponent', () => {
  let component: SearchItemsComponent;
  let fixture: ComponentFixture<SearchItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
