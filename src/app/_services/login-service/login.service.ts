import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {BaseService} from 'app/_services/base.service';
import {Hero} from 'app/_models/hero';
import {HEROES} from 'app/_models/mock-heroes';
import {loginModel} from 'app/_models/login.model';

@Injectable()
export class LoginService extends BaseService {
    private loginServiceUrl = this.getWebServicesUrl();
    private loginUrl = "login";
    private signUpUrl = "signUpAccount";

    constructor(private http: Http) {
        super();
    }

        signin(account: loginModel): Promise<any> {
        const url = `${this.loginServiceUrl}/${this.loginUrl}/${this.signUpUrl}`;
//        ?username=${account.email}&password=${account.password}&grant_type=password`;
        return this.http.post(url, JSON.stringify(account), this.jwtSignin())
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleErrorSignin);
    }

    getLoginDetails(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
}
