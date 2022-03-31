import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-audio-recorder',
  templateUrl: './input-audio-recorder.component.html',
  styleUrls: ['./input-audio-recorder.component.scss']
})
export class InputAudioRecorderComponent implements OnInit {

  device = navigator.mediaDevices.getUserMedia({
    audio: true
  });
  recording = false;
  items = [];

  constructor() { }

  ngOnInit(): void {
    this.record();
  }

  record(){

    if(this.recording){
      this.recording = false;
      // stop()
    }else{
      this.device.then( stream => {
        var recorder = new MediaRecorder(stream);
        recorder.ondataavailable = e => {
          this.items.push(e.data);
          if(recorder.state == 'inactive'){
            var blob = new Blob(this.items, {
              type: 'audio/webm'
            });
            var audio = document.getElementById('audio');
            var mainAudio = document.createElement('audio');
            mainAudio.setAttribute('controls', ' controls');
            audio.appendChild(mainAudio);

            mainAudio.innerHTML = '<source src="'+URL.createObjectURL(blob)+'" type="video.webm"/>';
          }
        }

        recorder.start(1000);
        setTimeout(() => {
          recorder.stop();
        }, 5000);
        // this.disappearIcon(stream);
      });
      this.recording = true;
    }
  }

  disappearIcon(value){
    value.getTracks().forEach(track => track?.stop());
  }
}
