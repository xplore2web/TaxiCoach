import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driverinfo',
  templateUrl: './driverinfo.component.html',
  styleUrls: ['./driverinfo.component.css']
})
export class DriverinfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
saveForm(){
    alert("search completed");
}
saveForm2(){
    alert("add completed");
}
saveForm3(){
    alert("delete completed");
}
}
