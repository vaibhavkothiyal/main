const {calTax}=require("./tax")

describe("checking for suduko",()=>{
    test("first tstcase",()=>{
        expect(calTax(1000000)).toBe(140000);
    });
    test("second tstcase",()=>{
        expect(calTax(500000)).toBe(25000);
    });
    test("first tstcase",()=>{
        expect(calTax(600000)).toBe(84000);
    });
    test("second tstcase",()=>{
        expect(calTax(240000)).toBe(0);
    });
    test("first tstcase",()=>{
        expect(calTax(600000)).toBe(84000);
    });
    test("second tstcase",()=>{
        expect(calTax(777777)).toBe(108888.78);
    });
    test("first tstcase",()=>{
        expect(calTax(1000000)).toBe(140000);
    });
    test("second tstcase",()=>{
        expect(calTax(499999)).toBe(24999.95);
    });
})