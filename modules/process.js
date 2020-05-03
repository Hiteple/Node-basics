// Process is in globals already
const beforeExit = () =>
  process.on("beforeExit", () => {
    console.log("Process will exit...");
  });

const onExit = () =>
  process.on("exit", (code) => {
    // Forcing error
    // wow();
    console.log(`Exited with code ${code}`);
    setTimeout(() => {
      console.log("This will not be logged. Ever");
    }, 0);
  });

const uncaught = () => {
  process.on("uncaughtException", (err, origin) => {
    console.log(`Error: ${err}. \n Origin: ${origin}`);
  });
};

module.exports = { beforeExit, onExit, uncaught };
