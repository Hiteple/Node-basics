// Buffers are binary data saved in memory
const buffer1 = Buffer.alloc(4);
const buffer2 = Buffer.from([1, 2, 5, 7]);

function bufferString() {
  const data = Buffer.from("Hi there");
  console.group("Say Hi");
  console.log("In binary");
  console.log(data);
  console.log("To String");
  console.log(data.toString());
  console.groupEnd();
}

// We can allocate the abc
function makeABC() {
  const abc = Buffer.alloc(26);
  for (let i = 0; i < 26; i++) {
    abc[i] = i + 97;
  }
  console.group("Say abc");
  console.log("In binary");
  console.log(abc);
  console.log("To String");
  console.log(abc.toString());
  console.groupEnd();
}

module.exports = { buffer1, buffer2, bufferString, makeABC };
