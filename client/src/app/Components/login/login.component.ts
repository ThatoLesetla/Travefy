import { Component, OnInit } from '@angular/core';
import { Customer } from '../../Models/customer.interface';
import { CustomerService } from '../../Services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private custService: CustomerService) {
   }

  ngOnInit() {
  }

  onSubmit() {

    if (this.username !== ' ' && this.password !== ' ') {

      return this.custService.login(this.username, this.password);
    }
  }

}
