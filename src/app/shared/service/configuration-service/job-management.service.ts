import { Job } from './../../domain/model/job';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { environment } from "environments/environment";
@Injectable()
export class JobManagementService {
 private jobUrl : string = environment.API+'job/job/jobs';
 
  constructor(private http:Http,) { }

  getAllJobs ():Observable<Job[]>{
      return this.http.get(this.jobUrl).map((response) => response.json() as Job[]);
  }

  getAllJobsByCompany(companyId:string) :Observable<Job[]>{
    return this.http.get(this.jobUrl+'/company/'+companyId).map((response) => response.json() as Job[]);
  }

  getJobById(jobId:string):Observable<Job>{
    return this.http.get(this.jobUrl+'/'+jobId).map((response) => response.json() as Job);
  }

   getAgentsByCompanyIdAndType(companyId:string,name:string):Observable<Job>{
    return this.http.get(this.jobUrl+'/'+companyId+'/name/+'+name).map((response) => response.json() as Job);
  }

  createJob(job:Job):Observable<Job> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

   return this.http.post(this.jobUrl, JSON.stringify(job), options).map((response) => response.json() as Job);
 
  }

  updateJob(job:Job):Observable<Job> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

   return this.http.put(this.jobUrl, JSON.stringify(job), options).map((response) => response.json() as Job);
 
  }

  deleteJob(id:number):Observable<string> {
   return this.http.delete(this.jobUrl+'/'+id).map((response) => response.json() as string);
 
  }
}
