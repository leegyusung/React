import React from 'react';
import WithRouterSample from './WithRouterSample';


const data = {
    veloport: {
        name: '김민준',
        nick: '123'
    },
    react: {
        name: '홍길동',
        nick: '123'
    }
}

const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = data[username];
    if (!profile) {
        return <div>존재하지 않는 사용잡입니다.</div>
    }

    return (
        <div>
            <h3>{username}({profile.name})</h3>
            <p>{profile.nick}</p>
            <WithRouterSample></WithRouterSample>
        </div>
    );
};

export default Profile;