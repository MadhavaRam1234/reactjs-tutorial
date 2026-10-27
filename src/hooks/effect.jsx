import { useEffect, useState } from "react"

function Effect() {
    const [count,setCount] = useState(100);
    const [name,setName] = useState('JS');

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/1`)
        .then((res)=>res.json())
        .then((result)=> console.log(result))
    },[name])
    console.log('Component Rendered');
  return (
    <>
        <h1>Effect Hook</h1>
        <h2>
            The Count Value is
            <span className="text-cyan-600 font-semibold">{count}</span>
        </h2>
        <button onClick={()=>setCount(count + 10)}>Update State</button>

        <hr />

        <h1>The Name is {name}</h1>
        <button onClick={()=>setName('React js')}>Change Name</button>
    </>
  )
}

export default Effect