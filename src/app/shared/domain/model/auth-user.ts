export class AuthUser {

     constructor(
       public id: number,
       public token: string,
       public username: string,
        public rolename: string) {
       }

       
       static fromJson({id,token,username,rolename}) : AuthUser{
        return new AuthUser(
           id,token,username,rolename
        );

    }
}
