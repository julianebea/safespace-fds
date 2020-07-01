import { Router } from 'express';
import UserController from './controller/UserController';
import UserPublic from './public/UserPublic';

const routes = new Router();

routes.post('/users', UserController.store);
routes.get('/users', UserPublic.index);

export default routes;
