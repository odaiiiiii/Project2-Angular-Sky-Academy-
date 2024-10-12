import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { ProfilePageComponent } from './components/profile/profile-page/profile-page.component';
import { VacationPageComponent } from './components/Vacation/vacation-page/vacation-page.component';
import { NotFoundComponent } from './components/layout/not-found/not-found.component';

export const routes: Routes = [
    {path:"",redirectTo:"/home",pathMatch:"full"},
    {path:"home",component:HomePageComponent,title:"Home Page"},
    {path:"profile",component:ProfilePageComponent,title:"Profile Page"},
    {path:"Vacation",component:VacationPageComponent,title:"Vacation Page"},
    {path:"**",component:NotFoundComponent,title:"Not Found Page"}
];



