import { DialogData } from './../table-list.component';
import { ClientService } from '../../services/client.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Client } from '../../models/client-interface';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NotificationsService } from '../../services/notifications.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
    selector: 'app-client-edit-modal',
    templateUrl: './client-edit-modal.html',
    styleUrls: ['./client-edit-modal.css']
})

export class ClientEditDialogComponent implements OnInit {

    client: Client;
    clientProfile = new FormGroup({
        'name': new FormControl('', Validators.required),
        'surname': new FormControl('', Validators.required),
        'email': new FormControl('', [Validators.required, Validators.email]),
        'phone': new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
        'address': new FormControl('', Validators.required),
        'city': new FormControl('', Validators.required),
        'postalCode': new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)])
    });

    constructor(private dialog: MatDialog,
                private clientService: ClientService,
                @Inject(MAT_DIALOG_DATA) private clientData: Client,
                private dialogRef: MatDialogRef<ClientEditDialogComponent>,
                private notifications: NotificationsService
                ) {}

    ngOnInit() {
        this.client = this.clientData;
        this.setName();
        this.setSurname();
        this.setEmail();
        this.setPhone();
        this.setAddress();
        this.setCity();
        this.setPostalCode();
    }

    onSave() {
        this.clientService.update(this.clientProfile.value).subscribe(data => {
            this.dialogRef.close();
            this.notifications.showNotification('top', 'right', 'Profile successfully updated');
        });
    }

    onCancel() {
        this.dialogRef.close();
    }

    get name() {
        return this.clientProfile.get('name');
    }

    setName() {
        this.name.setValue(this.client.name);
    }

    get surname() {
        return this.clientProfile.get('surname');
    }

    setSurname() {
        this.surname.setValue(this.client.surname);
    }

    get email() {
        return this.clientProfile.get('email');
    }

    setEmail() {
        this.email.setValue(this.client.email);
    }

    get phone() {
        return this.clientProfile.get('phone');
    }

    setPhone() {
        this.phone.setValue(this.client.phone);
    }

    get address() {
        return this.clientProfile.get('address');
    }

    setAddress() {
        this.address.setValue(this.client.address);
    }

    get city() {
        return this.clientProfile.get('city');
    }

    setCity() {
        this.city.setValue(this.client.city);
    }

    get postalCode() {
        return this.clientProfile.get('postalCode');
    }

    setPostalCode() {
        this.postalCode.setValue(this.client.postalCode);
    }

}
