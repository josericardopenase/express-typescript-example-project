import {Schema, model, } from 'mongoose';

const messageSchema : Schema = new Schema({
    user : {
        type : Schema.Types.ObjectId,
        ref : 'User', 
    },
    message : {
        type: String,
        required : true
    },
    date : Date
})

export default model('Message', messageSchema)