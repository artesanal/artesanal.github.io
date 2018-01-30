import { Component, OnInit, Input } from '@angular/core';
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {DataService} from "../../services/data.service";


@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css']
})

export class ContratosComponent implements OnInit {


  name: String;
  rg: Number;
  cpf: Number;
  tel: Number;
  dEvento: String;
  email: String;



  tipo: String;
  espaco: String;
  end: String;
  convidados: Number;
  duracao: Number;
  horaInicio: String;

  cerveja: String;
  agua: String;
  refrigerante: String;
  suco: String;
  entradas: String;
  gresal: String;
  fritos: String;
  comidinhas: String;
  sobremesa: String;
  ilha: String;

  tipoPagamento: String;
  valorP: Number;


  constructor(
    private dataService: DataService,
    private router: Router,
    private _flashMessages: FlashMessagesService,
  ) { }

  ngOnInit(){
    // Add simple text

  }

  onRegisterSubmit() {
    const contrato ={
      name: this.name,
      rg: this.rg,
      cpf: this.cpf,
      tel: this.tel,
      dEvento: this.dEvento,
      email: this.email
    }
      /*
      tipo: this.tipo,
      espaco: this.espaco,
      end: this.end,
      convidados: this.convidados,
      duracao: this.duracao,
      horaInicio: this.horaInicio,

      cerveja: this.cerveja,
      agua: this.agua,
      refrigerante: this.refrigerante,
      suco: this.suco,
      entradas: this.entradas,
      gresal: this.gresal,
      fritos: this.fritos,
      comidinhas: this.comidinhas,
      sobremesa: this.sobremesa,
      ilha: this.ilha,

      tipoPagamento: this.tipoPagamento,
      valorP: this.valorP
      */


    this.dataService.registerContrato(contrato).subscribe(data => {
      if(data.success){
        //message
        this._flashMessages.show('Registration Completed Successfully', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/eventos']);
      } else {
        this._flashMessages.show('Failed to Register', {cssClass: 'alert-danger', timeout: 3000});
      }
    });
  }

}
