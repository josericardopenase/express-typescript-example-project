import MessageModel from './model'
import {Message} from './types';


function addMessage(message : Message){
    const myMessage = new MessageModel(message);
    myMessage.save();
}

async function getMessages(filter : any){
    let searchFilter = {};
    if(filter !== null){
        //filtro con mongo db
        searchFilter = {user : filter};
    }
    const messages = await MessageModel.find(searchFilter);
    return messages;
}

async function modifyMessage(id : string, text : string){
    const message : any = await MessageModel.findById(id);
    console.log(message)
    if(message){
        message.message = text;
        message.save()
    }

    return message;

}

async function deleteMessage(id : string){
    try{
        await MessageModel.findByIdAndDelete(id);
        return "Successfull deleted message";
    }catch{
        return "Error deleted message";
    }

}

export default{
    addMessage,
    getMessages,
    modifyMessage,
    deleteMessage
}