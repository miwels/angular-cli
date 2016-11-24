import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CountryService {

    private _countriesUrl: string = 'https://restcountries.eu/rest/v1/region/Europe';

    constructor(private _http: Http) {
    }

    // Returns a list of countries
    getCountries() {
        return this._http.get(this._countriesUrl)
                         .map(res => res.json())
                         // .do(data => console.log(data))
                         .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}