import express from 'express';
import {
    indexPage,
    messagesPage, addMessage,
    usersPage, addUser
} from '../controllers';
import { modifyMessage, modifyUser, performAsyncAction } from '../middleware';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/messages', messagesPage);
indexRouter.get('/users', usersPage);
indexRouter.post('/messages', modifyMessage, performAsyncAction, addMessage);
indexRouter.post('/user_create', modifyUser, performAsyncAction, addUser);

export default indexRouter;
