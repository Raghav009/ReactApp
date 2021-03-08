const Go = () => {

    const Add =() => {
        console.log('Add')
    }

    return (
        <div>
            Go Component
            <AddC Name="John" time="Youtube" className="row" test={Add}/>
        </div>
    )
}

const AddC = ({Name, time, className , test}) => {
    
    return (
        <div>
            Add Component {Name} {time} {className}
            <button onClick={(e) => test()}>Test</button>
        </div>
    )
}


export default Go;