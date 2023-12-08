import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllItemsComponent } from './view-all-items.component';

describe('ViewAllItemsComponent', () => {
  let component: ViewAllItemsComponent;
  let fixture: ComponentFixture<ViewAllItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllItemsComponent]
    });
    fixture = TestBed.createComponent(ViewAllItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
