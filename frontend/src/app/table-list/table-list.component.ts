import { Router } from '@angular/router';
import { Component, OnInit, Inject} from '@angular/core';
import { Client } from '../models/client-interface';
import { NotificationsService } from '../services/notifications.service';
import { ClientService } from '../services/client.service';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ClientEditDialogComponent } from './Client-Edit-Modal/client-edit-modal';

export interface DialogData {
  clientID: string
}


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
})
export class TableListComponent implements OnInit {
  public clients: Client[];
  name: string;

  constructor(public dialog: MatDialog,
    private clientService: ClientService) {}

  ngOnInit() {
    this.clientService.findAll().subscribe((data) => {
      this.clients = data;
    });
  }

  openDialog(clientID): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '550px',
      data: { clientID: clientID },
    });

    dialogRef.afterClosed().subscribe((result) => {
    });
  }

  openEditDialogBox(client: Client): void {
    const dialogRef = this.dialog.open(ClientEditDialogComponent, {
      width: '550px',
      data: client
    })
  }
}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
})

export class DialogOverviewExampleDialogComponent  {
  public clientID: string;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData,
    private router: Router,
    private clientService: ClientService,
    private notifications: NotificationsService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onDelete() {
    this.clientService.delete(this.dialogData.clientID).subscribe(data => {
     this.notifications.showNotification(
       'top',
       'right',
       'Client account successfully deleted'
     );
     this.dialogRef.close(); // close dialog
     this.router.navigate(['/dashboard']);
    });
  }
}
