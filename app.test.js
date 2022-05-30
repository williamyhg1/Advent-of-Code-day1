const countIncreased = require("./app");


test("count the number of times a depth measurement increase", () => {
  expect(countIncreased([199, 200, 208, 210])).toBe(3);
  expect(countIncreased([199, 200, 208, 210, 200])).toBe(3);
  expect(
    countIncreased([199, 200, 208, 210, 200, 207, 240, 269, 260, 263])
  ).toBe(7);
  expect(countIncreased([199, 198, 197, 196])).toBe(0);
});


