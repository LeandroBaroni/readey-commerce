import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-input-searchbox',
  templateUrl: './input-searchbox.component.html',
  styleUrls: ['./input-searchbox.component.scss']
})
export class InputSearchboxComponent implements OnInit {

  faCoffee = faSearch;

  constructor() { }

  ngOnInit(): void {
  }

}
