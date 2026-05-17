export class User{
    static service=[];
    constructor(tz,name,type,istook){
        this.tz=tz
        this.name=name
        this.type=type
        this.istook=false

    }
}
export class Users_service {
    returnUser(tz){
        return User.service.find(user=>user.tz===tz)
    }
    print(){
        if(User.service.length===0)
             console.log("users is empty")
        else{
             User.service.forEach(user=>{
                    console.log(`tz: ${user.tz}
                                 name: ${user.name}
                                `)
                })
            }
    };
    addUser( tz,name,type){
       const u=new User( tz,name,type);
       User.service.push(u);
    }
    deleteUser(tz){
       User.service=User.service.filter(user=>user.tz!==tz);
    }
}
