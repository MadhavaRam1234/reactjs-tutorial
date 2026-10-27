import Student from "./student"
import { allStudents } from "./data"

function StudentDetails() {
  return (
    <div>
        {/* <Student name={'Imran'} age={'22'} mark={'80'} />
        <Student name={'raja'} age={'20'} mark={'75'} />
        <Student name={'james'} age={'21'} mark={'85'} /> */}
        {
           allStudents.slice(0,4).map((student)=>{
            // console.log(student);
            return <Student name={student.name} age={student.age} mark={student.mark} />
           }) 
        }
    </div>
  )
}

export default StudentDetails