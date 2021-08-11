import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const posts = new Router();


posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write);
posts.get('/:id', postsCtrl.getPostById, postsCtrl.read);
posts.patch('/:id', postsCtrl.getPostById, postsCtrl.checkOwnPost, checkLoggedIn, postsCtrl.update);
posts.delete('/:id', postsCtrl.getPostById, postsCtrl.checkOwnPost, checkLoggedIn, postsCtrl.remove);

export default posts;