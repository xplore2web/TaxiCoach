import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {signupModel} from 'app/_models/signup.model';
import {kEmailRegex} from 'app/_constants/constants';
import {LoginService} from 'app/_services/login-service/login.service';
import {ApplicationSessionService} from 'app/_services/applicationsession/application-session.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    signupForm: FormGroup;
    bSignupModel: signupModel = new signupModel();
    bSigninFailed: boolean;

    constructor(fb: FormBuilder, private router: Router, private applicationSessionService: ApplicationSessionService,
        private loginService: LoginService) {
        this.signupForm = fb.group({
            'name': [null, Validators.compose([<any> Validators.required])],
            'email': [null, Validators.compose([<any> Validators.required, <any> Validators.pattern(kEmailRegex)])],
            'password': [null, Validators.compose([<any> Validators.required])]
//            'comfirmPassword': [null, Validators.compose([<any> Validators.required])]
        });
    }
    submitForm(bSignupModel: signupModel) {
        alert(JSON.stringify(bSignupModel))
        this.loginService.signup(this.bSignupModel).then(response => {
            alert(JSON.stringify(response));
            if (response == "Signin Error") {
                this.bSigninFailed = true;
            } else {
                this.applicationSessionService.setCurrentAccount(JSON.stringify(response));
            }
        });
//        this.router.navigate(['/login']);
    }

    ngOnInit() {
    }

}

