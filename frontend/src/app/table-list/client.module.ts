import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TableListComponent } from './table-list.component';
import { ClientEditDialogComponent } from './Client-Edit-Modal/client-edit-modal';
import { BrowserModule } from '@angular/platform-browser'
import { MatFormFieldModule } from '@angular/material/form-field';
/* import { MatInputModule } from '@angular/material/input'; */

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule/* ,
        MatInputModule */
    ],
    declarations: [
        TableListComponent,
        ClientEditDialogComponent
        ],
    providers: []
})
export class ClientModule { }
