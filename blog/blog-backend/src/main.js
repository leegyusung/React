require('dotenv').config();
import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import mongoose from 'mongoose'
import createFakeData from './createFakeData';

import api from './api'

const { PORT, MONGO_URI } = process.env;


mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
    .then(() => {
        console.log("Connected to MongoDB");
        createFakeData();
    })
    .catch(e => {
        console.log(e)
    })

const app = new Koa();
const router = new Router();

app.use(bodyParser())

// 라우터 설정
router.use('/api', api.routes()); // api 라우트 적용

//app인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => {
    console.log(`${port} 포트 사용중...`)
})