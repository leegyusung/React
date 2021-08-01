const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', ctx => {
    ctx.body = 'Home'
})

router.get('/about/:name', ctx => {
    const { name } = ctx.params;
    ctx.body = name ? `${name} 입니다` : '입니다'
})

router.get('/posts', ctx => {
    const { id } = ctx.query;
    ctx.body = id ? `${id} 입니다` : '포스트가 없습니다'
})

//app인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
    console.log("4000번 포트 사용중...")
})