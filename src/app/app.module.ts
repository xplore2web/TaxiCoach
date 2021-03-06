import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SignupComponent } from './_components/signup/signup.component';
import { HeaderComponent } from './_components/header/header.component';
import { LoginComponent } from './_components/login/login.component';
import { AdminComponent } from './_components/admin/admin.component';
import { HomepageComponent } from './_components/homepage/homepage.component';
import {routing} from 'app/_routes/routes';
import {Http} from '@angular/http';
import {ApplicationSessionService} from 'app/_services/applicationsession/application-session.service';
import {LoginService} from 'app/_services/login-service/login.service';
import { DashboardHeaderComponent } from './_components/dashboard-header/dashboard-header.component';
import { BookingComponent } from './_components/booking/booking.component';
import { TicketsearchComponent } from './_components/ticketsearch/ticketsearch.component';
import { DestinationComponent } from './_components/destination/destination.component';
import { DriverinfoComponent } from './_components/driverinfo/driverinfo.component';
import { ReportsComponent } from './_components/reports/reports.component';
import { AboutComponent } from './_components/about/about.component';
import { ContactComponent } from './_components/contact/contact.component';
import { WhatWeDoComponent } from './_components/what-we-do/what-we-do.component';
import { StaffComponent } from './_components/staff/staff.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HeaderComponent,
    LoginComponent,
    AdminComponent,
    HomepageComponent,
    DashboardHeaderComponent,
    BookingComponent,
    TicketsearchComponent,
    DestinationComponent,
    DriverinfoComponent,
    ReportsComponent,
    AboutComponent,
    ContactComponent,
    WhatWeDoComponent,
    StaffComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [LoginService,ApplicationSessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
