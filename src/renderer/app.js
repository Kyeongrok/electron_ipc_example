import {ipcRenderer} from 'electron';

ipcRenderer.on('PRINT_TEXT', (_e, text) => {
  try {
    console.log('text:', text);
    document.write(JSON.stringify(text));
  } catch (e) {
    console.log(e);
  }
});

const sendEvent = () => ipcRenderer.send('REQUEST_EVENT', 'request_event');

$('#bu_1').click(function(){
  sendEvent();
});