const {findSum}=require("./sumMatrix");

function test(str,fn){
    fn();
}

function expect(output){
    function toBe(result){
        if(output==result){
            console.log("Passed"+"\n","Output=",output,"Result=",result);
        }
        // else if(output!=result){
        //     console.log(`Expected: ${result},output: ${output}`);
        // }
        else{
            console.log("Failed"+"\n",`arr[${output}] is undefined`);
        }
    }
    return {toBe};    //sumMatrix2.js
}
test("first tstcase",()=>{
    expect(findSum([1,2,3,4])).toBe(10);
});
test("second tstcase",()=>{
    expect(findSum([1,4,3,4])).toBe(12);
});
test("third tstcase",()=>{
    expect(findSum([1,2,3,4,5,,1])).toBe(15);
});
test("forth tstcase",()=>{
    expect(findSum([1,2,3,4,5,1])).toBe(16);
});
test("fifth tstcase",()=>{
    expect(findSum([1,1,2,1])).toBe(5);
});
test("sixth tstcase",()=>{
    expect(findSum([1,5,1])).toBe(7);
});