
import {Request, Response, Application, Router } from 'express';
import * as express from 'express';
import ws from './websockets'

const app : Application = express();
const server = require('http').Server(app);

ws.connect(server);





import routes from './config/routes';
import {connect} from './db';


connect();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

routes(app);

server.listen( 3000, function() {
    console.log("La aplicación esta escuchando en http: http://localhost:4000")
});







