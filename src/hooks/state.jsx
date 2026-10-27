// What is Hooks? 

import { useState } from "react"

// React Hooks are functions that allow you to use state and other 
// React features in functional components. Introduced in React 16.8, 
// Hooks provide a way to manage state, side effects, and other logic 
// without writing class components.


// State Hook

// function State() {
//     const [count,setCount] = useState(10);
//   return (
//     <div className="text-center">
//       <h1 className="text-5xl font-semibold my-5">State Hook in Functional Component</h1>  
//       <p>The useState hook lets you declare a state variable and update it directly inside a function component.</p>
//       <hr />
//         <p className="text-3xl text-blue-900">The Current State Value is : {count}</p>
//         <button onClick={()=> setCount(count + 10) }>Increment</button>
//         <button onClick={()=> setCount(count - 10) }>Decrement</button>
//       <hr />
//     </div>
//   )
// }

// export default State


function State() {
  const [name,setName] = useState('JS');
  console.log('Component Rendered');

  function handleState(){
    setName('React Js')
  }
  
  return (
    <>
      <h1>State Hook</h1>
      <h2>The Name is {name}</h2>
      <button onClick={handleState}>Change Name</button>
    </>
  )
}

export default State