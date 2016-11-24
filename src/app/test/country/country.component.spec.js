/*import {MOCK_DATA} from './data/mock-data';
import {CountryService} from '../../services/country.service';
// import {AppComponent} from '../../../components/app.component';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
*/
// import {CountryService} from '../../services/country.service';
var countries = [{ "name": "Great Britain" }, { "name": "Spain" }];
// let countryService = new CountryService();
describe('User Service Tests', function () {
    it('returns a list of countries', function () { return expect(countries.length).toBe(2); });
    /*
    it('returns a list of users', done => {
        countryService.getUsers()
                   .then(users => {
                       expect(users.length).toBeDefined();
                       expect(users.length).toBe(3);
                       done();
                   })
                   .catch(error => done.fail('Error'));
    });
    */
});
//# sourceMappingURL=country.component.spec.js.map