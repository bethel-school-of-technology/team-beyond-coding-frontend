import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';



import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddbikeComponent } from './components/profile/garage/addbike/addbike.component';
import { ViewbikeComponent } from './components/profile/garage/viewbike/viewbike.component';
import { HomeComponent } from './components/home/home.component';
import { UpdatebikeComponent } from './components/profile/garage/updatebike/updatebike.component';





@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AddbikeComponent,
    ViewbikeComponent,
    HomeComponent,
    UpdatebikeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
