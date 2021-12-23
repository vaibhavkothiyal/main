import logo from './logo.svg';
import './App.css';

function App() {
  let headings=["Mobile Operating System","Mobile Manufacturers"];

  let sublist1=["Android","Blackberry","iPhone","Windows Phone"];
  let sublist2=["Samsung","HTC","Micromax","Apple"];
  return (
    <div className="div">
      <h1>{headings[0]}</h1>
      {sublist1.map((e=> <OperSys  os={e} />))}
      <h1>{headings[1]}</h1>
      {sublist2.map((e=> <OperSys  os={e} />))}
      {/* <h1>
        <img src={logo} width={300} alt="" />
      </h1>
      <input style={{marginBottom:"20px"}} type="text" name="" id="" /> */}
      {/* <Todo num={5}/> */}
    </div>
  );
}


function OperSys({os}){
  return <li className='li'>{os}</li>
}

export default App;
