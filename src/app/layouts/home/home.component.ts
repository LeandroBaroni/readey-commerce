import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

interface IUsuario{
  id: string;
  email: string;
  cargo?: 'normal' | 'funcionario' | 'gerente' | 'coordenador' | 'supervisor';
}

interface ICachorro{
  nome: string;
  idade: number;
  parqueFavoirito?: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  titlePage = 'Home';
  form: FormGroup;


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      totalQuantity: [0, [Validators.required, Validators.max(100)]]
    });

    // console.log(this.addAppend([1, 2, 3], 1));
  }

  show(){
    const input = document.getElementById('input') as HTMLInputElement;
    input.addEventListener('input', (event) => {
      console.log(input.value);
      const i = event.currentTarget as HTMLInputElement;
      console.log(i.value);
    })
  }

  addAppend<T>(array: any, value: T){
    return array.map(item => item + value);
  }


  // interface IAdmin extends IUsuario{
  //   cargo: 'gerente' | 'coordenador' | 'supervisor';
  // }

  redirect(usuario: IUsuario){
    // if('cargo' in usuario){
    //   // redirect to admin area
    // }

    if(usuario.cargo){
      // redirect to main area
    }

    // redirect to another area
  }
}
