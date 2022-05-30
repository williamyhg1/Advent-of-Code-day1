const { readFileSync, promises: fsPromises } = require("fs");

function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");

  const arr = contents.split(/\r?\n/);

  console.log(arr);

  return arr;
}
const input = syncReadFile("./input.txt");
const input_int = [];
input.forEach((str) => {
  input_int.push(Number(str));
});


