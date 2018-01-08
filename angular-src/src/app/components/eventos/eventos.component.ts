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

   contrato: any = [];


   constructor(
     private authService: AuthService,
     private router: Router,
     private _flashMessages: FlashMessagesService
   ) { }

   ngOnInit() {
     this.authService.getContrato().subscribe(eventos => {
         this.contrato = eventos;
         console.log(this.contrato);
       },
       err => {
         console.log(err);
        return false;
       });
   }
}

