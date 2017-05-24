import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DestinationModel} from 'app/_models/destination.model';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
     destinationDetails: DestinationModel = new DestinationModel();
    destinationForm: FormGroup;
    destinationDeleteForm:FormGroup;
    destination:any[];

  constructor(fb: FormBuilder, private router: Router) {
  
        this.destinationForm = fb.group({
            'from': [null, Validators.compose([<any> Validators.required])],
             'to': [null, Validators.compose([<any> Validators.required])],
              'km': [null, Validators.compose([<any> Validators.required])]
        });
        
        this.destinationDeleteForm = fb.group({
            'destination': [null, Validators.compose([<any> Validators.required])]
        });
             }

  ngOnInit() {
       this.destination = [{area: "R T Nagar"},{area: "JC ROAD"},{area: "Goripalya"}];
  }
     saveForm(destinationDetails : DestinationModel) {
        alert(JSON.stringify(destinationDetails));
    }

}
