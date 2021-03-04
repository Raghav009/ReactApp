import React, { useState, useReducer } from "react";

const UseState = () => {
  const [Name, setName] = useState('Happy');

  const [Arr, setArr] = useState(['a', 'b', 'c', 'd'])

  const [Obj, setObj] = useState({
    cores: [
      {
        core: 1,
        processor: 'Intel',
        storage: 500
      },
      {
        core: 4,
        processor: 'AMD',
        storage: 500
      },
    ],
    Details: {
      Name: 'Falcon'
    }
  })

  const Click = () => {
    setName('Jolly');

    setArr(['d', 'e']);

    setTimeout(() => {
      let Data = [ // consider this as returned from service
        {
          core: 2,
          processor: 'Intel',
          storage: '1TB'
        },
        {
          core: 3,
          processor: 'Apple Silicon',
          storage: '2TB'
        }
      ]
      let newData = [...Obj.cores, ...Data]
      let modifiedName = { Name: 'Heavy' };
      let modifed = newData.map((e) => {
        if (e.core === 4) {
          e.storage = '1TB';
        }
        return e;
      }) // .filter(e => e.storage === 500)
      
      setObj({
        ...Obj,
        cores: modifed, // Extising values + new Data 
        Details: modifiedName
      })
    }, 1000);

    
  }

  const displayArr = () => {
    return Arr.map((e, i) => {
      return <div key={i}>{e}</div>
    })
  }

  const displayCores = () => {
    return Obj.cores.map((e, i) => {
      return <div key={i}>Core : {e.core} Processor: {e.processor} Storage : {e.storage}</div>
    })
  }

  return (
    <div>
      UseState Example

      <div>
        Simple Value : {Name}
      </div>
      <div>
        Display Array
        {displayArr()}
      </div>
      <div>
        {displayCores()}
        {Obj.Details.Name}
      </div>
      <div>
        <button onClick={Click}> Click </button>
      </div>
      <div> Using Reduce Hook <Counter /> </div>
    </div>
  )
}

const initialState = {count: 0};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [count, setCount ] = useState(0);

  const clickPlus = () => {
    dispatch({type: 'decrement'})
    setCount(count + 1);
  }
  return (
    <>
      Count: {state.count}
      <button onClick={clickPlus}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

export default UseState;