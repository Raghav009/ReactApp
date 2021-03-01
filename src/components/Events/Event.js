import PropTypes from 'prop-types'
import React, { useState } from 'react'

const Event = () => {
    const [name, setName] = useState('');
    const [label, setLabel] = useState('Comp2');
    const Click = (e) => {
        setName(e ? e : "Click Comp1")
        console.log('Event Comp Called')
    }

    const Display = () => {
        console.log('Display is called')
        setLabel('Display')
    }

    return (
        <div>
            Event Component
            <div className="row">
                <Comp1 name={name} click={Click} />

                <Comp1 click={Click} />

                <Comp1 name={label} toggle={Display} />
            </div>
        </div>
    )
}

const Comp1 = ({ name, click, toggle }) => {

    return (
        <>
            {
                click ? <button onClick={() => click()}>{name}</button> : null
            }

            {
                toggle ? <Comp2 text={name} display={toggle} /> : null
            }

        </>
    )
}

const Comp2 = ({ text, display }) => {

    return (
        <>
            <button onClick={() => display()}>{text ? text : Comp2.defaultProps.text}</button>
        </>
    )

}

Comp1.propTypes = {
    name: PropTypes.string,
    click: PropTypes.func,
    toggle: PropTypes.func
}

Comp1.defaultProps = {
    name: 'Comp1'
}

Comp1.propTypes = {
    text: PropTypes.string,
    display: PropTypes.func
}

Comp2.defaultProps = {
    text: 'Comp2'
}

export default Event;