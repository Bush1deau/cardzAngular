import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardzComponent } from './cardz.component';

describe('CardzComponent', () => {
  let component: CardzComponent;
  let fixture: ComponentFixture<CardzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
