import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../models/client-interface';
import { map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { Observable, BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  user = new BehaviorSubject<Client>({
    clientID: undefined,
    name: undefined,
    surname: undefined,
    email: undefined,
    phone: undefined,
    address: undefined,
    city: undefined,
    postalCode: undefined,
    password: undefined,
    updateDate: undefined
  });

  currentUser = this.user.asObservable();

  constructor(private http: HttpClient) { }


  // Post: /clients
  create(client: Client): Observable<any> {
    return this.http.post<any>(`${environment.url}/clients`, client, httpOptions).pipe(
      map(res => {
      })
    );
  }

  // Get:
  findAll(): Observable<Client[]> {
    return this.http.get<Client[]>(`${environment.url}/clients`);
  }

  // Delete Client
  delete(id: string) {
    return this.http.delete(`${environment.url}/clients/${id}`, httpOptions);
  }

  update(client: Client) {
    console.log(client.email);
    return this.http.put(`${environment.url}/clients/${client.clientID}`, client);
  }

  changeUser(client: Client) {
    this.user.next(client);
  }
}
