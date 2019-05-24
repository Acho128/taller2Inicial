import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from "../../services/data/data.service";
import { Observable, Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';
@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {
  elementos$: Observable<Elemento[]>;
  usuario:Usuario;
  usuarioSuscription:Subscription;
  constructor(private router: Router, private dataService: DataService,private _loginService:LoginService) {
   //debugger
    this.elementos$ = dataService.getAllElementos();
    
  }

  ngOnInit() {
    setTimeout(() => {
      this.usuario=this._loginService.getUsuario();
    }, 1000);
  }
  goTo(route: string) {
    this.router.navigateByUrl(route);

  }
}
