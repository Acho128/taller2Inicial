import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../services/login/login.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {SnotifyService, SnotifyPosition, SnotifyToastConfig} from 'ng-snotify';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  titulo:string="Please register";
  public formGroup: FormGroup;
  private formBuilder: FormBuilder;
  constructor(private _loginService:LoginService, private snotifyService:SnotifyService) {
    this._loginService.setTitulo(this.titulo);
    this.formBuilder = new FormBuilder();
    this.iniciarFormulario();
    
   }

  ngOnInit() {
  }
  iniciarFormulario=()=>{
    this.formGroup = this.formBuilder.group({
      correo: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });
  }

  register() {
    if(this.formGroup.valid){ 
      const user:Usuario={
        'email':this.formGroup.value.correo,
        'nombre':this.formGroup.value.password,
        'roles':'Viewer',
        'userId':null
      }
     this._loginService.register(user,this.formGroup.value.password);
    }else{ 
      console.log('Nombre, Correo o contraseña incorrectos No se puede guardar');
      this.snotifyService.warning('Nombre, Correo o contraseña incorrectos', 'No se puede guardar'); 
    } 
 }


}
