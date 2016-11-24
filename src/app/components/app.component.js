"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var country_service_1 = require('../services/country.service');
var user_service_1 = require('../services/user.service');
var user_1 = require('../models/user');
var AppComponent = (function () {
    function AppComponent(_countryService, _userService) {
        var _this = this;
        this._countryService = _countryService;
        this._userService = _userService;
        this.title = "Some useful Government service";
        this.user = new user_1.User('', '', '', '');
        this.countries = [];
        this.submitted = false;
        this.submittedMessage = "";
        this.formValid = true;
        this.valid = {
            name: true,
            age: true,
            sex: true,
            country: true
        };
        this._countryService.getCountries()
            .subscribe(function (countries) { return _this.countries = countries; }, function (error) { return _this.errorMessage = error; });
    }
    AppComponent.prototype.saveUserDetails = function () {
        var _this = this;
        this.formValid = this.validateForm();
        if (this.formValid) {
            this._userService.saveUser(this.user)
                .subscribe(function (response) { return _this.saveUserResponseCallback(response); }, function (error) { return _this.saveUserErrorCallback(error); });
        }
    };
    AppComponent.prototype.saveUserResponseCallback = function (response) {
        this.submitted = response.status == "OK" ? true : false;
        this.submittedMessage = response.message;
    };
    AppComponent.prototype.saveUserErrorCallback = function (error) {
        this.errorMessage = error;
    };
    AppComponent.prototype.validateForm = function () {
        this.valid['name'] = this.user.name != '' ? true : false;
        this.valid['age'] = this.user.age != '' && !isNaN(parseInt(this.user.age)) ? true : false;
        this.valid['sex'] = this.user.sex == "male" || this.user.sex == "female" ? true : false;
        this.valid['country'] = this.user.country != '' ? true : false;
        for (var prop in this.valid) {
            if (this.valid[prop] == false) {
                return false;
            }
        }
        return true;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <div [hidden]=\"submitted\" (ngSubmit)=\"onSubmit()\">\n            <h1>{{ title }}</h1>\n            <form enctype=\"multipart/form-data\">\n                <div>\n                    <label for=\"name\">Name</label>\n                    <input  type=\"text\"\n                            placeholder=\"Enter your name\"\n                            name=\"username\"\n                            class=\"form-control\"\n                            required\n                            [(ngModel)]=\"user.name\">\n                    <span class=\"incorrect-message\" *ngIf=\"!valid['name']\">This field is mandatory</span>\n                </div>\n                <div>\n                    <label for=\"sex\">Sex</label>\n                    <input type=\"radio\" [ngModel]=\"{checked: user.sex == 'male'}\" (ngModelChange)=\"user.sex='male'\" name=\"sex\"> Male\n                    <input type=\"radio\" [ngModel]=\"{checked: user.sex == 'female'}\" (ngModelChange)=\"user.sex='female'\" name=\"sex\"> Female\n                    <div><span class=\"incorrect-message\" *ngIf=\"!valid['sex']\">This field is mandatory</span></div>\n                </div>\n                <div>\n                    <label for=\"age\">Age</label>\n                    <input  type=\"text\"\n                            class=\"form-control\"\n                            required\n                            name=\"age\"\n                            placeholder=\"Enter your age\"\n                            [(ngModel)]=\"user.age\">\n                    <span class=\"incorrect-message\" *ngIf=\"!valid['age']\">This field is mandatory and must be a number</span>\n                </div>\n                <div>\n                    <label for=\"country\">Country</label>\n                    <select class=\"form-control\"\n                            name=\"country\"\n                            required\n                            [(ngModel)]=\"user.country\">\n                        <option [value]=\"\" selected>Please choose...</option>\n                        <option *ngFor=\"#country of countries\" [value]=\"country.name\">{{ country.name }}</option>\n                    </select>\n                    <span class=\"incorrect-message\" *ngIf=\"!valid['country']\">This field is mandatory</span>\n                </div>\n                <button type=\"button\" (click)=\"saveUserDetails()\">Apply</button>\n            </form>\n        </div>\n        <div [hidden]=\"!submitted\">\n            <h1>Application Complete</h1>\n            {{ user.name }} Thank you for applying to this useful government service.\n        </div>\n    ",
            styleUrls: ['app/css/app.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            // The providers array tells Angular to create a fresh instance of the HeroService when it creates a new HeroesComponent. The HeroesComponent can use that service to get heroes and so can every child component of its component tree.
            providers: [router_1.ROUTER_PROVIDERS, country_service_1.CountryService, user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof country_service_1.CountryService !== 'undefined' && country_service_1.CountryService) === 'function' && _a) || Object, (typeof (_b = typeof user_service_1.UserService !== 'undefined' && user_service_1.UserService) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map