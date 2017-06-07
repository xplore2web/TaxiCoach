import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {BaseService} from 'app/_services/base.service';

@Injectable()
export class TransactionService extends BaseService {
     private transactionServiceUrl = this.getWebServicesUrl();
     private transactionUrl = "transaction";

     constructor(private http: Http) {
        super();
    }
    getTransactionById(transaction: any): Promise<any> {
        const url = `${this.transactionServiceUrl}/${this.transactionUrl}`;
        return this.http.get(url,this.jwt())
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleErrorSignin);
    }	
    getTransactionByDate(transaction: any): Promise<any> {
        const url = `${this.transactionServiceUrl}/${this.transactionUrl}`;
        return this.http.get(url,this.jwt())
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleErrorSignin);
    }																						
}
