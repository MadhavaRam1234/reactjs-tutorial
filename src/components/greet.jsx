import React from 'react';

class Greet extends React.Component{
    constructor(){
        super();
        this.state = { name:'JavaScript',count:10, }
    }
    render(){
        console.log('Component Rendered...');
        
        return(
            <>
                <h1>Class Component</h1>
                <h2>State Value is {this.state.name}</h2>
                <button onClick={()=>this.setState({name:'React-Js'}) }>Change Name</button>

                <h2>Count Value is {this.state.count} </h2>
                <button onClick={()=> this.setState(({count})=>({count : count + 2}))}>Increment</button>
            </>
        )
    }
}

export default Greet;