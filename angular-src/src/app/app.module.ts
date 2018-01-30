import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";


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
import {ValidateService} from "./services/validate.service";
import {DataService} from "./services/data.service";

import {AuthGuard} from "./guards/auth.guard";
import {FlashMessagesModule} from 'angular2-flash-messages';
import {LoggedInGuard} from "./guards/logged-in.guard";
import { AppRoutingModule } from './app-routing.module';
import { EventosContratosDatalhesComponent } from './components/eventos-contratos-datalhes/eventos-contratos-datalhes.component';





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
    EventosComponent,
    EventosContratosDatalhesComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [ValidateService, AuthService, AuthGuard, LoggedInGuard, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
