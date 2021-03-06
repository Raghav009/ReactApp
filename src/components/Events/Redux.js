import React, { useState } from 'react'
import { createStore, combineReducers } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

const RexComp = () => {
    return (
        <div>
            Redux Comp
        </div>
    )
}

/*

Mutable - changeable

const Person = { Name : 'John' , Age : 20 }

Person.City = 'Banglore';

// If we try to assign a new object it will throw error 

Person = { Name : 'Cena' , Age : 22 } --> Invalid Assignment

const List = [1,2,3,4,5]

List.push(6)

// Same way for Array when you assign new Array --> Invalid Assignment

List = [7,8,9]

Immutable - new object = make copies of existing objects/arrays, 
and then modify the copies

const Person_new = { ...Person, Name:'Cena', Age:22 }

const List_new = [ ...List, 7,8,9 ]

Redux :- expects that all state updates are done immutably

Store - {Object} Which store the Data in the React App and its {ReadOnly} - 
Any given piece of data should only exist in {one location}

const init = {
    name : ''
}

Action - something that happened in the application

{ type : 'Add', payload :{Data_any} }

Reducer - Simple Function which takes state and action Returns the [{new State}] - 
decides how to update the state if necessary

const reducer = (state = init, action) => {
    switch (action.type){
        case 'Add':            
            return { name:action.payload };
        default :
            return state;
    }
}

Dispatch - The only way to update the state is to call 
and pass in an action object

const dispatch = useDispatch();

how to call dispatch method --> dispatch({action:'Add', payload:'Sample'})

Selectors - extract specific pieces of information from a store

const name = useSelector(state => state.name);

{name} in JSX or name in component - use the latest state of that store property 

Create Store :
Example 1:
const store = createStore(reducer)  // Pass Reducer or combined Reducers

Example 2:
const combined = combineReducers({
    name:reducer,
    another_store:another_store_reducer
})

const store = createStore(combined)

JSX for root element 

<Provider store={store}>
    <Components /> { // Your Components that need to access }
</Provider>


*/
































// const RexComp = ({name}) =>{ // Main Component 

//     const [Test, setTest] = useState(name)

//     const Fun = (e) => {
//         setTest(e.target.value);       
//     }

//     const Click = (e) => {
//         console.log(e);
//     }

//     return (
//         <div>
//             Redux Comp 
//             <Comp1 name={Test} sample={Fun} hat={Click}/> 
//         </div>
//     )
// }

// const Comp1 = ({name , sample, hat }) => { // Child Component
//     return (
//         <div>            
//             {name}
//             <input onChange={(e) => sample(e)} />
//             <Comp2 name={hat} sample={name} /> 
//         </div>
//     )
// }

// const Comp2 = ({ name , sample }) => {

//     return (
//         <button onClick={() => name(sample)}>Click</button>
//     )
// }

export default RexComp;
