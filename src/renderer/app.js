import {ipcRenderer} from 'electron';

ipcRenderer.on('PRINT_TEXT', (_e, text) => {
  try {
    console.log('text:', text);
  } catch (e) {
    console.log(e);
  }
});

ipcRenderer.send('REQUEST_EVENT', 'request_event');
