import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn;

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<any>(`${environment.url}/login`, {email: email, pass: password}).pipe(
      map(user => {
        // login successful if there's a jwt token in response
        if (user && user.access_token) {
          // store user details and jwt token in local storage to keep user logged in
          localStorage.setItem('token', JSON.stringify(user.access_token));
          this.isLoggedIn = true;         // set user login status
        }
        return user;
      })
    );
  }


  public getToken() {
    return localStorage.getItem('token');
  }
}
