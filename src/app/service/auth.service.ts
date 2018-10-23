import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';

interface MyData {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = false;

  heroesUrl: any;



  constructor(private http: HttpClient,
    private _router: Router) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = true;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }
/*
  getUserDetails(username, password) {
    // post these details to API server return user info if correct

    console.log('---------username---------', username);
    console.log('---------password---------', password);

    const data: (any) = {
      'rec_CountryID': 'IND',
      'mobile_NO': '9404985969'
    };

    return this.http.post<MyData>(this.url, data);
  }
  */

 getUserDetails() {
  /*this.heroesUrl = 'http://localhost:8080/okkyoAppApi12/receiverReActive';

  const data: (any) = {
    'rec_CountryID': 'IND',
    'mobile_NO': '9404985969'
  };

 const test: Observable<any> = this.http.post(this.heroesUrl, data);


console.log(test);*/
 const test = this._router.navigate(['Welcome']);
    return test;

  }


}

/*

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = false;

  // url: 'https://scubetechserv.com/okkyoAppApi/receiverReActive';
  url: 'https://scubetechserv.com/okkyoAppApi/receivers';
    constructor(private http: HttpClient) { }




  setLoggedIn(value: boolean) {
    this.loggedInStatus = true;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }

  getUserDetails(username, password) {
    // post these details to API server return user info if correct

    console.log('---------username---------', username);
    console.log('---------password---------', password);

    const data: (any) = {
      'rec_CountryID': 'IND',
      'mobile_NO': '9404985969'
    };

    return this.http.get(this.url);


  }



}


*/
