import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  menu: any;
  constructor() { }

  ngOnInit(): void {
  }

  toogleSidebar(){
    this.toggleSidebarForMe.emit();
    console.log("a");
  }
}
