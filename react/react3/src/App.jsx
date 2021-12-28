import './App.css';
// import A from './conponents/tst';
// import {Todo} from './conponents/todo';
import { Grocery } from './components2/grocery';



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
function App(){
  return(
    <div className='parentDiv'>
      <h1>Grocery List</h1>
      <Grocery />
    </div>
  )
}


export default App;
