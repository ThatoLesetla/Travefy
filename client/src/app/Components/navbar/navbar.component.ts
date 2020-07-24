import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../Services/customer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

}
