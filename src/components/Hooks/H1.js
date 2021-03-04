
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

// Component 1  <- useContext.Provider props 

// Component 2 

// Componet 3 

// Componet 4  -> useContext.Consumer props we will see props