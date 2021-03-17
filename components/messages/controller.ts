import store from './store'
import {Message} from './types';
import ws from '../../websockets'

function addMessage(user : string, message: string) : Promise<any> {

    return new Promise((resolve, reject) => {

        if(!user || !message){
            console.log('[Message controller] No hay usuario o mensaje')
            reject('Los datos son incorrectos');
            return false;
        } 

        const fullMessage : Message = {
            user    : user,
            message : message,
            date    : new Date()
        };

        store.addMessage(fullMessage)

        ws.socket.io.emit('message', fullMessage)

        resolve(fullMessage);

    })

}

function getMessages(filter : any) : Promise<any> {

    return new Promise((resolve, reject) => {


        const content = store.getMessages(filter);
        resolve(content);

    })

}

function modifyMessage(id : string, message: string) : Promise<any> {

    return new Promise((resolve, reject) => {

        try{
            const content = store.modifyMessage(id, message);
            resolve(content);
        }catch{
            reject('Invalid data');
        }


    })

}

function deleteMessage(id : string) : Promise<any> {

    return new Promise((resolve, reject) => {

        try{
            const content = store.deleteMessage(id);
            resolve(content);
        }catch{
            reject('Invalid data');
        }


    })

}

export {
    addMessage,
    getMessages,
    modifyMessage,
    deleteMessage
}