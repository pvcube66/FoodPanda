// __tests__/Sum.test.js
const { Sum } = require("../Sum"); // ✅ Adjusted path

test("add 3 and 5", () => {
  // console.log("Running test: add 3 and 5");
  expect(Sum(3, 5)).toBe(8);
});

test("add 6 and 6", () => {
  // console.log("Running test: add 6 and 6");
  expect(Sum(6, 6)).toBe(12);
});

test("allah hu akbar",()=>{
  expect(Sum(1,1)).toBe(2);
})
test("3+3",()=>{
  const result=Sum(3,3);
  expect(result).toBe(6);
})