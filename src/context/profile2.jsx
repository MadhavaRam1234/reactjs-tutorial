import { useContext } from "react"
import { MyContext } from "../App"


function Profile2() {
    let result = useContext(MyContext)
  return (
    <>
        <h2>Profile2 Component</h2>
        <h1>The Result is {result}</h1>
    </>
  )
}

export default Profile2