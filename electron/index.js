const { app, BrowserWindow } = require("electron");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });
  mainWindow.loadFile("index.html").then(() => console.log("App launched!"));
}

// Creating the app
app.on("ready", () => createWindow());
