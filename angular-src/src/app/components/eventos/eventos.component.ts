///<reference path="../../../../node_modules/rxjs/Observable.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

   bolas: Array<any>;
   name: String;
   rg: Number;
   cpf: Number;
   tipo: String;
   espaco: String;


   constructor(
     private authService: AuthService,
     private router: Router,
     private _flashMessages: FlashMessagesService
   ) { }

   ngOnInit() {
     let contratos = {
       name: this.name,
       rg: this.rg,
       cpf: this.cpf,
       tipo: this.tipo,
       espaco: this.espaco
     }
     this.authService.authenticateContrato(contratos).subscribe(data =>{
       if(data.success){
         this._flashMessages.show('You Have contracts', {cssClass: 'alert-success', timeout: 5000});
         this.authService.getContrato().subscribe(evento => {
             this.bolas = evento;
           },
           err => {
             console.log(err);
             return false;
           });
       } else {
         this._flashMessages.show('You suck', {cssClass: 'alert-danger', timeout: 5000});
       }
     })

   }
}

