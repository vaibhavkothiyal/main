import { useState } from 'react';
import './App.css';

import {Timer} from './component5/timer';





//timer in react
function App(){
  const [show,setShow]=useState(true);

  return <>
    {show?<Timer />:null}
    <button style={{
      marginLeft:"48.5%",
      width:"50px"
    }} onClick={()=>setShow(!show)}>{show?"hide":"show"}</button>
  </>
}


export default App;
