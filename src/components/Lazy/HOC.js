// https://reactjs.org/docs/higher-order-components.html
// https://scotch.io/courses/5-essential-react-concepts-to-know-before-learning-redux/higher-order-components-in-react

import React, { Component, useState } from 'react'

const simpleComponent = ({name, age , time}) => {
    return (
        <div>
            Hello {name} ! Age : {age.value} ! {time}
            <input type="text" value={age.value} onChange={age.onChange}/>
        </div>
        
    )
}

const simpleHOC = (WrappedComponent) => (props) => {

    const [age, setAge] = useState('');

    const Change = (e) => {
        setAge(e.target.value);
    }

    const changeProp = {
        age : {
            value: age,
            onChange : Change
        }
    }

    return (
        <WrappedComponent {...props} time="Sunday" {...changeProp}/>
    )
}

const NewComponent = simpleHOC(simpleComponent);

const DisplayHoc = () => {

    return (
        <div>
            <NewComponent name="newComponent" />
        </div>
    )
}

export default DisplayHoc;





