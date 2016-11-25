/* tslint:disable:no-unused-variable */

import { AppComponent }   from './app.component';
import { TestBed, getTestBed, async } from '@angular/core/testing';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { Http, HttpModule, BaseRequestOptions, ResponseOptions, Response } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BrowserModule } from '@angular/platform-browser';
import { CountryService}  from '../services/country.service';
import { UserService }  from '../services/user.service';
import { User }         from '../models/user';

describe('CountryService', function() {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
            CountryService,
            MockBackend,
            BaseRequestOptions,
            {
                provide: Http,
                deps: [MockBackend, BaseRequestOptions],
                useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                }
            }
        ],
        imports: [
            FormsModule,
            HttpModule
        ]
    });
        TestBed.compileComponents();
    });

    it('should return a list of countries', () => {
        let countryService: CountryService = getTestBed().get(CountryService);
        countryService.getCountries().subscribe(
            (result) => {
                expect(result).toBeDefined();
                expect(result.status).toBe(200);
            }
        );
    });
});

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        CommonModule,
        FormsModule,
        HttpModule
      ],
      providers: []
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Some useful Government service'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Some useful Government service');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Some useful Government service');
  }));

  it('should contain a name text field', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input[type="text"]')).toBeTruthy();
    expect(compiled.querySelector('input[placeholder="Enter your name"]')).toBeTruthy();
  }));

  it('should contain an age text field', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input[type="text"]')).toBeTruthy();
    expect(compiled.querySelector('input[placeholder="Enter your age"]')).toBeTruthy();
  }));

  it('should contain a dropdown field', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('select')).toBeTruthy();
  }));

  it('should contain a button to choose sex', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input[name="sex"]')).toBeTruthy();
  }));

  it('should contain a submit button', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button')).toBeTruthy();
  }));
});

describe('UserService', function() {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
            UserService,
            MockBackend,
            BaseRequestOptions,
            {
                provide: Http,
                deps: [MockBackend, BaseRequestOptions],
                useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                }
            }
        ],
        imports: [
            FormsModule,
            HttpModule
        ]
    });
        TestBed.compileComponents();
    });

    it('should insert a user in the system', () => {
        let userService: UserService = getTestBed().get(UserService);
        let mockUser: User = {"name" : "Test user", "sex": "male", "age": "20", "country" : "United Kingdom"};
        userService.saveUser(mockUser).subscribe(
            (result) => {
                expect(result).toBeDefined();
                expect(result.status).toBe(200);
            }
        );
    });
});