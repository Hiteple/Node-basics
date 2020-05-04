// Error first callback should be used when working with async processes
// it will obtain error first, or return the data last if all is good
function myAsync(cb) {
  setTimeout(() => {
    try {
      // All is good
      //const a = 3 + 2;

      // Force an error
      const a = 3 + z;
      cb(null, a);
    } catch (err) {
      cb(err, null);
    }
  }, 2000);
}

module.exports = { myAsync };
