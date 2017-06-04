import { Component, OnInit } from '@angular/core';
import {ticketsearchmodel} from 'app/_models/ticketsearch.model';
@Component({
  selector: 'app-ticketsearch',
  templateUrl: './ticketsearch.component.html',
  styleUrls: ['./ticketsearch.component.css']
})
export class TicketsearchComponent implements OnInit {
bticketsearch : ticketsearchmodel = new ticketsearchmodel();
ticketId:any[];
  constructor() { }

submitForm(bticketsearch:ticketsearchmodel) {
        alert(JSON.stringify(bticketsearch));   
}
  ngOnInit() {
            this.ticketId = [{id: "11"},{id: " 12"},{id: "13"}];
  }
//   selectedticketSearch(ticketSearch){
//        
//    }

}
