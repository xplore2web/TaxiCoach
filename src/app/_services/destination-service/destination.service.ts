import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {BaseService} from 'app/_services/base.service';

@Injectable()
export class DestinationService extends BaseService {

    private destinationServiceUrl = this.getWebServicesUrl();

    private destinationUrl = "destination";
    constructor(private http: Http) {
        super();
    }
    getAllDestinations(destinations: any): Promise<any> {
        const url = `${this.destinationServiceUrl}/${this.destinationUrl}`;
        return this.http.get(url, this.jwt())
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleErrorSignin);
    }
    
    saveDestination(destination: any): Promise<any> {
        const url = `${this.destinationServiceUrl}/${this.destinationUrl}`;
        return this.http.post(url, JSON.stringify(destination), this.jwt())
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleErrorSignin);
    }
    uploadDestinations(destination: any): Promise<any> {
        const url = `${this.destinationServiceUrl}/${this.destinationUrl}`;
        return this.http.post(url, JSON.stringify(destination), this.jwt())
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleErrorSignin);
    }
    editDestination(destination: any): Promise<any> {
        const url = `${this.destinationServiceUrl}/${this.destinationUrl}`;
        return this.http.post(url, JSON.stringify(destination), this.jwt())
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleErrorSignin);
    }
    deleteDestination(destination: any): Promise<any> {
        const url = `${this.destinationServiceUrl}/${this.destinationUrl}`;
        return this.http.post(url, JSON.stringify(destination), this.jwt())
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleErrorSignin);
    }

}
