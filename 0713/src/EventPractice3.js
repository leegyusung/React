import React, { useState } from 'react';

const EventPractice3 = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });
    const { username, message } = form;
    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(nextForm);
    }
    const onClick = () => {
        alert(username + " : " + message)
        setForm({
            username: '',
            message: ''
        })
    }
    const onKeyPress = e => {
        if (e.key === "Enter") {
            onClick();
        }
    }

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                value={username}
                placeholder="이름"
                onChange={onChange}
            ></input>
            <input
                type="text"
                name="message"
                value={message}
                placeholder="메시지"
                onChange={onChange}
                onKeyPress={onKeyPress}
            ></input>
        </div>
    );
};

export default EventPractice3;