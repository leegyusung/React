import React, { useEffect, useReducer, useState } from 'react';



const Info = () => {
    // const [name, setName] = useState('');
    // const [nickName, setNickName] = useState('');

    // useEffect(() => {
    // }, [name]) //특정값만 렌더링될떄 실행하고싶으면

    // const onchangeName = e => {
    //     setName(e.target.value)
    // }
    // const onchangeNickname = e => {
    //     setNickName(e.target.value)
    // }
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickName: ''
    });
    const { name, nickName } = state;
    // const onChange = e => {
    //     dispatch(e.target);
    // }

    return (
        <>
            <div>
                <div>
                    <input name="name" value={name} onChange={onChange}></input>
                    <input name="nickName" value={nickName} onChange={onChange}></input>
                </div>
            </div>
            <div>
                <b>이름 : {name}</b>
            </div>
            <div>
                <b>닉네임 : {nickName}</b>
            </div>
        </>
    );
};

export default Info;