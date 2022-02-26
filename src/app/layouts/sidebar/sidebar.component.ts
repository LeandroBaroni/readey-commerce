import { Component, OnInit } from '@angular/core';
import { NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  navigation: any;
  menuToogle: any;
  name: string = 'Leandro';
  constructor() { }
  ngOnInit(): void {
  }

  onClick(){
    const menuToogle: any = document.querySelector('.menuToogle');
    const navigation: any = document.querySelector('.navigation');
    console.log(1);
    menuToogle.onClick = function(){
      navigation?.classList.toogle('active');
    }
  }
}
