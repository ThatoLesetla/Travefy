import { Package } from './../models/package';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { Observable, BehaviorSubject } from 'rxjs';
import { Http } from '@angular/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  package = new BehaviorSubject<Package>({
    id: undefined,
    title: undefined,
    description: undefined,
    location: undefined,
    hotelID: undefined,
    duration: undefined,
    price: undefined,
    currency: undefined,
    flightID: undefined,
    transportationID: undefined,
    discountAmnt: undefined
  });

  currentPackage = this.package.asObservable();

  constructor(private http: HttpClient) { }


  // Create Package
  create(travel_package: Package): Observable<Package> {
    return this.http.post<Package>(`${environment.url}/packages`, travel_package, httpOptions);
  }

  // Get Packages
  findAll(): Observable<Package[]> {
    return this.http.get<Package[]>(`${environment.url}/packages`);
  }


  findOne(): Observable<Package> {
    return this.http.get<Package>(`${environment.url}`);
  }

  delete(id: number) {
    return this.http.delete(`${environment.url}/packages/${id}`);
  }
}
