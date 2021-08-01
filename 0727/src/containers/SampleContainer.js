import React, { useCallback, useEffect } from 'react';
import Sample from '../componets/Sample';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { getPost, getUser } from '../modules/sample';

const SampleContainer = ({ getPost, post }) => {
    //const post = useSelector(state => state.sample.post);
    const dispatch = useDispatch();
    useEffect(() => {
        getPost(2);
    }, [getPost])
    return (
        <Sample post={post}></Sample>
    );
};

export default connect(
    ({ sample }) => ({
        post: sample.post
    }),
    {
        getPost
    }
)(SampleContainer);