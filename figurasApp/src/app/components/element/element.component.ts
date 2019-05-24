import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from "../../services/data/data.service";
import { Observable, Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';
@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  //  isElementRoute: boolean;
  //   elementFigura:string;
  //   figura$:Observable<Elemento[]>;
  isFormula: boolean = false;
  isImagen: boolean = false;
  //   isMath:boolean;
  elementName: string;
  elemento: Elemento;
  paramSuscription: Subscription;
  elementoSuscription: Subscription;
  sectionShowed: string;
  isMath: boolean;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataService: DataService, private _loginService: LoginService) {
    //this.elementFigura=this.activatedRoute.snapshot.params['elementName'];
    //this.figura$=dataService.getElementosByName(this.elementFigura);
    this.loadElementoByParameter();
    this.isMath = _loginService.userHasRole('Math');
    //console.log(this.figura$[0].nombre);
  }

  ngOnInit() {
    ///this.activatedRoute.s
    /*this.activatedRoute.params.subscribe(routeParams => {
      this.figura$ = this.dataService.getElementosByName(routeParams.elementName);
    });*/
  }

  /*goTo(route:string){
    this.router.navigateByUrl(route);
  }

  ocultarDetalle(){
    this.isFormula=false;
    this.isImagen=false;
    console.log(this.figura$);
  }*/
  mostrarFormulas() {
    this.isFormula = !this.isFormula;
    this.isImagen = false;
  }

  mostrarImagenes() {
    this.isImagen = !this.isImagen;
    this.isFormula = false;

  }




  ngOnDestroy(): void {
    this.paramSuscription.unsubscribe();
    this.elementoSuscription.unsubscribe();
  }

  showSection(sectionName: string) {
    this.sectionShowed = sectionName;
  }

  resetSectionShowed() {
    this.showSection('');
  }

  goTo(route: string) {
    this.router.navigateByUrl(route);
  }

  loadElementoByParameter() {
    this.paramSuscription = this.activatedRoute.paramMap.subscribe((params) => {
      this.resetSectionShowed();
      this.elementName = params.get('elementName');
      this.elementoSuscription = this.dataService.getElementosByName(this.elementName).subscribe((elementos) => {
        this.elemento = elementos[0];
      });
    }
    );
  }

}
