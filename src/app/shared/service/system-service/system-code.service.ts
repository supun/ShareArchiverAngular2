import { SystemCode } from './../../domain/model/system-code';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { environment } from "environments/environment";
@Injectable()
export class SystemCodeService {

private systemCodeUrl : string = environment.API+'systemcodes';
constructor(private http:Http) { }

getAll ():Observable<SystemCode[]>{
      return this.http.get(this.systemCodeUrl).map((response) => response.json() as SystemCode[]);
  }

  getSystemCodeById(systemCodeById:string) :Observable<SystemCode>{
    return this.http.get(this.systemCodeUrl+'/'+systemCodeById).map((response) => response.json() as SystemCode);
  }

  
  createSystemCode(systemCode:SystemCode):Observable<SystemCode> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

   return this.http.post(this.systemCodeUrl, JSON.stringify(systemCode), options).map((response) => response.json() as SystemCode);
 
  }

  updateSystemCode(systemCode:SystemCode):Observable<SystemCode> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

   return this.http.put(this.systemCodeUrl, JSON.stringify(systemCode), options).map((response) => response.json() as SystemCode);
 
  }

  deleteSystemCode(id:number):Observable<string> {
   return this.http.delete(this.systemCodeUrl+'/'+id).map((response) => response.json() as string);
 
  }
}
