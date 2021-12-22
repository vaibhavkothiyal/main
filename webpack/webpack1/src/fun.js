function add(a,b){
    return a+b;
}
function userNote(note,div,inp){
    inp.value="";
    div.innerText=note;
}

export {add,userNote};