import store from './store'

function addUser(name : string){

    if(!name){
        return Promise.reject('Invalid name');
    }

    const user = {
        name : name
    }

    return store.add(user);

}

async function listUsers(){
    return store.list();
}

export default {
    addUser : addUser,
    listUsers : listUsers
}