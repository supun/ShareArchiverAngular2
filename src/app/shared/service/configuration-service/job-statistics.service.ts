import { JobStatistic } from './../../domain/model/job-statistic';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { environment } from "environments/environment";
@Injectable()
export class JobStatisticsService {

  private jobStatisticsUrl : string = environment.API+'jobStatistics';

  constructor(private http:Http) { }

 getAll ():Observable<JobStatistic[]>{
      return this.http.get(this.jobStatisticsUrl).map((response) => response.json() as JobStatistic[]);
  }

  getAllByJob(jobId:string) :Observable<JobStatistic[]>{
    return this.http.get(this.jobStatisticsUrl+'/job/'+jobId).map((response) => response.json() as JobStatistic[]);
  }

  getJobStatisticsById(id:string):Observable<JobStatistic>{
    return this.http.get(this.jobStatisticsUrl+'/'+id).map((response) => response.json() as JobStatistic);
  }

   getStatusByExecutionId(getStatusByExecutionId:string):Observable<JobStatistic[]>{
    return this.http.get(this.jobStatisticsUrl+'/executionId/'+getStatusByExecutionId).map((response) => response.json() as JobStatistic[]);
  }

  createJobStatus(jobStatistic:JobStatistic):Observable<JobStatistic> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

   return this.http.post(this.jobStatisticsUrl, JSON.stringify(jobStatistic), options).map((response) => response.json() as JobStatistic);
 
  }

  updateJob(jobStatistic:JobStatistic):Observable<JobStatistic> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

   return this.http.put(this.jobStatisticsUrl, JSON.stringify(jobStatistic), options).map((response) => response.json() as JobStatistic);
 
  }

  deleteJob(id:number):Observable<string> {
   return this.http.delete(this.jobStatisticsUrl+'/'+id).map((response) => response.json() as string);
 
  }

}
