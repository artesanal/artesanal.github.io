import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  result:any;

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

}
