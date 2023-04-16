import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ChefLayoutComponent } from './layouts/chef-layout/chef-layout.component';
import { EmployeeLayoutComponent } from './layouts/employee-layout/employee-layout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { RhLayoutComponent } from './layouts/rh-layout/rh-layout.component';

const routes: Routes = [
  {path:'admin',component:AdminLayoutComponent,
  children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'allemployees',loadChildren:()=>import('./views/admin/allemployees/allemployees.module').then(m=>m.AllemployeesModule)},
    {path:'addemployee',loadChildren:()=>import('./views/admin/addemployee/addemployee.module').then(m=>m.AddemployeeModule)},
    {path:'editemployee/:id',loadChildren:()=>import('./views/admin/editemployee/editemployee.module').then(m=>m.EditemployeeModule)},



  ]},

  {path:'front',component:FrontLayoutComponent,
  children:[
    {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
    //{path:'home',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
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

  {path:'rh',component:RhLayoutComponent,
  children:[
    {path:'creer-profil-rh',loadChildren:()=>import('./views/rh/creer-profil-rh/creer-profil-rh.module').then(m=>m.CreerProfilRhModule)},
    {path:'voir-profil-rh',loadChildren:()=>import('./views/rh/voir-profil-rh/voir-profil-rh.module').then(m=>m.VoirProfilRhModule)},
    {path:'offres-dispo-rh',loadChildren:()=>import('./views/rh/offres-dispo-rh/offres-dispo-rh.module').then(m=>m.OffresDispoRhModule)},
    {path:'ajout-dem-rh',loadChildren:()=>import('./views/rh/ajout-dem-rh/ajout-dem-rh.module').then(m=>m.AjoutDemRhModule)},
    {path:'mes-dem-rh',loadChildren:()=>import('./views/rh/mes-dem-rh/mes-dem-rh.module').then(m=>m.MesDemRhModule)},
    {path:'notif-rh',loadChildren:()=>import('./views/rh/notif-rh/notif-rh.module').then(m=>m.NotifRhModule)},
    {path:'ajout-offre-rh',loadChildren:()=>import('./views/rh/ajout-offre-rh/ajout-offre-rh.module').then(m=>m.AjoutOffreRhModule)},
    {path:'dem-trait-rh',loadChildren:()=>import('./views/rh/dem-trait-rh/dem-trait-rh.module').then(m=>m.DemTraitRhModule)},
  ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
