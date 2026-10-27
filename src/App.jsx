import { createContext } from "react";
import Data from "./context/data"

export const MyContext = createContext();

function App(){
  let name = 'React - Js';
  return(
    <div className="text-3xl text-center">
      
      <MyContext.Provider value={name}>
        <Data />
      </MyContext.Provider>

    </div>
  )
}

export default App

// Context hook 
// 1.createContext()
// 2.provider  
// 3.useContext()





    
// before class 

// function Student(){
//     this.name = 'JS'
// }

// let std1 = new Student();
// console.log(std1.name);



// class 

// class Student{
//     constructor(message){
//         console.log(message);
//     }
//     name = 'JS'
//     age = 30
//     printDetails(name){
//         console.log('My Name is '+ name + ' and My age is '+ this.age + '.');        
//     }
// }

// // let std1 = new Student();
// // console.log(std1.name);
// // console.log(std1.age);
// // std1.printDetails()

// let std2 = new Student('Hello There!');
// std2.name = 'JavaScript'
// console.log(std2.name);
// std2.printDetails('Imran Khan')


























// React Core Concepts 

// 1.App Installation 
// 2.React Feautures 
        // 1.Components
        // 2.JSX
        // 3.Virtual Dom 
// 3.Props, Prop Drilling, Child Props
// 4.Conditional Rendering 
// 5.List and Keys 
// 6.React Router
// 7.Hooks 
        // 1.useState
        // 2.useEffect 
        // 3.useContext 
        // 4.useMemo 
        // 5.useRef 
// 8.Form Handling 
// 9.LifeCycle Methods
// 10.Api Handling 
// 11.React Redux    


