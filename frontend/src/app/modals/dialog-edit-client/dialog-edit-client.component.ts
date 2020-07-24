import { NotificationsService } from './../../services/notifications.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';


import { ClientService} from '../../services/client.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface DialogData {
  clientID: string
}


@Component({
  selector: 'app-dialog-edit-client',
  templateUrl: './dialog-edit-client.component.html',
  styleUrls: ['./dialog-edit-client.component.css']
})
export class DialogEditClientComponent implements OnInit {

  constructor(
    // public dialogRef: MatDialogRef<DialoDialogEditClientComponentgOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData,
    private router: Router,
    private clientService: ClientService,
    private notifications: NotificationsService
  ) { }

  ngOnInit(): void {
  }

}
