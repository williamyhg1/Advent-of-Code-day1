const { readFileSync, promises: fsPromises } = require("fs");

function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");

  const arr = contents.split(/\r?\n/);

  return arr;
}
const file = syncReadFile("./file.txt");
const input = [];
file.forEach((str) => {
  input.push(Number(str));
});

const countSumIncreased = (arr) => {
  let counts = 0;
  for (let i = 0; i < arr.length - 3; i++) {
    if (
      arr[i] +
        arr[i + 1] +
        arr[i + 2] -
        (arr[i + 1] + arr[i + 2] + arr[i + 3]) <
      0
    ) {
      counts++;
    }
  }
  return counts;
};

console.log(countSumIncreased(input));

module.exports = countSumIncreased;
