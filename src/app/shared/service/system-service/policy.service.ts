import { Policy } from './../../domain/model/policy';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { environment } from "environments/environment";
@Injectable()
export class PolicyService {

 private policyUrl : string = environment.API+'policies';

  constructor(private http:Http) { }

 getAll ():Observable<Policy[]>{
      return this.http.get(this.policyUrl).map((response) => response.json() as Policy[]);
  }

  getPolicyById(policyId:string) :Observable<Policy>{
    return this.http.get(this.policyUrl+'/'+policyId).map((response) => response.json() as Policy);
  }

  getCompanyFilestoreByCompany(commpanyId:string,type:string):Observable<Policy[]>{
    return this.http.get(this.policyUrl+'/'+commpanyId+'/type/'+type).map((response) => response.json() as Policy[]);
  }

   getCompanyFilestoreByCompanyName(commpanyId:string,name:string):Observable<Policy[]>{
    return this.http.get(this.policyUrl+'/'+commpanyId+'/name/'+name).map((response) => response.json() as Policy[]);
  }

  createPolicy(policy:Policy):Observable<Policy> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

   return this.http.post(this.policyUrl, JSON.stringify(policy), options).map((response) => response.json() as Policy);
 
  }

  updatePolicy(policy:Policy):Observable<Policy> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

   return this.http.put(this.policyUrl, JSON.stringify(policy), options).map((response) => response.json() as Policy);
 
  }

  deletePolicy(id:number):Observable<string> {
   return this.http.delete(this.policyUrl+'/'+id).map((response) => response.json() as string);
 
  }
}
