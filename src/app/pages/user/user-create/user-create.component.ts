import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  titlePage = 'Cadastro de Usuários';
  constructor() { }

  ngOnInit(): void {
  }

}
