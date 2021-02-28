import axios from 'axios';
import React, { useState, useEffect, Component, PureComponent, useRef } from 'react';

const UseEffectC = () => {
    const [count, setCount] = useState(0);
    const [response, setResponse] = useState([]);
    const [data, setData] = useState({});
    const inputEl = useRef(); // useRef hook !
    const commentURL = 'http://localhost:5000/posts';

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count])

    useEffect(() => {
        axios.get(commentURL + '/' + count).then(r => {
            console.log(r.data);
            setResponse(r.data)
        }).catch(e => console.error(e))
    }, [count])

    useEffect(() => {
        console.log("Response Success")
    },[response])

    useEffect(()=>{
        console.log('Data is saved');
    },[data])
    //  if you dont specify the empty array or inital value that is dependent 
    //  , when it has to trigger this event on any specific property otherwise
    //  it will keep on calling this method - very dangerous

    const Click = () => {
        setCount(count + 1)
        let inp = inputEl.current; // Used element Reference here
        inp.focus();
        console.log(inp.value)
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <input ref={inputEl} type="text" />
            <button onClick={Click}>
                Click me
            </button>
            {JSON.stringify(response)}
        </div>
    )
}

export default UseEffectC;


export class Example1 extends PureComponent { // Component - replace PureComponent with Component
    state = {
        name: 'Raghava'
    }

    componentDidMount() {
        setInterval(() => {
            // console.log('Interval Method') // uncommnet to see results
            this.setState({ name: 'Rajesh' })
        }, 1000);
    }

     /// shallow compare preValue == newValue -- Components

     /// preValue === newValue && preValue.name === newValue.name -- PureComponents

    Click = () => {
        this.setState({ name: 'Ram' });
    }

    render() {
        // console.log("Render Method");
        return (
            <div>
                {this.state.name}
                <button onClick={() => this.Click()}>Click</button>
            </div>
        )
    }
}