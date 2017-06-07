import {Injectable} from '@angular/core';
import {Headers, RequestOptions} from '@angular/http';
import {environment} from 'environments/environment';
import {ApplicationSessionService} from 'app/_services/applicationsession/application-session.service';
@Injectable()
export class BaseService {
    applicationSessionService: ApplicationSessionService = new ApplicationSessionService();

    constructor() {}

    public handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    public handleErrorSignin(error: any): Promise<any> {
        return Promise.resolve("Signin Error");
    }

    public jwtSignin() {
        let headers = new Headers({ 'authorization': 'Basic YWxjb3JkYXBwOmFsY29yZHRlY2gyMDE3','Content-Type': 'application/json'});
        return new RequestOptions({headers: headers});
    }

    public jwt() {
        let currentAccount = this.applicationSessionService.getCurrentAccount();
        if (currentAccount && currentAccount.access_token) {

            let headers = new Headers({'authorization': 'Bearer ' + currentAccount.access_token, 'Content-Type': 'application/json'});
            return new RequestOptions({headers: headers});
        } else {
            window.location.href = this.getClientUrl() + 'signin';
        }
    }

    public getOAuthTokenUrl(): string {
        return environment.webServicesUrl + "oauth/token";
    }

    public getWebServicesUrl(): string {
        return environment.webServicesUrl + "api/v1";
    }

    public getClientUrl(): string {
        return environment.clientUrl;
    }

}
