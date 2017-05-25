$(document).ready(function() {
  $("#blanks form").submit(function() {
    $(".person1").text("blah blah");
    $(".person2").text("blah blah");
    $(".animal").text("blah blah");
    $(".exclamation").text("blah blah");
    $(".verb").text("blah blah");
    $(".noun").text("blah blah");

    $("#story").show();

    event.preventDefault();
  });
});
