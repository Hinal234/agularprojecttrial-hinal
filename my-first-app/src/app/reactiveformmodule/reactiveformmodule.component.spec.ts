import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformmoduleComponent } from './reactiveformmodule.component';

describe('ReactiveformmoduleComponent', () => {
  let component: ReactiveformmoduleComponent;
  let fixture: ComponentFixture<ReactiveformmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveformmoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveformmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
