/*
 * @Author: Supun Dharmarathne 
 * @Date: 2017-04-03 16:26:29 
 * @Last Modified by:   Supun Dharmarathne 
 * @Last Modified time: 2017-04-03 16:26:29 
 */
// domain class to handle job data
export class Job {

    constructor(
       public id: number,
       public jobName: string,
       public action: string,
       public agent: string,
       public policy: string,
       public status: string) {

  }
    static fromJson({id,jobName,action,agent,policy,status}) : Job{
        return new Job(
            id,
            jobName,
            action,
            agent,
            policy,
            status
        );

    }

    static fromJsonArray (json : any[]) :Job[]{
          return json.map(Job.fromJson);
    }
}
