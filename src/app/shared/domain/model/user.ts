/*
 * @Author: Supun Dharmarathne 
 * @Date: 2017-04-04 15:29:39 
 * @Last Modified by: Supun Dharmarathne
 * @Last Modified time: 2017-04-04 15:35:47
 */
export class User {
    constructor(
        public userName: string,
        public role: string,
        public firstName: string,
        public lastName:string,
        public email:string,
        public lockStatus:string
    ){    }

    static fromJson({userName,role,firstName,lastName,email, lockStatus}):User{
        return new User(
            userName,
            role,
            firstName,
            lastName,
            email,
            lockStatus
        );
    }

    static fromJsonArray(json:any[]):User[]{
        return json.map(User.fromJson);
    }
}
