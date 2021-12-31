import { useEffect, useState } from "react"
import './timer.css'

export const Timer = () => {

    const [strt, setNum] = useState(0);
    const [end, setEnd] = useState(0);
    const [started,setStarted] =useState(false);

    const handleInp = (e) => {
        const { name, value } = e.target;
        if (name == "strt")
        setNum(value);
        if (name == "end")
            setEnd(value);
    }

    const handleSub = (e) => {
        e.preventDefault();
        setStarted(true);
    }

    useEffect(() => {
        console.log(strt)
        const runTimer = setInterval(() => {
            setNum((p) => {
                if (p == end) {
                    setStarted(false);
                    clearInterval(runTimer);
                    return end;
                }
                return p - 1;
            })
        }, 1000);
        return ()=>{
            clearInterval(runTimer);
        }
    }, [started])

    return <>
        <div className="timerdiv">
            <h1>Timer</h1>
            <input onChange={handleInp} type="text" name="strt" placeholder="set start from" />
            <input onChange={handleInp} type="text" name="end" placeholder="set end" />
            <input onClick={handleSub} type="submit" name="" />
            <h1 style={{
                color: strt > end ? "green" : "red",
                textAlign:"center"
            }}>{strt}</h1>
        </div>
    </>
}