import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from "@angular/material/dialog";

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DialogEditClientComponent } from './modals/dialog-edit-client/dialog-edit-client.component';
import { HotelsComponent } from './views/hotels/hotels.component';
import { PackageEditModalComponent } from './views/travel-package/package-edit-modal/package-edit-modal.component';
import { LoginModalComponent } from './views/login/login-modal/login-modal.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    MatDialogModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    DialogEditClientComponent,
    HotelsComponent,
    PackageEditModalComponent,
    LoginModalComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
