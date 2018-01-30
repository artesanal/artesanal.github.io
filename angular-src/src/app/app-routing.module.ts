import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from "@angular/router";

import {RegisterComponent} from "./components/register/register.component";
import {CaixaComponent} from "./components/caixa/caixa.component";
import {ContratosComponent} from "./components/contratos/contratos.component";
import {LoginComponent} from "./components/login/login.component";
import {EventosComponent} from "./components/eventos/eventos.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {HomeComponent} from "./components/home/home.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

import {AuthGuard} from "./guards/auth.guard";
import {LoggedInGuard} from "./guards/logged-in.guard";

import {EventosContratosDatalhesComponent} from "./components/eventos-contratos-datalhes/eventos-contratos-datalhes.component";

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent, canActivate:[LoggedInGuard]},
  {path:'login', component: LoginComponent, canActivate:[LoggedInGuard]},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'caixa', component: CaixaComponent, canActivate:[AuthGuard]},
  {path:'contratos', component: ContratosComponent, canActivate:[AuthGuard]},
  {path:'eventos', component: EventosComponent, canActivate:[AuthGuard]},
  {path:'', redirectTo:'/contratos', pathMatch: 'full'},
  { path: 'detail/:id', component: EventosContratosDatalhesComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
