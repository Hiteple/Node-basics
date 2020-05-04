const bcrypt = require("bcrypt");
const moment = require("moment");
const sharp = require("sharp");

function hashPass(pass) {
  bcrypt.hash(pass, 5, (err, hash) => {
    if (err) {
      console.log(err);
      return false;
    }
    console.log(hash);

    // Check if the pass and hash can be compared successfully
    bcrypt.compare(pass, hash, (err, result) => {
      if (err) {
        console.log(err);
        return false;
      }
      console.log(`It is ${result} that ${pass} can be compared with ${hash}`);
      console.log("END OF HASHING PASS...");
    });
  });
}

function usingMoment() {
  const now = moment();
  console.log(now.format("YYYY/MM/DD"));
}

function usingSharp(input, output) {
  sharp(input).resize(80).toFile(output);
  console.log(`Processing complete and output is ${output}`);
}

module.exports = { hashPass, usingMoment, usingSharp };
