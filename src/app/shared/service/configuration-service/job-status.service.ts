import { JobStatus } from './../../domain/model/job-status';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from "environments/environment";
@Injectable()
export class JobStatusService {
private jobStatusUrl : string = environment.API+'job/job/jobs';

  constructor(private http:Http) { }

 getAll ():Observable<JobStatus[]>{
      return this.http.get(this.jobStatusUrl).map((response) => response.json() as JobStatus[]);
  }

  getAllByJob(jobId:string) :Observable<JobStatus[]>{
    return this.http.get(this.jobStatusUrl+'/job/'+jobId).map((response) => response.json() as JobStatus[]);
  }

  getJobStatusById(id:string):Observable<JobStatus>{
    return this.http.get(this.jobStatusUrl+'/'+id).map((response) => response.json() as JobStatus);
  }

   getStatusByExecutionId(getStatusByExecutionId:string):Observable<JobStatus[]>{
    return this.http.get(this.jobStatusUrl+'/executionId/'+getStatusByExecutionId).map((response) => response.json() as JobStatus[]);
  }

  createJobStatus(jobStatus:JobStatus):Observable<JobStatus> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

   return this.http.post(this.jobStatusUrl, JSON.stringify(jobStatus), options).map((response) => response.json() as JobStatus);
 
  }

  updateJob(job:JobStatus):Observable<JobStatus> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

   return this.http.put(this.jobStatusUrl, JSON.stringify(job), options).map((response) => response.json() as JobStatus);
 
  }

  deleteJob(id:number):Observable<string> {
   return this.http.delete(this.jobStatusUrl+'/'+id).map((response) => response.json() as string);
 
  }
}
