import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'x-rapidapi-key': '74b4074363msh7f72a6bd77335e5p174d1ejsn6cd557899437',
    'x-rapidapi-host': 'cometari-airportsfinder-v1.p.rapidapi.com'
  })
}
@Injectable({
  providedIn: 'root'
})
export class FlightService {

  airports = new BehaviorSubject<any>([]);
  listedAirports = this.airports.asObservable();

  constructor(private http: HttpClient) { }

  searchAirportsByRadius(): Observable<any> {
    return this.http.get<any>(`https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-radius?radius=50&lng=-157.895277&lat=21.265600`, httpOptions);
  }

  updateAirportListing(airports: any) {
    this.airports.next(airports);
  }
}
