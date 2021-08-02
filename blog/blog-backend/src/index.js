const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser')

const api = require('./api/posts')


const app = new Koa();
const router = new Router();

router.use('/api/posts', api.routes())

app.use(bodyParser())

//app인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
    console.log("4000번 포트 사용중...")
})