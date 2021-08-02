const Router = require('koa-router');
const api = new Router();



api.get('/', ctx => {
    ctx.body = 'api Page'
})

module.exports = api;