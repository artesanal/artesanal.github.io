import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { Location } from '@angular/common';
import { Contrato } from '../eventos/contrato';
import {DataService} from "../../services/data.service";
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-eventos-contratos-datalhes',
  templateUrl: './eventos-contratos-datalhes.component.html',
  styleUrls: ['./eventos-contratos-datalhes.component.css']
})
export class EventosContratosDatalhesComponent implements OnInit {

  @Input() contrato: Contrato;
  private sub: any;
  private det:any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

      let id = params['id'];

      this.dataService.getContrato(id).subscribe(det => this.det = det);

    });

  }


  goBack(): void {
    this.location.back();
  }

}
