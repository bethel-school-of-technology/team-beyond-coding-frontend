import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs'
import { MatIconModule } from '@angular/material/icon'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GarageComponent } from './components/profile/garage/garage.component';
import { AddbikeComponent } from './components/profile/garage/addbike/addbike.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewbikeComponent } from './components/profile/garage/viewbike/viewbike.component';





@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    GarageComponent,
    AddbikeComponent,
    ViewbikeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
