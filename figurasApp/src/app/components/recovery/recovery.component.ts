import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SnotifyService } from 'ng-snotify';
@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {
  titulo:string="Recover your password";
  public formGroup: FormGroup;
  private formBuilder: FormBuilder;
  constructor(private router: Router,private _loginService:LoginService, private snotifyService:SnotifyService) {
    this._loginService.setTitulo(this.titulo);
    this.formBuilder = new FormBuilder();
    this.iniciarFormulario();
   }

  ngOnInit() {
  }
  iniciarFormulario=()=>{
    this.formGroup = this.formBuilder.group({
      correo: ["", [Validators.required]]
    });
  }
  goTo(route: string) {
    this.router.navigateByUrl(route);

  }

  recovery = () => {
    debugger;
    if(this.formGroup.valid){
      this._loginService.recovery(this.formGroup.value.correo);
    }else{
      this.snotifyService.warning('Debe especificar un correo vailido', 'Atención'); 
    }
  }


}
