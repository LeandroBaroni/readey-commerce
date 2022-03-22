import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollDownPageComponent } from './scroll-down-page.component';

describe('ScrollDownPageComponent', () => {
  let component: ScrollDownPageComponent;
  let fixture: ComponentFixture<ScrollDownPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollDownPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollDownPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
