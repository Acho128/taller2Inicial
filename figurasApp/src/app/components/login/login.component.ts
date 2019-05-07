import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  titulo$:Subject<string>;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goTo(route: string) {
    this.router.navigateByUrl(route);

  }
  getTitulo():Observable<string>{
    return this.titulo$;
  }

}
