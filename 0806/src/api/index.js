const Router = require('koa-router');
const post = require('./posts');


const api = new Router();


api.post('/', post.write);
api.get('/', post.list);
api.delete('/:id', post.remove);

module.exports = api;