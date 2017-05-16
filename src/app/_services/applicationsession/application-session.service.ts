import { Injectable } from '@angular/core';
import { BaseService } from 'app/_services/base.service';
import { KNGCONSTANTS } from 'app/_constants/constants';
@Injectable()
export class ApplicationSessionService {

    setCurrentAccount(currentAccount: any) {
        localStorage.setItem(KNGCONSTANTS.currentAccount, currentAccount);
    }

    getCurrentAccount(): any {
        return JSON.parse(localStorage.getItem(KNGCONSTANTS.currentAccount));
    }

    removeCurrentAccount() {
        localStorage.removeItem(KNGCONSTANTS.currentAccount);
    }
}
