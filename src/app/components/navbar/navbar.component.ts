import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';



 interface MenuItem {
  label: string;
  route: string;
  showOnMobile: boolean;
  showOnTablet: boolean;
  showOnDesktop: boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faBars= faBars;
 
menuItems : MenuItem[]= [
   {
    label: 'Main Page',
     route: '',
     showOnMobile: false,
     showOnTablet: true,
     showOnDesktop: true
   },
   {
     label: 'Sign Up',
     route: 'signup',
     showOnMobile: false,
     showOnTablet: true,
     showOnDesktop: true
   },
  {
   label: 'Login',
   route: 'login',
     showOnMobile: false,
    showOnTablet: false,
     showOnDesktop: true
   },
   {
    label: 'Events',
    route: 'events',
    showOnMobile: false,
    showOnTablet: false,
    showOnDesktop: true
 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
