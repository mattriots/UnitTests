const myFunctions = require('./sample-functions');

test('Testing sum -- success', () => {
    const target = 30;
    const result = myFunctions.sum(12, 18);
    expect(target).toBe(result);

});


test('Testing division -- success', () => {
    const target = 5;
    const result = myFunctions.div(30, 6);
    expect(target).toBe(result);
});


test('Contains numbers -- success', () => {
    const target = true;
    const result = myFunctions.containsNumbers("1234")
    expect(result).toBeTruthy();

});

//Space makes it return true when it shouldnt
test("Contains numbers -- success", () => {
  const target = true;
  const result = myFunctions.containsNumbers(" ");
  expect(result).toBeTruthy();
});

