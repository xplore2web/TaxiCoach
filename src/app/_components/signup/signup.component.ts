import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {signupModel} from 'app/_models/signup.model';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
       signupForm : FormGroup;
       bSignupModel: signupModel = new signupModel();

  constructor(fb: FormBuilder,private router: Router) {
           this.signupForm = fb.group({
            'name': [null, Validators.compose([<any> Validators.required])],
            'email': [null, Validators.compose([<any> Validators.required])],
            'password': [null, Validators.compose([<any> Validators.required])],
            'comfirmPassword': [null, Validators.compose([<any> Validators.required])]
        });
   }
      submitForm(bSignupModel:signupModel){
          alert(JSON.stringify(bSignupModel))
        alert("Successfully logged in.");
        this.router.navigate(['/login']);
   }
    
  ngOnInit() {
  }
  
}

   