import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddbikeComponent } from './components/profile/garage/addbike/addbike.component';
import { ViewbikeComponent } from './components/profile/garage/viewbike/viewbike.component';
import { HomeComponent } from './components/home/home.component';
import { UpdatebikeComponent } from './components/profile/garage/updatebike/updatebike.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs'
import {MatIconModule} from '@angular/material/icon'




@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AddbikeComponent,
    ViewbikeComponent,
    HomeComponent,
    UpdatebikeComponent,

    LoginComponent,

    NavbarComponent,
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
    MatToolbarModule,
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule
  

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
