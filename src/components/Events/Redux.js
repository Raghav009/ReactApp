import React, { useState } from 'react'


const RexComp = () => {
    return (
        <div>
            Redux Comp
        </div>
    )
}


































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
