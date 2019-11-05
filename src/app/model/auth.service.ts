import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestDatasource } from './rest.datasource';

@Injectable()
export class AuthService {
    constructor(private dataSource: RestDatasource) { }

    authenticate(username: string, password: string): Observable<boolean> {
        return this.dataSource.authenticateUser(username, password);
    }

    get authenticated(): boolean {
        return this.dataSource.authToken != null;
    }

    clear() {
        this.dataSource.authToken = null;
    }
}
