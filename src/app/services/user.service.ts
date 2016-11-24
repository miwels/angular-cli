import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';

@Injectable()
export class UserService {

    private _saveProfileUrl: string = '/api/user/save';

    constructor(private _http: Http) {
    }

    // Returns a list of countries
    saveUser(user: User) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.post(this._saveProfileUrl, JSON.stringify(user), {
                            headers: headers
                          })
                         .map(res => res.json())
                         // .do(data => console.log('Countries: ' + data))
                         .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}