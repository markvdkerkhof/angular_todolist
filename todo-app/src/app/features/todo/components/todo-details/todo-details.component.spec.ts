import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetailsComponent } from './todo-details.component';
import { RouterModule } from '@angular/router';
import { AppModule } from '../../../../app.module';

describe('TodoDetailsComponent', () => {
  let component: TodoDetailsComponent;
  let fixture: ComponentFixture<TodoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
      imports: [    
        
       RouterModule.forRoot([]),
       AppModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
