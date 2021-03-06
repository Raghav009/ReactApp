import React, { useReducer } from 'react'
import RexComp from './Redux';
import Learning from '../learning/L1'
import {useParams} from 'react-router-dom';

const Event2 = () => {
    const { js } = useParams();
    const Reduce = () => {
        let list = [1, 2, 3, 4, 5];

        console.log(list.reduce(reducer, 5))

        dispatch({
            type: 'Delete'
        })

        dispatch({
            type: 'Update',
            value: 'Ram' // payload
        })


        dispatch();

        // dispatch({
        //     type: 'Update',
        //     value: 'Shayam' // payload
        // })
    }

    const reducer = (accumulator, currentValue) => {
        return accumulator + currentValue;
    }

    const [Name, dispatch] = useReducer(reducerX, init)


    return (
        <div>
            {Name.value} - Js : {js}
            Events 2 Component <span><button onClick={Reduce}>Click</button></span>
            <RexComp />
            <Learning />
        </div>
    )
}


const init = {
    value: 'Raghava'
}

const reducerX = (state = init, action) => {
    switch (action?.type) {
        case 'Delete':
            return { value : '' }
        case 'Update':
            return { value: action.value }
        default:
            return state;
    }
}

export default Event2;
