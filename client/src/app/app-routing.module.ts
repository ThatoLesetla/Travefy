import { ContactComponent } from './Views/contact/contact.component';
import { LoginComponent } from './Components/login/login.component';
import { ServicesComponent } from './Views/services/services.component';
import { HomeComponent } from './Views/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent },
  {path: 'services', component: ServicesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
