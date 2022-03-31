import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAudioRecorder2Component } from './input-audio-recorder2.component';

describe('InputAudioRecorder2Component', () => {
  let component: InputAudioRecorder2Component;
  let fixture: ComponentFixture<InputAudioRecorder2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAudioRecorder2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAudioRecorder2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
