import Dashboard from "./dashboard";
import Login from "./login";

function Greetings() {
    let isloggedIn = false;

    if(isloggedIn){
        return <Dashboard name={'Imran Khan'} />
    }else{
        return <Login />
    }

}

export default Greetings