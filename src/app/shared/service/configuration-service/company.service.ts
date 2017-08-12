import { Company } from './../../domain/model/company';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CompanyService {
private companyUrl : string = 'http://apps.sharearchiver.com:8083/company';
  constructor(private http:Http) {

   }
getAllCompanies ():Observable<Company[]>{
      return this.http.get(this.companyUrl+'/getAll').map((response) => response.json() as Company[]);
  }
}
