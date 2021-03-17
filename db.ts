
const db = require('mongoose');


const url : string = "Insert your database url";
db.Promise = global.Promise;

export async function connect(){

    await db.connect(url, {
        useNewUrlParser: true,
    });

    console.log('[db] connected succesfull')
}