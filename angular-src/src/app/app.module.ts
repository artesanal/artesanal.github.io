import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule, Routes} from "@angular/router";


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContratosComponent } from './components/contratos/contratos.component';
import { CaixaComponent } from './components/caixa/caixa.component';
import { EventosComponent } from './components/eventos/eventos.component';


import {AuthService} from "./services/auth.service";
import {FlashMessagesModule} from 'angular2-flash-messages';


import {AuthGuard} from "./guards/auth.guard";
import {LoggedInGuard} from "./guards/logged-in.guard";
import {ValidateService} from "./services/validate.service";

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent, canActivate:[LoggedInGuard]},
  {path:'login', component: LoginComponent, canActivate:[LoggedInGuard]},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'caixa', component: CaixaComponent, canActivate:[AuthGuard]},
  {path:'contratos', component: ContratosComponent, canActivate:[AuthGuard]},
  {path:'eventos', component: EventosComponent, canActivate:[AuthGuard]},
  {path:'**', redirectTo:''}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    SidebarComponent,
    ContratosComponent,
    CaixaComponent,
    EventosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
  ],
  providers: [ValidateService, AuthService, AuthGuard, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
