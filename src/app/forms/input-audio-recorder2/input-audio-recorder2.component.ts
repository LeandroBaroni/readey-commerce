import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-audio-recorder2',
  templateUrl: './input-audio-recorder2.component.html',
  styleUrls: ['./input-audio-recorder2.component.scss']
})
export class InputAudioRecorder2Component implements OnInit {

  recording = false;
  constructor() { }

  ngOnInit(): void {
  }

  record(){
    if(this.recording){
      this.recording = false;
      this.stop()
    }else{
      this.recording = true;
      this.start();
    }
  }

  start(){}
  stop(){}
}
