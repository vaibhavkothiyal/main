import { useState } from 'react';
import '../App.css'


function LayBtn() {

    const [count, setCount] = useState(0);

    function AddN(num) {
        // setCount(count + num);      //one way

        setCount((prev) => {
            if(num=="d"){
                return prev*2;
            }
            return prev + num;
        })
    }

    if (count == 10) return <h1>Max reached</h1>

    return <div className='btnDiv'>
        <h1 className='dsplCnt'>{count}</h1>

        {/* <button disabled={count>9?true:false} onClick={()=>AddN(1)}>Add 1</button>
        <button disabled={count<1?true:false} onClick={()=>AddN(-1)}>Remove 1</button> */}

        {count < 10 && (
                <div className='btnDiv2'>
                    <button disabled={count > 9 ? true : false} onClick={() => AddN(1)}>Add 1</button>
                    <button disabled={count < 1 ? true : false} onClick={() => AddN(-1)}>Remove 1</button>
                    <button className='dbl' disabled={count < 1 ? true : false} onClick={() => AddN("d")}>Double</button>
                    <p className='dsplCnt'>{count % 2 == 0 ? "Even" : "Odd"} value</p>
                </div>
        )}
    </div>
}

export { LayBtn };