import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPost, getUsers } from '../modules/sample';
import Sample from '../components/Sample';

const SampleContainer = ({ getPost, getUsers, post, users, loadingPost, loadingUsers }) => {
    useEffect(() => {
        getPost(2);
        getUsers();
    }, [getPost, getUsers]);

    return (
        <Sample post={post} users={users} loadingPost={loadingPost} loadingUsers={loadingUsers}></Sample>
    );
};

export default connect(
    ({ sample }) => ({
        post: sample.post,
        users: sample.users,
        loadingPost: sample.loading.GET_POST,
        loadingUsers: sample.loading.GET_USERS
    }),
    {
        getPost,
        getUsers
    }
)(SampleContainer);