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



const countIncreased = (array) => {
  let counts = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] - array[i] > 0) {
      counts++;
    }
  }
  return counts;
};

console.log(countIncreased(input));

module.exports = countIncreased;
