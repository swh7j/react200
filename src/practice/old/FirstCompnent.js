import React, {Component} from 'react';

class MyComponent extends Component {
    render() {
        const text = '리액트 const로 받은 텍스트';
        const condition = true;
        const style = {
            backgroundColor: 'gray',
            border: '1px solid black',
            height: '250px',
            width: '300px'
        };
        return (
            <div className="container">
                {/*요소 안에서의 주석*/}
                <div className="row">
                    <div className="col-md-12 ">
                        <br/>
                        <h3 className="text-center">하이하이</h3>
                        <input type="text" className="form-control"/>
                        <h5>{text}</h5>
                        {
                            condition ? '참' : '거짓'
                        }
                        <div
                                style={style}
                            //요소안에 주석
                        />
                    </div>
                </div>
            </div>
        )
    }
}