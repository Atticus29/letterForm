$(document).ready(function(){
  $("#letter-form").submit(function(){
    var recipientVal = $("#letter-writers-name").val();
    var writersVal = $("#letter-recipient-name").val();
    $(".letter-writers-name").text(recipientVal);
    $(".letter-recipient-name").text(writersVal);

    $("#letter-section").show();

    event.preventDefault();
  });
});
