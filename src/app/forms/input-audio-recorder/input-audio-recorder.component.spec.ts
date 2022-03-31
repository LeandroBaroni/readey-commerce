import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAudioRecorderComponent } from './input-audio-recorder.component';

describe('InputAudioRecorderComponent', () => {
  let component: InputAudioRecorderComponent;
  let fixture: ComponentFixture<InputAudioRecorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAudioRecorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAudioRecorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
