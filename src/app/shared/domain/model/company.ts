// domain class to handle company data
export class Company {

    constructor(
    public name: string,
    public preferredName: string,
    public companyTag: string,
    public adminName:string,
    public globalKey:string) {

  }

  static fromJson({name,preferredName,companyTag,adminName,globalKey}): Company {
    return new Company(
      name,
      preferredName,
      companyTag,
      adminName,
      globalKey
    );
  }
  static fromJsonArray(json: any[]): Company[] {
    return json.map(Company.fromJson);
}
} 