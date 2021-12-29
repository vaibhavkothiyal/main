import './App.css';
// import A from './component1/tst';
// import {Todo} from './conponents/todo';
// import { Grocery } from './component2/grocery';
// import {Tst} from './component3/tst'
// import {Tst2} from './component3/tst'
// import {Form} from './component4/form'
import {UserForm} from './component4/userForm';



//parent child sebling  static uplifting
// function App(){
//   return(
//     <div>
//       <h1>checking tst</h1>
//       <A />
//     </div>
//   );
// }

// todo
// function App(){
//   return(
//     <div>
//       <h1>checking tst</h1>
//       <Todo />
//     </div>
//   );
// }

//grocery
// function App(){
//   return(
//     <div className='parentDiv'>
//       <h1>Grocery List</h1>
//       <Grocery />
//     </div>
//   )
// }

// testing events 
// function App(){
//   return <>
//     <Tst />
//   </>
// }

//testing useRef
// function App(){
//   return <>
//     <Tst2 />
//   </>
// }

//workibg with form
// function App(){
//   return <>
//     <Form />
//   </>
// }

// woking with form2
function App(){
  return <>
  <h1>Enter Details</h1>
    <UserForm />
  </>
}


export default App;
