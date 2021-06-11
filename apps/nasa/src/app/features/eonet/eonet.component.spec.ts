import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EonetComponent } from './eonet.component';

describe('EonetComponent', () => {
  let component: EonetComponent;
  let fixture: ComponentFixture<EonetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EonetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EonetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
