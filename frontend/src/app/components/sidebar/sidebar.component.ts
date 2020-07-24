import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/manager', title: 'Travel Manager', icon: 'library_books', class: ''},
    { path: '/reservation', title: 'Make Reservation',  icon: 'person', class: '' },
    { path: '/packages', title: 'Packages', icon: 'receipt', class: '' },
    { path: '/table-list', title: 'Bookings', icon: 'content_paste', class: '' },
    { path: '/maps', title: 'Destinations', icon: 'location_on', class: '' },
    { path: '/typography', title: 'Flights', icon: 'library_books', class: '' },
    { path: '/notifications', title: 'Notifications', icon: 'notifications', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
