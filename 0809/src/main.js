require('dotenv').config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';


const { PORT, MONGO_URI } = process.env;

import api from './api';
import jwtMiddleware from './lib/jwtMiddleware';

const app = new Koa();
const router = new Router();


router.use('/api', api.routes());

app.use(bodyParser());
app.use(jwtMiddleware);
app.use(router.routes()).use(router.allowedMethods());

mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
    .then(() => {
        console.log('Conneted to MongoDB');
    })
    .catch((e) => {
        console.log(e);
    })

const port = PORT || 4000;
app.listen(port, () => {
    console.log(port + '포트를 이용중입니다.');
})