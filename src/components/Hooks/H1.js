
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