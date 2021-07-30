const { palindrome, sum, average, uppercaseString, subtract, multiply, divide } = require("../utils/utility-for-testing");
describe("metodos de Util", () => {

  test('uppercase test to equal TEST', () => {
    return uppercaseString('test').then(str => {
      expect(str).toBe('TEST')
    })
  })

  test("add 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('multiplying 5 * 5 equals 25', () => {
    expect(multiply(5, 5)).toBe(25)
  })

  test('subtracting 5 - 4 equals 1', () => {
    expect(subtract(5, 4)).toBe(1)
  })

  test('dividing 50 / 2 equals 25', () => {
    expect(divide(50, 2)).toBe(25)
  })

  test("average of 10 10 1 should be 7", () => {
    expect(average([10, 10, 1])).toBe(7);
  });

  test("average of 5 5 2 should be 4", () => {
    expect(average([5, 5, 2])).toBe(4);
  });

  test("palindrome of mindhub", () => {
    const result = palindrome("mindhub");
    expect(result).toBe("buhdnim");
  });

  test("palindrome of empty string", () => {
    const result = palindrome("");
    expect(result).toBe("");
  });

  test("palindrome of undefined", () => {
    const result = palindrome();
    expect(result).toBeUndefined();
  });
});
