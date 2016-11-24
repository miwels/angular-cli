/* tslint:disable:no-unused-variable */

import { AppComponent }   from './app.component';
import { TestBed, async } from '@angular/core/testing';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { Http, HttpModule }           from '@angular/http';

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

  it('should contain a text field', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input[type="text"]')).toBeTruthy();
  }));

  it('should contain a dropdown field', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('select')).toBeTruthy();
  }));

  it('should contain a radio button', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input[type="radio"]')).toBeTruthy();
  }));
});
