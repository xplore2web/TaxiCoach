import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from 'app/_components/homepage/homepage.component';
import {SignupComponent} from 'app/_components/signup/signup.component';
import {LoginComponent} from 'app/_components/login/login.component';
import {BookingComponent} from 'app/_components/booking/booking.component';
import {TicketsearchComponent} from 'app/_components/ticketsearch/ticketsearch.component';
import {DestinationComponent} from 'app/_components/destination/destination.component';
import {DriverinfoComponent} from 'app/_components/driverinfo/driverinfo.component';
import {ReportsComponent} from 'app/_components/reports/reports.component';
import {WhatWeDoComponent} from 'app/_components/what-we-do/what-we-do.component';
import {AboutComponent} from 'app/_components/about/about.component';
import {ContactComponent} from 'app/_components/contact/contact.component';
import {StaffComponent} from 'app/_components/staff/staff.component';
// Route config let's you map routes to components
const routes: Routes = [
    // map '/persons' to the people list component
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'booking',
        component: BookingComponent,
    },
    {
        path: 'ticketsearch',
        component: TicketsearchComponent,
    },
    {
        path: 'destination',
        component: DestinationComponent,
    },
    {
        path: 'driverinfo',
        component: DriverinfoComponent,
    },
    {
        path: 'reports',
        component: ReportsComponent,

    },
    {
        path: 'home',
        component: HomepageComponent,
    },
    {
        path: 'staff',
        component: StaffComponent,
    },
    {
        path: 'signup',
        component: SignupComponent,
    },
      {
        path: 'what-we-do',
        component: WhatWeDoComponent,
    },
       {
        path: 'about',
        component:AboutComponent ,
    },
         {
        path: 'contact',
        component: ContactComponent ,
    },
    // map '/' to '/persons' as our default route dashboard
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

export const routing = RouterModule.forRoot(routes);

