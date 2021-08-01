import React from 'react';

const Sample = ({ post, users, loadingPost, loadingUsers }) => {

    return (
        <div>
            <section>
                <h1>포스트</h1>
                {loadingPost && '로딩 중...'}
                {!loadingPost && post && (
                    <div>
                        <h2>{post.title}</h2>
                        <h3>{post.body}</h3>
                    </div>
                )}
            </section>
            <section>
                {loadingUsers && '로딩 중...'}
                {!loadingUsers && users && (
                    <ul>
                        {users.map(user => (
                            <li key={user.id}>{user.username} ({user.email})</li>
                        ))}
                    </ul>
                )}
            </section>
        </div >
    );
};

export default Sample;