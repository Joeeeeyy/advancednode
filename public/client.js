$(document).ready(function () {
  let socket = io();

  socket.on('user count', function (data) {
    console.log(data);
  });
  
  // Form submittion with new message in field with id 'm'
  $('form').submit(function () {
    let messageToSend = $('#m').val();

    $('#m').val('');
    return false; // Prevent form submit from refreshing page
  });
});