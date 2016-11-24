import {Component} from '@angular/core';
import {CountryService} from '../services/country.service';
import {UserService} from '../services/user.service';
import {User} from '../models/user';

@Component({
    selector: 'my-app',
    template: `
        <div [hidden]="submitted" (ngSubmit)="onSubmit()">
            <h1>{{ title }}</h1>
            <form enctype="multipart/form-data" #f="ngForm">
                <div>
                    <label for="name">Name</label>
                    <input  type="text"
                            placeholder="Enter your name"
                            name="username"
                            class="form-control"
                            required
                            [(ngModel)]="user.name">
                    <span class="incorrect-message" *ngIf="!valid['name']">This field is mandatory</span>
                </div>
                <div>
                    <label for="sex">Sex</label>
                    <!--
                        <input name="sex" type="radio" [(ngModel)]="user.sex" [value]="male"> Male
                        <input name="sex" type="radio" [(ngModel)]="user.sex" [value]="female"> Female
                    -->
                    <input name="sex" type="radio" [value]="male" (click)="setSex('male')"> Male
                    <input name="sex" type="radio" [value]="female" (click)="setSex('female')"> Female
                    <div><span class="incorrect-message" *ngIf="!valid['sex']">This field is mandatory</span></div>
                </div>
                <div>
                    <label for="age">Age</label>
                    <input  type="text"
                            class="form-control"
                            required
                            name="age"
                            placeholder="Enter your age"
                            [(ngModel)]="user.age">
                    <span class="incorrect-message" *ngIf="!valid['age']">This field is mandatory and must be a number</span>
                </div>
                <div>
                    <label for="country">Country</label>
                    <select class="form-control"
                            name="country"
                            required
                            [(ngModel)]="user.country">
                        <option [value]="" selected>Please choose...</option>
                        <option *ngFor="let country of countries" [value]="country.name">{{ country.name }}</option>
                    </select>
                    <span class="incorrect-message" *ngIf="!valid['country']">This field is mandatory</span>
                </div>
                <button type="button" (click)="saveUserDetails()">Apply</button>
            </form>
        </div>
        <div [hidden]="!submitted">
            <h1>Application Complete</h1>
            {{ user.name }} Thank you for applying to this useful government service.
        </div>
    `,
    // styleUrls: ['app/css/app.component.css'],
    // The providers array tells Angular to create a fresh instance of the HeroService when it creates a new HeroesComponent. The HeroesComponent can use that service to get heroes and so can every child component of its component tree.
    providers: [CountryService, UserService]
})

export class AppComponent
{
    title = "Some useful Government service";

    user              : User = new User('', 'male', '', '');
    errorMessage      : any;
    countries         : Object[] = [];
    submitted         : boolean  = false;
    submittedMessage  : string   = "";
    formValid         : boolean  = true;
    valid             : any = {
                            name: true,
                            age: true,
                            sex: true,
                            country: true
                        };

    constructor(private _countryService: CountryService,
                private _userService: UserService) {
        this._countryService.getCountries()
                            .subscribe(
                                countries => this.countries = countries,
                                error     => this.errorMessage = <any>error
                                );
    }

    saveUserDetails()
    {
        this.formValid = this.validateForm();

        if(this.formValid) {
            this._userService.saveUser(this.user)
                                  .subscribe(
                                          response => this.saveUserResponseCallback(response),
                                          error    => this.saveUserErrorCallback(error)
                                      );
        }
    }

    saveUserResponseCallback(response: any) : void
    {
        this.submitted = response.status == "OK" ? true : false;
        this.submittedMessage = response.message;
    }

    saveUserErrorCallback(error: any) : void
    {
        this.errorMessage = <any>error;
    }

    validateForm() : boolean
    {
        this.valid['name'] = this.user.name != '' ? true : false;
        this.valid['age']  = this.user.age != '' && !isNaN(parseInt(this.user.age)) ? true : false;
        this.valid['sex']  = this.user.sex == "male"  || this.user.sex == "female" ? true : false;
        this.valid['country'] = this.user.country != '' ? true : false;

        for(let prop in this.valid) {
            if(this.valid[prop] == false) {
                return false;
            }
        }
        return true;
    }

    setSex(sex: string) {
        this.user.sex = sex;
    }
}