import {Request, Response, Application, Router } from 'express';
import * as express from 'express';
import * as controller from './controller'

export const router : Router = express.Router();

/* router.get('/message', (req : Request, res : Response) => res.send('adios')); */


router.get('/', async (req : Request, res : Response) => {

    const filterMessages = req.query.user || null;
    const result = await controller.getMessages(filterMessages);
    res.send(result)

});

router.post('/', async (req : Request, res : Response) => {

    console.log(req.body)
    const result = await controller.addMessage(req.body.user, req.body.message)

    res.send(result)

});


router.patch('/:id', async (req : Request, res, Response) => {


    const updatedMessage = await controller.modifyMessage(req.params.id, req.body.message);
    res.send(updatedMessage);

})

router.delete('/:id', async (req : Request, res, Response) => {


    const content = await controller.deleteMessage(req.params.id);
    res.send(content);

});

