import logo from './logo.svg';
import './App.css';
import {OperSys,Chk,Chk2} from './conponents/todo'
import {LayBtn} from './conponents/button'

// function App() {
//   let headings=["Mobile Operating System","Mobile Manufacturers"];

//   let sublist1=["Android","Blackberry","iPhone","Windows Phone"];
//   let sublist2=["Samsung","HTC","Micromax","Apple"];
//   let name="vaibhav",age=11,salary=1100000;
//   return (
//     <div className="div">
//       <h1>{headings[0]}</h1>
//       {sublist1.map((e=> <OperSys  os={e} />))}
//       <h1>{headings[1]}</h1>
//       {sublist2.map((e=> <OperSys  os={e} />))}
//       <Chk name={name} age={age>10?age:1} salary={salary}/>

//       <Chk2 name={name} age={age>10?age:1} salary={salary}>
//         <h1 className= {`${age>10 ? "li":null}`} >  {age} {name} {salary} </h1>
//         <h1  >  {age} {name} {salary} </h1>
//       </Chk2>
      
//     </div>
//   );
// }


function App(){
  return(
      <LayBtn />
  );
}


export default App;
