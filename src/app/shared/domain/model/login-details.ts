export class LoginDetails {
     constructor(
       public password: number,
       public token: string,
       public username: string) {
       }

       
       static fromJson({password,token,username}) : LoginDetails{
        return new LoginDetails(
           password,token,username
        );

    }

}
