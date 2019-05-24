import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { LoginService } from "../../services/login/login.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DataService } from 'src/app/services/data/data.service';
import { SnotifyService } from 'ng-snotify';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  titulo$:Subject<string>;
  currentUser: Usuario;
  userSuscription: Subscription;
  
  titulo:string="Please Login";
  public formGroup: FormGroup;
  private formBuilder: FormBuilder;
  constructor(private router: Router,private _loginService:LoginService,private angularFireAuth: AngularFireAuth,private dataService: DataService, private snotifyService: SnotifyService) { 
    this._loginService.setTitulo(this.titulo);
    this.titulo$ = new Subject<string>();
    this.formBuilder = new FormBuilder();
    this.iniciarLogin();
  }

  ngOnInit() {
  }
  goTo(route: string) {
    this.router.navigateByUrl(route);

  }
 
  iniciarLogin=()=>{
    this.formGroup = this.formBuilder.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(4)]]
    });
  }

  login(){
    if(this.formGroup.valid){
      this._loginService.login(this.formGroup.value.email,this.formGroup.value.password);
     }else{ 
       this.snotifyService.warning('Correo o contraseña incorrectos', 'Atención'); 
     } 
  }




}
