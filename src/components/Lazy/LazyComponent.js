import React, { Component, useState } from "react";

const LazyComponent = () => {

    const [count, setconst] = useState(0);
    return (
        <div>
            Lazy Component {count}
            <Sample />
        </div>
    )
}

export default LazyComponent;

class Sample extends Component {
    constructor(props) {
        super(props);
        this.state = { // default set
            visible: 'Test'
        }
    }

    changeX() {
        this.setState({ visible: 'Test2' });
    }

    event() {
        window.addEventListener('click', this.changeX)
    }

    render() {
        return (
            <div>
                {this.state.visible}
                <button onClick={() => this.changeX()}>Change</button>
                <AlertBox>
                    <h1>You have pending notifications</h1>
                    <button onClick={() => this.changeX()}>CLick</button>
                </AlertBox>
            </div>
        )
    }
}

class AlertBox extends Component {
    render() {
        return <div className='alert-box'>
            {this.props.children}
        </div>
    }
}
