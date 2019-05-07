import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  titulo:string;
  titleSuscription:Subscription;
  constructor(private _loginService:LoginService) { 
    this.titleSuscription = this._loginService.getTitulo().subscribe((titulo) => {
      this.titulo = titulo;
    });

  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.titleSuscription.unsubscribe();
  }

}
