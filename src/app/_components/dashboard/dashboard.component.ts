import { Component, OnInit } from '@angular/core';
//
//@Component({
//  selector: 'app-dashboard',
//  templateUrl: './dashboard.component.html',
//  styleUrls: ['./dashboard.component.css']
//})
//export class DashboardComponent implements OnInit {
//
//  constructor() { }
//
//  ngOnInit() {
//  }
//
//}
import {DashService} from 'app/_services/dashboard-service/dash.service';
import {Hero} from 'app/_models/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

heroes: Hero[];
selectedHero: Hero;
  constructor(private dashService: DashService) { }

  ngOnInit() {
      this.getHeroes();
  }

getHeroes():void{
    this.dashService.getHeroes().then(
    response =>
    this.heroes=response);
}

onSelect(hero):void{
    this.selectedHero  = hero;
    
}
}

