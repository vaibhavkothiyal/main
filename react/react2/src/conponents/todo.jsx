import '../App.css';

function OperSys({os}){
    return <li className='li'>{os}</li>
  }

function Chk({age,name,salary}){
    return <h1 className= {`${age>10 ? "li":null}`} >  {age} {name} {salary} </h1>
}

function Chk2({age,name,salary,children}){
    return <div className='li'> {name}{children} </div>
}

export {OperSys,Chk,Chk2 }