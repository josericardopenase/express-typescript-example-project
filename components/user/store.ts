import UserModel from './model'

function addUser(user : any){
    const myUser = new UserModel(user);
    return myUser.save();
}

async function listUsers(){
    return UserModel.find({});
}


export default {
    add : addUser,
    list: listUsers

}

