const Koa = require('koa');
const Router = require('koa-router');

const api = require('./api')

const app = new Koa();
const router = new Router();

router.get('/post/:name', ctx => {
    const { name } = ctx.params

    ctx.body = `${name}`;
})
router.get('/about', ctx => {
    const { name } = ctx.query;
    ctx.body = `${name}`;
})
router.use('/api', api.routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
    console.log('listening 4000')
})