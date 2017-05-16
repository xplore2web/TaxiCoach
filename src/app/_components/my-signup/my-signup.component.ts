import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-signup',
  templateUrl: './my-signup.component.html',
  styleUrls: ['./my-signup.component.css']
})
export class MySignupComponent implements OnInit {
    
  form :any = {uname:"Arfath",password:""};   
  constructor() { }

  ngOnInit() {
  }
    submitForm(){
        alert(JSON.stringify(this.form));
        
    }
}
