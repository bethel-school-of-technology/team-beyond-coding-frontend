import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GarageComponent } from './components/profile/garage/garage.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddbikeComponent } from './components/profile/garage/addbike/addbike.component';


const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {
        path: 'addbike',
        component: AddbikeComponent,
      },
    ],
  },
  {
    path: 'garage',
    component: GarageComponent,
    children: [
      {
        path: 'addbike',
        component: AddbikeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
