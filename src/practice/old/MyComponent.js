import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {

    static defaultProps = {
        name: '기본이름'
    }

    static propTypes = {
        name: PropTypes.string, // name props 타입을 문자열로 설정합니다.
        age : PropTypes.number.isRequired // 필수적으로 존재해야 하며, 숫자입니다.

    }

    state = {
        number :0
    }

    render() {
        return (
            <div>
                <p> 안녕하세요, 제 이름은 {this.props.name}</p>
                <p> 나이는 {this.props.age} 살 입니다.</p>
                <p> 숫자 : {this.state.number}</p>
                <button type="button" onClick={() => {
                    this.setState({
                        number: this.state.number +1
                    })
                    }
                }>
                더하기 </button>
                <button type="button" onClick={() => {
                    this.setState({
                        number: this.state.number -1
                    })
                        if(this.state.number <= 0){
                            alert("0보다 작을수 없습니다.");
                            this.setState({
                                number: this.state.number = 0
                            })
                        }
                    }
                }>
                빼기 </button>
            </div>
        )
    }
}

MyComponent.defaultProps = {
    name: PropTypes.string
}

export default MyComponent;