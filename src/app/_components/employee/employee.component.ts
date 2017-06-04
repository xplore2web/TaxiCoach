import { Component, OnInit } from '@angular/core';
import {HeroService} from 'app/_services/hero-service/hero.service';
import {Hero} from 'app/_models/hero';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

heroes: Hero[];
selectedHero: Hero;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
      this.getHeroes();
  }

getHeroes():void{
    this.heroService.getHeroes().then(
    response =>
    this.heroes=response);
}

onSelect(hero):void{
    this.selectedHero  = hero;
    
}
}
