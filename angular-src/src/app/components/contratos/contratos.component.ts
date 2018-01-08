import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {ValidateService} from "../../services/validate.service";

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css']
})
export class ContratosComponent implements OnInit {

  name: String;
  rg: Number;
  cpf: Number;
  tipo: String;
  espaco: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    private _flashMessages: FlashMessagesService,
    private validateService: ValidateService
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const contrato ={
      name: this.name,
      rg: this.rg,
      cpf: this.cpf,
      tipo: this.tipo,
      espaco: this.espaco
    }

    this.authService.registerContrato(contrato).subscribe(data => {
      if(data.success){
        //message
        this._flashMessages.show('Registration Completed Successfully', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/eventos']);
      } else {
        this._flashMessages.show('Failed to Register', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/contratos']);
      }
    });
  }

}
