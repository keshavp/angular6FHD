import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface MyData {
  message: string;
  success: boolean;
}

interface LogoutStatus {
  success: boolean;
}

interface IsLoggedIn {
  status: boolean;
}


@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getSomeData() {
    return this.http.get<MyData>('MyData');
  }

   isLoggedIn(): Observable<IsLoggedIn> {

    console.log('---------isLoggedIn---------');

    return this.http.get<IsLoggedIn>('test');
  }

  logout() {

    console.log('---------isLoggedIn---------');

     return this.http.get<LogoutStatus>('logout');
  }

}
