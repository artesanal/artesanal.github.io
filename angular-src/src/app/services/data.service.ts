import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {Contrato} from "../components/eventos/contrato";
import {tap} from "rxjs/operators";


@Injectable()
export class DataService {
  result:any;

  private contratoUrl = 'http://localhost:3000/api/contratos/';

  constructor(private http: Http) { }

 /* getContratos(){
    return this.http.get("http://localhost:3000/api/contratos")
      .map(result => this.result = result.json().data);
  }*/  /*
  getContrato(id){
    console.log(id);
    return this.getContratos()
      .map(result => this.result.filter(result => result._id == id)[0]);

  }*/
  registerContrato(contrato){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/register/contrato', contrato, {headers:headers})
      .map(res => res.json());
  }

  getContrato(id) {
    const url = `${this.contratoUrl}${id}`;
    return this.http.get(url);
  }

  getContratos() {
    return this.http.get(this.contratoUrl)
      .map(res => <Contrato[]>res.json().data);
  }

}
