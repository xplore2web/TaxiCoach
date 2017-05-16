//import { Injectable } from '@angular/core';
//
//@Injectable()
//export class DashService {
//
//  constructor() { }
//
//}
import { Injectable } from '@angular/core';
import {Hero} from 'app/_models/hero';
import {HEROES} from 'app/_models/mock-heroes';
@Injectable()
export class DashService {
    
    getHeroes():Promise<Hero[]>{
        return Promise.resolve(HEROES);
    }
    

  constructor() { }

}

