import '../App.css';
export const GroceryList=({item,id,status,update})=>{

    return (<div className='childDiv'>
      <p className="li">{item}</p>
      <button className='listBtn' onClick={()=>{update(id)}}>Mark Complete</button>
    </div>)
}