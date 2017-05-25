$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul").prepend("<li>Meow</li>");
    $('li').css('background-color', 'green');
    $(".cat-showing").show();
    $(".cat-hidden").hide();
  });
  //
  //
  $("button#dog").click(function() {
    $("ul").prepend("<li>Arf Arf</li>");
    $('li').css('background-color', 'green');
    $(".dog-showing").show();
    $(".dog-hidden").hide();
  });
});
