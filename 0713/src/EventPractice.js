import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        message: '',
        username: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {
        alert(this.state.username + " : " + this.state.message)
        this.setState({
            username: '',
            message: ''
        })
    }
    handleKey = e => {
        if (e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    placeholder="이름"
                    onChange={this.handleChange}
                ></input>
                <input
                    type="text"
                    name="message"
                    value={this.state.message}
                    placeholder="메시지"
                    onChange={this.handleChange}
                    onKeyPress={this.handleKey}
                ></input>
            </div>
        );
    }
}

export default EventPractice;