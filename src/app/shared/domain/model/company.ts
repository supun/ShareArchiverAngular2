/*
 * @Author: Supun Dharmarathne 
 * @Date: 2017-04-03 16:26:22 
 * @Last Modified by: Supun Dharmarathne
 * @Last Modified time: 2017-04-03 21:37:31
 */
// domain class to handle company data
export class Company {

    constructor(
    public id:number,
    public companyName : string,
    public companyPreferedName:string,
    public companyTag: string,
    public companyUsername: string,
    public companyContactName : string,
    public companyPassword: string,
    public companyTelephone: string,
    public companyAddress:string,
    public companySupportContact: string,
    public companySupportEmail: string,
    public companyLicense: string,
    public loginPageLogo: string,
    public addressBarLogo:string,
    public addressBarLogoSearch:string,
    public repoName:string,
    public repoPath:string,
    public fileExplorer:string,
    public confirmPassword:string,
    public users:string,
    public globalKey:string,
    public backupInterval:number,
    public backupTime:string,
    public backupEmailList:string,
    public backupRollback:number,
    public uCompanyTag:string,
    public allowedStorageLimitGb:string,
    public localAgent:boolean) {

  }

  static fromJson({id,
     companyName,
     companyPreferedName,
     companyTag,
     companyUsername,
     companyContactName ,
     companyPassword,
     companyTelephone,
     companyAddress,
     companySupportContact,
     companySupportEmail,
     companyLicense,
     loginPageLogo,
     addressBarLogo,
     addressBarLogoSearch,
     repoName,
     repoPath,
     fileExplorer,
     confirmPassword,
     users,
     globalKey,
     backupInterval,
     backupTime,
     backupEmailList,
     backupRollback,
     uCompanyTag,
     allowedStorageLimitGb,
     localAgent}): Company {
    return new Company(
     id,
     companyName,
     companyPreferedName,
     companyTag,
     companyUsername,
     companyContactName ,
     companyPassword,
     companyTelephone,
     companyAddress,
     companySupportContact,
     companySupportEmail,
     companyLicense,
     loginPageLogo,
     addressBarLogo,
     addressBarLogoSearch,
     repoName,
     repoPath,
     fileExplorer,
     confirmPassword,
     users,
     globalKey,
     backupInterval,
     backupTime,
     backupEmailList,
     backupRollback,
     uCompanyTag,
     allowedStorageLimitGb,
     localAgent
    );
  }
  static fromJsonArray(json: any[]): Company[] {
    return json.map(Company.fromJson);
}
} 