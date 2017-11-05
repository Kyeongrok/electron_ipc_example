import {ipcMain} from 'electron';
import apiCall from '../engine/apiCall';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL(`file://${__dirname}/../../index.html`);

  ipcMain.on('REQUEST_EVENT', (_e, text) => {
    console.log('address:', text);
    apiCall(text).then(text => mainWindow.webContents.send('PRINT_TEXT', text))
      .catch((error) => console.error(e));

  });

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
