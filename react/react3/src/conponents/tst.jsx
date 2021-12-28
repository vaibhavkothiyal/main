import { useState } from "react";

function A() {
    const [data, setData] = useState("");
    function C(input) {
        console.log("here3")
        setData(input);
    }
    return (
        <div>
            <B C={C} />
            <D data={data} />
        </div>
    )

}
function B({C}) {
    console.log("here2")
    var data = "vaibhav";
    C(data);
    return <h1></h1>
}

function D({data}) {
    console.log("here4")
    return (<h1>{data}</h1>)
}

export default A;