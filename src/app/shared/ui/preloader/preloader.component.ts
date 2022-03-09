import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-preloader',
  templateUrl: './preloader.component.html'
})
export class PreloaderComponent {

  @Input() display = false;
  constructor() { }

  show(){
    this.display = true;
  }

  hide(){
    this.display = false;
  }
}
