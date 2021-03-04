import React, { useState, useEffect } from "react";

const Question = () => {

    const [count, setCount] = useState('Init');

    const [obj, setObj] = useState({ name: 'Init' });

    const [arry, setArry] = useState([]);

    const [loading, setloading] = useState(true)
    // true = Loading... // False = i will not diplay

    const [initObj, setinitObj] = useState({ Title: "Krack" });

    const [intArr, setInitArr] = useState(['a', 'b']);

    const OnHandle = () => {
        setCount('Sample')

        setObj({ name: 'Update' });

        setArry(['a', 'b']);

        let ob = { ...initObj, time: "Now", Title: 'Krack Updated' }

        setinitObj(ob)
        // try to send a new Object
        let temp = ['c', 'd'];

        // setInit(...intarr,['d','e']) // ['a','b',['c','d']]

        let d = [...intArr, ...temp] // ['a','b','c','d']

        setInitArr(d);

    }

    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 2000)
    }, [])

    useEffect(() => {
        setInitArr([...intArr, 'e', 'F'])
        /// THis piece of code get executed when ever count gets modified  

        return () => {
            console.log("Clean up")
        }
    }, [count])

    const onNew = () => {
        setCount('From New ')
    }

    const display = () => {
        return (

            <div className="row">
                <button onClick={OnHandle}>{count}</button>

                <button onClick={onNew}>New</button>
                {obj.name}

                <div>
                    {arry[0]}, {arry[1]}
                </div>
                <div>
                    {
                        initObj.time ?? initObj.time
                    }
                    {initObj.Title}
                </div>
            </div>

        )
    }

    return (
        <div>
            Question Component {loading == false ? display() : 'Loading..'}

        </div>
    )
}

export default Question;