const {calEntTime}=require("./calTime")

describe("After convert time is",()=>{
    test("first tstcase",()=>{
        expect(calEntTime(600060)).toBe("10 Minutes 0 Seconds");
    });
    test("After convert time is",()=>{
        expect(calEntTime(50000)).toBe("50 Seconds");
    });
    test("After convert time is",()=>{
        expect(calEntTime(5200)).toBe("5 Seconds");
    });
    test("After convert time is",()=>{
        expect(calEntTime(5001000)).toBe("1 Hours 23 Minutes 21 Seconds");
    });
})