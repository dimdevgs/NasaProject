import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodListViewComponent } from './apod-list-view.component';

describe('ApodListViewComponent', () => {
  let component: ApodListViewComponent;
  let fixture: ComponentFixture<ApodListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApodListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
