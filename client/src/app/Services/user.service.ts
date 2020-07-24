import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userURL = 'http://localhost:3700/';
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const url = `auth/login?username=${username}&password=${password}`;
    return this.http.post<any>(this.userURL, url, httpOptions );
  }
}
