const Router = require('koa-router');

const posts = new Router();

let postId = 1;

const postss = [
    {
        id: 1,
        title: '제목',
        body: '내용',
    },
]

exports.write = ctx => {
    const { title, body } = ctx.request.body;
    postId += 1;
    const post = {
        id: postId,
        title,
        body
    }
    postss.push(post);
    ctx.body = postss;
}

exports.list = ctx => {
    ctx.body = postss;
}

exports.remove = ctx => {
    const { id } = ctx.params;
    const result = postss.findIndex(post => post.id.toString() === id);
    if (result === -1) {
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않습니다'
        }
        return;
    }
    postss.splice(result, 1);
    //ctx.status = 204;
    ctx.body = `${id} 번째 포스트가 삭제되었습니다.`;
}