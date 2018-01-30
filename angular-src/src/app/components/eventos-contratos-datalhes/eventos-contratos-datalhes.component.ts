import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { Location } from '@angular/common';
import { Contrato } from '../eventos/contrato';
import {DataService} from "../../services/data.service";
import 'rxjs/add/operator/switchMap';
import * as jsPDF from 'jspdf';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
import {StringIterator} from "lodash";
pdfMake.vfs = pdfFonts.pdfMake.vfs;




@Component({
  selector: 'app-eventos-contratos-datalhes',
  templateUrl: './eventos-contratos-datalhes.component.html',
  styleUrls: ['./eventos-contratos-datalhes.component.css']
})
export class EventosContratosDatalhesComponent implements OnInit {

  btnTextShow: String = 'Mostrar Contrato';
  btnTextHide: String = 'Esconder Contrato';

  btnText: String = this.btnTextShow;



  @Input() contratos: Contrato[];
  private sub: any;
  private det:any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location
  ) { }

  public downloadPDF(){
    let prep = document.getElementById("contrato").textContent;
    var docDefinition = { content:
        [
          {
            text: prep,
            style: 'header'

          }

        ],
      styles:
        {
          header: {
            fontSize: 12,
            bold: false
          }
        }
    };
    pdfMake.createPdf(docDefinition).open();
  }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.dataService.getContrato(id)
      .map((data: any) => data.json())
      .subscribe(
        (data: any) => {
          this.contratos = data;
        });

  }


  goBack(): void {
    this.location.back();
  }

  toggle(): void{
    if(this.btnText === this.btnTextShow){
      this.btnText = this.btnTextHide
    }else{
      this.btnText = this.btnTextShow
    }
  }

}
