import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BookingDetailsModel} from 'app/_models/bookingDetails.model';
@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
    bookingDetails: BookingDetailsModel = new BookingDetailsModel();
    bookingForm: FormGroup;
    destinations:any[];
    vehicleNumber:any[];
    ngOnInit() {
        this.destinations = [{area: "R T Nagar"},{area: "JC ROAD"},{area: "Goripalya"}];
        this.vehicleNumber = [{id: "ka 4444"},{id: "ka 4466"},{id: "ka 5555"}];
    }
    selectedDest(dest){
        
    }
    constructor(fb: FormBuilder, private router: Router) {
        this.bookingForm = fb.group({
            'from': [null, Validators.compose([<any> Validators.required])],
            'destination': [null, Validators.compose([<any> Validators.required])],
            'totalKms': [null, Validators.compose([<any> Validators.required])],
            'fare': [null, Validators.compose([<any> Validators.required])],
            'serviceTax': [null, Validators.compose([<any> Validators.required])],
            'baggageCharge': [null, Validators.compose([<any> Validators.required])],
            'totalFare': [null, Validators.compose([<any> Validators.required])],
            'vehicleNumber': [null, Validators.compose([<any> Validators.required])]
        });

    }
    saveForm(bookingDetails : BookingDetailsModel) {
        alert(JSON.stringify(bookingDetails));
    }


}
