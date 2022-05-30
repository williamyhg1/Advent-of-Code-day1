const countSumIncreased = require("./app2");

test("count the number of times the sum of depth measurements increase", () => {
    expect(countSumIncreased([199, 200, 208, 210])).toBe(1);
    expect(countSumIncreased([199, 200, 208, 210, 200])).toBe(1);
    expect(countSumIncreased([199, 200, 208, 210, 200, 207])).toBe(1);
    expect(countSumIncreased([199, 200, 208, 210, 200, 207,240])).toBe(2);
  });