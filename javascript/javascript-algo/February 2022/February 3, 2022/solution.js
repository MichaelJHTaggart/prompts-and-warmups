//Task
//Given a number N, determine if the sum of N consecutive numbers is odd or even.

//If the sum is definitely an odd number, return "Odd".
//If the sum is definitely an even number, return "Even".
//If the sum can be either odd or even ( depending on which first number you choose ), return "Either".

// Examples
// oddOrEven(1) should return "Either", because the sum can be odd or even.
// oddOrEven(6) should return "Odd", because 6 consecutive numbers contain 3 odd and 3 even numbers, so their sum is always odd.
// oddOrEven(8) should return "Even", because 8 consecutive numbers contain 4 odd and 4 even numbers, so their sum is always even.

// describe("Odd or even?",()=>{
//  it("example tests",()=>{
//    assert.strictEqual( oddOrEven(1), "Either" );
//    assert.strictEqual( oddOrEven(6), "Odd" );
//    assert.strictEqual( oddOrEven(8), "Even" );
//  });
//});