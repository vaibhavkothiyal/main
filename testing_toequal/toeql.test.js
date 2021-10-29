describe("checking for toequal",()=>{
    test("first tstcase",()=>{
        expect( {} ).toEqual( {} )
    });
    test("second tstcase",()=>{
        expect( [] ).toEqual( [] )
    });
    test("third tstcase",()=>{
        expect( { a: 1, b: { c: 1, d: 2 }} ).toEqual( { a: 1, b: { c: 1, d: 2 }} ) 
    });
    test("forth tstcase",()=>{
        let n=[ 1, 2, [ 1, 2 ] ];
        expect(n).toEqual( [ 1, 2, [ 1, 2 ]  ] )
    });
    test("fifth tstcase",()=>{
        let n={ a: 1, b: { c: 1, d: 2 }};
        expect(n).toEqual( { a: 1, b: { e: 1, d: 2 }} ) 
    });
})