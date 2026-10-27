function Student(props) {
    console.log(props);

    return (
        <div>
            <div className="container">
                <h1>Name - {props.name}</h1>
                <h2>Age - {props.age}</h2>
                <h2>Marks - {props.mark}</h2>
            </div>

            {/* prop drilling  */}
            {/* <div>
                <ChildStudent  name={props.name} />
            </div> */}
        </div>
    )
}

export default Student;
