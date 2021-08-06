const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const api = require('./api');

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());

//라우터 적용 전에 bodyParser 적용
app.use(bodyParser());  //API를 JSON형식으로 데이터를 넣으면 패싱 해주는 미들웨어

//app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
    console.log('4000번 포트 이용중');
})