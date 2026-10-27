function Button(props){
    // console.log(props);
    return <button onClick={()=>alert('Hi')}>{props.name}</button>
}

export default Button;