import {add,userNote} from './fun';
import('./index.css');
import logo from './logo.png'

const txt=document.createElement('h2');
txt.innerText="Write your story";
txt.classList="frstcolor";

const img=document.createElement('img');
img.src=logo;
img.className="image"

const root=document.getElementById("root");

const inp=document.createElement("input");
inp.placeholder="enter note";
inp.className="input";

const sub=document.createElement('button');
sub.innerText="submit";
sub.className="sub";

const div=document.createElement('div');
div.className="note";

sub.onclick=()=>{userNote(inp.value,div,inp)}


root.append(txt,img,inp,sub,div);
