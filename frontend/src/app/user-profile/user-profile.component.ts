import { NotificationsService } from './../services/notifications.service';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';
import { Client } from './../models/client-interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private newClient: Client;

  clientProfile = new FormGroup({
    'name': new FormControl('', Validators.required),
    'surname': new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'phone': new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
    'address': new FormControl('', Validators.required),
    'city': new FormControl('', Validators.required),
    'postalCode': new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)])
  });

  constructor(private clientService: ClientService,
              private router: Router,
              private notifyService: NotificationsService) { }

  ngOnInit() {

  }

  onSubmit() {
    this.newClient = this.clientProfile.value;
    this.clientService.create(this.clientProfile.value).subscribe(data => {
      console.log(data);
      const message = `Customer successfully added to database a email will be sent to ${this.clientProfile.value.name} for confirmation of booking .`;
      this.notifyService.showNotification('top', 'right', message);
      this.router.navigate(['/dashboard']);
    })
  }

  get name() {
    return this.clientProfile.get('name');
  }

  get surname() {
    return this.clientProfile.get('surname');
  }

  get email() {
    return this.clientProfile.get('email');
  }

  get phone() {
    return this.clientProfile.get('phone');
  }

  get address() {
    return this.clientProfile.get('address');
  }

  get city() {
    return this.clientProfile.get('city');
  }

  get postalCode() {
    return this.clientProfile.get('postalCode');
  }
}
