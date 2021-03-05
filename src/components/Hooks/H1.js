import React , {useState} from 'react';

const P = () => {
    const name = 'Ram';

    return (
        <div>
            <CH name={name} />
        </div>
    )
}

const CH = ({ name }) => {
    return (
        <div>
            <GCH name={name} />
        </div>
    )
}

const GCH = ({ name }) => {
    return (
        <div>
            {name}
        </div>
    )
}

const inputHook = (init) =>{

    const [value, setValue] = useState(init);

    const change = (e) => {
        setValue(e.targe.value);
    }

    return [value, change];
}

// const [textinp, setTextinp] = inputHook('Init');

// <input type=text value=textinp onChange={(e) => setTextinp(e)} />

// Component 1  <- useContext.Provider props 

// Component 2 

// Componet 3 

// Componet 4  -> useContext.Consumer props we will see props