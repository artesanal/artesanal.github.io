///<reference path="../../../../node_modules/rxjs/Observable.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {DataService} from "../../services/data.service";
import * as jsPDF from 'jspdf';
import { Contrato } from './contrato';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  title = 'Contratos';
  contratos: Contrato[];


 /* downloadPDF(){
    const doc = new jsPDF();
    doc.text('some text here'+this.selectedContrato,  10, 10);
    doc.save('arroz.pdf');
  }*/

   constructor(
     private authService: AuthService,
     private router: Router,
     private _flashMessages: FlashMessagesService,
     private dataService: DataService
   ) {}

   ngOnInit() {
     this.getContratos();
   }
  getContratos():void{
    this.dataService.getContratos()
      .subscribe(contratos => this.contratos = contratos);
  }

}

