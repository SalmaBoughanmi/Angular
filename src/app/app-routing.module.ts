import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ChefLayoutComponent } from './layouts/chef-layout/chef-layout.component';
import { EmployeeLayoutComponent } from './layouts/employee-layout/employee-layout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';

const routes: Routes = [
  {path:'admin',component:AdminLayoutComponent,
  children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'allemployees',loadChildren:()=>import('./views/admin/allemployees/allemployees.module').then(m=>m.AllemployeesModule)},
    {path:'addemployee',loadChildren:()=>import('./views/admin/addemployee/addemployee.module').then(m=>m.AddemployeeModule)},

  ]},

  {path:'front',component:FrontLayoutComponent,
  children:[
    {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
    {path:'home',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
    {path:'login',loadChildren:()=>import('./views/front/login/login.module').then(m=>m.LoginModule)},
  ]},

  {path:'employee',component:EmployeeLayoutComponent,
  children:[
    {path:'creer-profil',loadChildren:()=>import('./views/employee/creer-profil/creer-profil.module').then(m=>m.CreerProfilModule)},
    {path:'voir-profil',loadChildren:()=>import('./views/employee/voir-profil/voir-profil.module').then(m=>m.VoirProfilModule)},
    {path:'offres-dispo',loadChildren:()=>import('./views/employee/offres-dispo/offres-dispo.module').then(m=>m.OffresDispoModule)},
    {path:'ajout-dem',loadChildren:()=>import('./views/employee/ajout-dem/ajout-dem.module').then(m=>m.AjoutDemModule)},
    {path:'mes-dem',loadChildren:()=>import('./views/employee/mes-dem/mes-dem.module').then(m=>m.MesDemModule)},
    {path:'notif',loadChildren:()=>import('./views/employee/notif/notif.module').then(m=>m.NotifModule)},
  ]},

  {path:'chef',component:ChefLayoutComponent,
  children:[
    {path:'creer-profil-chef',loadChildren:()=>import('./views/chef/creer-profil-chef/creer-profil-chef.module').then(m=>m.CreerProfilChefModule)},
    {path:'voir-profil-chef',loadChildren:()=>import('./views/chef/voir-profil-chef/voir-profil-chef.module').then(m=>m.VoirProfilChefModule)},
    {path:'offres-dispo-chef',loadChildren:()=>import('./views/chef/offres-dispo-chef/offres-dispo-chef.module').then(m=>m.OffresDispoChefModule)},
    {path:'ajout-dem-chef',loadChildren:()=>import('./views/chef/ajout-dem-chef/ajout-dem-chef.module').then(m=>m.AjoutDemChefModule)},
    {path:'mes-dem-chef',loadChildren:()=>import('./views/chef/mes-dem-chef/mes-dem-chef.module').then(m=>m.MesDemChefModule)},
    {path:'notif-chef',loadChildren:()=>import('./views/chef/notif-chef/notif-chef.module').then(m=>m.NotifChefModule)},
    {path:'ajout-offre-chef',loadChildren:()=>import('./views/chef/ajout-offre-chef/ajout-offre-chef.module').then(m=>m.AjoutOffreChefModule)},
    {path:'dem-trait-chef',loadChildren:()=>import('./views/chef/dem-trait-chef/dem-trait-chef.module').then(m=>m.DemTraitChefModule)},
  ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
