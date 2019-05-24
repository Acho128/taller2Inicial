import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SnotifyService, SnotifyPosition, SnotifyToastConfig} from 'ng-snotify';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  style = 'material';
  title = 'Snotify title!';
  body = 'Lorem ipsum dolor sit amet!';
  timeout = 3000;
  position: SnotifyPosition = SnotifyPosition.rightBottom;
  progressBar = true;
  closeClick = true;
  newTop = true;
  filterDuplicates = false;
  backdrop = -1;
  dockMax = 8;
  blockMax = 6;
  pauseHover = true;
  titleMaxLength = 15;
  bodyMaxLength = 80; 

  constructor(private router:Router,private snotifyService: SnotifyService) { 
    this.snotifyService.success('La librería fue implementada correctamente, buen trabajo!', 'Excelente');
  }

  ngOnInit() {
   
  } 
 
  goTo(route:string){
    this.router.navigateByUrl(route);
  }
  
}
