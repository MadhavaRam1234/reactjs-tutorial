import { allStudents } from '../props/data';

function List() {
    console.log(allStudents);

    return (
        <>
            <h1>List and Keys</h1>
            <table>
                <thead>
                    <tr>
                        <th>S No</th>
                        <th>Student Name</th>
                        <th>Student Age</th>
                        <th>Student Mark</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allStudents.map((student) => {
                            return (
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.age}</td>
                                    <td>{student.mark}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </>
    )
}

export default List