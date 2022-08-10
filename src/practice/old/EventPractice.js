import React, {Component} from 'react';

class EventPractice extends Component {

    state = {
        message : '',
        username : '',
    }

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleClick() {
        alert(this.state.username + " : " + this.state.message);
        this.setState({
            message : "",
            username : ""
        })
    }

    handleKeyPress(event) {
        if(event.key === 'Enter'){
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h2> 이벤트 연습 </h2>

                <input
                        type="text"
                        placeholder="유저명"
                        name="username"
                        className="form-control"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                <input
                    type="text"
                    placeholder="아무거나 입력"
                    name="message"
                    className="form-control"
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button
                    type="button"
                    onClick={this.handleClick}>확인</button>
                </div>
        )
    }
}
export default EventPractice