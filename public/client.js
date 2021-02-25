$(document).ready(function () {
  let socket = io();

  // Form submittion with new message in field with id 'm'
  $('form').submit(function () {
    let messageToSend = $('#m').val();

    $('#m').val('');
    return false; // Prevent form submit from refreshing page
  });
});