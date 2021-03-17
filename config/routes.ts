
import {Application} from 'express';
import * as messages from '../components/messages/routes';
import * as user from '../components/user/routes';

const routes = (app : Application ) : void => {

    app.use('/messages' , messages.router);
    app.use('/user',user.router);

}

export default routes;






