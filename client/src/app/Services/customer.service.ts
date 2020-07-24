import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../Models/customer.interface';
import { Routes, Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};




@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerAPI: 'http:localhost:3700/customers';
  token: any;
  error = false;
  constructor(
    private http: HttpClient,
    public router: Router) { }

  // Create
  create(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.customerAPI, customer);
  }

  // Login
   login(name: string, pass: string) {
    const url = 'http://localhost:3700/auth/login';
    return this.http.post(url, {username: name, password: pass}, httpOptions).subscribe(data => {
      this.token = data;
      console.log('The token is' + this.token.access_token);

      this.router.navigate(['home']);
    }, error => {
     // show error message
      this.error = true;
    });
  }

  // Update

  // Delete

}
