const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;
let startWindow;
let editorWindow;

function createStartWindow() {
  startWindow = new BrowserWindow({
      width: 300,
      height: 500,
      resizable: true,
      frame: false

  });
  startWindow.loadURL(`file://${__dirname}/index.html`);   
    

  startWindow.on('closed', () => {
    startWindow = null;
  });
}


app.on('ready', createStartWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (startWindow === null) {
    createStartWindow();
  }
});


