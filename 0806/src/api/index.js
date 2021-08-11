import Router from 'koa-router'
import * as post from './posts'


const api = new Router();


api.post('/', post.write);
api.get('/', post.list);
api.get('/:id', post.read);
api.delete('/:id', post.remove);
api.patch('/:id', post.update)

export default api;