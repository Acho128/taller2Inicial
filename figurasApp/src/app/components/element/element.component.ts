import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from "../../services/data/data.service";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  isElementRoute: boolean;
  elementFigura:string;
  figura$:Observable<Elemento[]>;
  isFormula:boolean=false;
  isImagen:boolean=false;
  constructor(private router: Router, private activatedRoute:ActivatedRoute, private dataService: DataService ) {
    this.elementFigura=this.activatedRoute.snapshot.params['elementName'];
    this.figura$=dataService.getElementosByName(this.elementFigura);
    //console.log(this.figura$[0].nombre);
  }

  ngOnInit() {
    ///this.activatedRoute.s
    this.activatedRoute.params.subscribe(routeParams => {
      this.figura$ = this.dataService.getElementosByName(routeParams.elementName);
    });
  }

  goTo(route:string){
    this.router.navigateByUrl(route);
  }

  ocultarDetalle(){
    this.isFormula=false;
    this.isImagen=false;
    console.log(this.figura$);
  }
  mostrarFormulas(){
    this.isFormula=!this.isFormula;
    this.isImagen=false;
  }

  mostrarImagenes(){
    this.isImagen=!this.isImagen;
    this.isFormula=false;
    
  }
}
