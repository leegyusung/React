require('dotenv').config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';

const { PORT, MONGO_URI } = process.env;

mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
    .then(() => {
        console.log('몽고디비 연결')
    })
    .catch(e => {
        console.error(e)
    })

import api from './api';

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());

//라우터 적용 전에 bodyParser 적용
app.use(bodyParser());  //API를 JSON형식으로 데이터를 넣으면 패싱 해주는 미들웨어

//app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());


const port = PORT || 4000;
app.listen(port, () => {
    console.log('4000번 포트 이용중');
})