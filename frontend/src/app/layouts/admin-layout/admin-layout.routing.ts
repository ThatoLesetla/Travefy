import { LoginComponent } from '../../views/login/login.component';
import { TravelPackageComponent } from './../../views/travel-package/travel-package.component';
import { AdminManagerComponent } from './../../views/admin-manager/admin-manager.component';
import { HomeComponent } from './../../views/home/home.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'reservation',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'check',           component: HomeComponent},
    { path: 'manager',        component: AdminManagerComponent},
    { path: 'packages', component: TravelPackageComponent},
    { path: 'login', component: LoginComponent}
];
