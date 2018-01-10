///<reference path="../../../../node_modules/rxjs/Observable.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

   contratos: Array<any>;


   constructor(
     private authService: AuthService,
     private router: Router,
     private _flashMessages: FlashMessagesService,
     private dataService: DataService
   ) {
     this.dataService.getContratos()
       .subscribe(res => this.contratos = res);
   }

   ngOnInit() {

   }
}

