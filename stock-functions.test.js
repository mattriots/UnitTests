const stockFunctions = require("./stock-functions");
const myFunctions = require("./sample-functions");


test("Testing empty portfolio -- success", () => {
  const target = 0;
  const result = stockFunctions.CreatePortfolio()
  expect(result.length).toBe(target);
});

test("Testing empty portfolio via SizeOfPortfolio -- success", () => {
  const target = 0;
  const result = stockFunctions.CreatePortfolio();
  expect(stockFunctions.SizeOfPortfolio(result)).toBe(target);
});

