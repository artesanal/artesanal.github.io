import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {Contrato} from "../components/eventos/contrato";


@Injectable()
export class DataService {

  result:any;

  private heroesUrl = 'http://localhost:3000/api/contratos/';

  constructor(private http: Http) { }

  getContratos(){
    return this.http.get("http://localhost:3000/api/contratos")
      .map(result => this.result = result.json().data);
  }
  registerContrato(contrato){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/register/contrato', contrato, {headers:headers})
      .map(res => res.json());
  }
  getContrato(_id:number): Observable<Contrato>{
    return this.http.get('http://localhost:3000/api/contratos/'+_id)
      .map(res => res.json());



    //find(hero => hero.id === id));
  }
}
