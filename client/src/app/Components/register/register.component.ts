import { Component, OnInit } from '@angular/core';
import { Customer } from '../../Models/customer.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  customer: Customer;
  constructor() { }

  ngOnInit() {
  }

  onSubmit()
  {

  }

}
