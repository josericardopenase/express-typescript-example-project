
import {Request, Response, Application, Router } from 'express';
import * as express from 'express';
import controller from './controller'

export const router : Router = express.Router();

router.post('/', (req : Request, res : Response) => {
    controller.addUser(req.body.name)

    .then(data => {
       res.send(req.body);
    }).catch(err => {
        res.send({
            "error" : "error adding auser"
        })
    })


});

router.get('/', (req : Request, res : Response) => {
    controller.listUsers()
    .then(data => {
       res.send(data);
    }).catch(err => {
        res.send({
            "error" : "error adding auser"
        })
    })
});