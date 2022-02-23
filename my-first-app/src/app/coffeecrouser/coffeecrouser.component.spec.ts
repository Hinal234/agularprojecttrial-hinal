import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeecrouserComponent } from './coffeecrouser.component';

describe('CoffeecrouserComponent', () => {
  let component: CoffeecrouserComponent;
  let fixture: ComponentFixture<CoffeecrouserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeecrouserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeecrouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
