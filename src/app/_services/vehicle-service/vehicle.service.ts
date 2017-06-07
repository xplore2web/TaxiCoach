import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {BaseService} from 'app/_services/base.service';

@Injectable()
export class VehicleService extends BaseService {
     private vehicleServiceUrl = this.getWebServicesUrl();
       private vehiclesUrl = "vehicles";

 constructor(private http: Http) {
        super();
    }
    getAllVehicles(vehicles: any): Promise<any> {
        const url = `${this.vehicleServiceUrl}/${this.vehiclesUrl}`;
        return this.http.get(url, this.jwt())
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleErrorSignin);
    }
    AddVehicles(vehicles: any): Promise<any> {
        const url = `${this.vehicleServiceUrl}/${this.vehiclesUrl}`;
        return this.http.get(url, this.jwt())
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleErrorSignin);
    }
    DeleteVehicles(vehicles: any): Promise<any> {
        const url = `${this.vehicleServiceUrl}/${this.vehiclesUrl}`;
        return this.http.get(url, this.jwt())
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleErrorSignin);
    }
}
