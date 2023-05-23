import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ChefLayoutComponent } from './layouts/chef-layout/chef-layout.component';
import { EmployeeLayoutComponent } from './layouts/employee-layout/employee-layout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { RhLayoutComponent } from './layouts/rh-layout/rh-layout.component';
import { DsLayoutComponent } from './layouts/ds-layout/ds-layout.component';

const routes: Routes = [
  {path:'admin',component:AdminLayoutComponent,
  children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'allemployees',loadChildren:()=>import('./views/admin/allemployees/allemployees.module').then(m=>m.AllemployeesModule)},
    {path:'addemployee',loadChildren:()=>import('./views/admin/addemployee/addemployee.module').then(m=>m.AddemployeeModule)},
    {path:'editemployee/:id',loadChildren:()=>import('./views/admin/editemployee/editemployee.module').then(m=>m.EditemployeeModule)},
  ]},

  {path:'',component:FrontLayoutComponent,
  children:[
    {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
    //{path:'home',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
    {path:'login',loadChildren:()=>import('./views/front/login/login.module').then(m=>m.LoginModule)},
  ]},

  {path:'employee',component:EmployeeLayoutComponent,
  children:[
    {path:'',loadChildren:()=>import('./views/employee/dash-employe/dash-employe.module').then(m=>m.DashEmployeModule)},
    {path:'creer-profil',loadChildren:()=>import('./views/employee/creer-profil/creer-profil.module').then(m=>m.CreerProfilModule)},
    {path:'voir-profil',loadChildren:()=>import('./views/employee/voir-profil/voir-profil.module').then(m=>m.VoirProfilModule)},
    {path:'offres-dispo',loadChildren:()=>import('./views/employee/offres-dispo/offres-dispo.module').then(m=>m.OffresDispoModule)},
    {path:'ajout-dem',loadChildren:()=>import('./views/employee/ajout-dem/ajout-dem.module').then(m=>m.AjoutDemModule)},
    {path:'ajout-dem-offre',loadChildren:()=>import('./views/employee/ajout-dem-offre/ajout-dem-offre.module').then(m=>m.AjoutDemOffreModule)},
    {path:'mes-dem',loadChildren:()=>import('./views/employee/mes-dem/mes-dem.module').then(m=>m.MesDemModule)},
    //{path:'notif',loadChildren:()=>import('./views/employee/notif/notif.module').then(m=>m.NotifModule)},
  ]},

  {path:'chef',component:ChefLayoutComponent,
  children:[
    {path:'',loadChildren:()=>import('./views/chef/dash-chef/dash-chef.module').then(m=>m.DashChefModule)},
    {path:'creer-profil-chef',loadChildren:()=>import('./views/chef/creer-profil-chef/creer-profil-chef.module').then(m=>m.CreerProfilChefModule)},
    {path:'voir-profil-chef',loadChildren:()=>import('./views/chef/voir-profil-chef/voir-profil-chef.module').then(m=>m.VoirProfilChefModule)},
    {path:'offres-dispo-chef',loadChildren:()=>import('./views/chef/offres-dispo-chef/offres-dispo-chef.module').then(m=>m.OffresDispoChefModule)},
    {path:'ajout-dem-chef',loadChildren:()=>import('./views/chef/ajout-dem-chef/ajout-dem-chef.module').then(m=>m.AjoutDemChefModule)},
    {path:'ajout-dem-offre-chef',loadChildren:()=>import('./views/chef/ajout-dem-offre-chef/ajout-dem-offre-chef.module').then(m=>m.AjoutDemOffreChefModule)},
    {path:'mes-dem-chef',loadChildren:()=>import('./views/chef/mes-dem-chef/mes-dem-chef.module').then(m=>m.MesDemChefModule)},
    {path:'Details-offre',loadChildren:()=>import('./views/chef/details-offre/details-offre.module').then(m=>m.DetailsOffreModule)},
    //{path:'notif-chef',loadChildren:()=>import('./views/chef/notif-chef/notif-chef.module').then(m=>m.NotifChefModule)},
    {path:'dem-trait-chef',loadChildren:()=>import('./views/chef/dem-trait-chef/dem-trait-chef.module').then(m=>m.DemTraitChefModule)},
    {path:'trait-chef/:employe_id/:demande_id',loadChildren:()=>import('./views/chef/trait-chef/trait-chef.module').then(m=>m.TraitChefModule)},

  ]},

  {path:'rh',component:RhLayoutComponent,
  children:[
    {path:'',loadChildren:()=>import('./views/rh/dash-rh/dash-rh.module').then(m=>m.DashRhModule)},
    {path:'offres',loadChildren:()=>import('./views/rh/offres/offres.module').then(m=>m.OffresModule)},
    {path:'editoffre/:id',loadChildren:()=>import('./views/rh/editoffre/editoffre.module').then(m=>m.EditoffreModule)},
    {path:'ajout-offre-rh',loadChildren:()=>import('./views/rh/ajout-offre-rh/ajout-offre-rh.module').then(m=>m.AjoutOffreRhModule)},
    {path:'dem-trait-rh',loadChildren:()=>import('./views/rh/dem-trait-rh/dem-trait-rh.module').then(m=>m.DemTraitRhModule)},
    {path:'trait-rh/:demande_id',loadChildren:()=>import('./views/rh/trait-rh/trait-rh.module').then(m=>m.TraitRhModule)},

  ]},

  {path:'ds',component:DsLayoutComponent,
  children:[
    {path:'',loadChildren:()=>import('./views/ds/dash-ds/dash-ds.module').then(m=>m.DashDsModule)},
    {path:'dem-trait-ds',loadChildren:()=>import('./views/ds/dem-trait-ds/dem-trait-ds.module').then(m=>m.DemTraitDsModule)},
    {path:'trait-ds/:demande_id',loadChildren:()=>import('./views/ds/trait-ds/trait-ds.module').then(m=>m.TraitDsModule)},

  ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
