import {ipcRenderer} from 'electron';
import fs from 'fs';
import $ from 'jquery';

ipcRenderer.on('PRINT_TEXT', (_e, text) => {
  try {
    console.log('text:', text);

    $('#result_area').append(JSON.stringify(text));
    fs.writeFile('./message2.txt', JSON.stringify(text));
  } catch (e) {
    console.log(e);
  }
});

const sendEvent = (address) => ipcRenderer.send('REQUEST_EVENT', address);

$('#bu_1').click(function () {
  const address = $('#tf_address').val();
  sendEvent(address);
});