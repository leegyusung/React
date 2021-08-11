import Post from '../../models/post';
import Joi from 'joi';

export const write = async ctx => {
    const schema = Joi.object().keys({
        title: Joi.string().required(),
        body: Joi.string().required(),
        tags: Joi.array()
            .items(Joi.string())
            .required(),
    });
    const result = schema.validate(ctx.request.body);
    if (result.error) {
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    const { title, body, tags } = ctx.request.body;
    const post = new Post({
        title,
        body,
        tags
    })
    try {
        await post.save();
        ctx.body = post;
    } catch (error) {
        ctx.throw(500, error);
    }
}

export const list = async ctx => {
    try {
        const result = await Post.find().exec();
        ctx.body = result;
    } catch (error) {
        ctx.throw(500, error);
    }
}
export const read = async ctx => {
    const { id } = ctx.params;
    try {
        const result = await Post.findById(id).exec();
        ctx.body = result;
    } catch (error) {
        ctx.throw(500, error);
    }

}

export const remove = async ctx => {
    const { id } = ctx.params;
    try {
        const result = await Post.findByIdAndRemove(id).exec();
        ctx.status = 204;
    } catch (error) {
        ctx.throw(500, error);
    }

}

export const update = async ctx => {
    const { id } = ctx.params;
    try {
        const result = await Post.findByIdAndUpdate(id, ctx.request.body, {
            new: true,
        }).exec();
        ctx.body = result
    } catch (error) {
        ctx.throw(500, error);
    }
}