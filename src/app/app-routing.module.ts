import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {UserCreateComponent} from "./user-create/user-create.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";


const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path: 'contact', component: ContactComponent},
  {path: 'user.create', component: UserCreateComponent},
  {path: 'user/:id', component: UserDetailComponent},
{path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
