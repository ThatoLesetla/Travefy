import { Component, OnInit } from '@angular/core';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  public listedAirports: any;
  constructor(private airports: FlightService) { }

  ngOnInit() {
    this.airports.listedAirports.subscribe((data) => this.listedAirports = data);
  }

  onSearch() {

  }

}
