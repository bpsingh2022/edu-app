import db from './edu-mongo';

const Users = [
{_id:1, user: "bobby", password: "test"}
];//end;

export default {
    users: async (root, args, {errorName}, info)=>{
                const users = await db.Users.find();
                console.log(`request users: ${users}`);
                console.log(`query end \n\n end`);
        return users;
}, //end;

};//end;