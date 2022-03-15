import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSearchboxComponent } from './input-searchbox.component';

describe('InputSearchboxComponent', () => {
  let component: InputSearchboxComponent;
  let fixture: ComponentFixture<InputSearchboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSearchboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
