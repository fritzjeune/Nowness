// jshint esversion:6

var parentElement = $(".videos-list");
console.log(parentElement.children().length);

// // animations for the videos options
$(".vd-tumb").mouseover(function(event) {
  if ($(this).children(".vid-container-option").css("top") === "-4px") {
    $(this).children(".vid-container-option").animate({ top: "-91px"},{duration: 200, easing: "linear", complete: function() {
      $(this).children(".vid-container-option").css({ top: "-95px"});
    }});
  }
  $(this).children("img").css({opacity : 0.7});
  // console.log(event);
});

$(".vd-tumb").mouseleave(function(event) {
  if ($(this).children(".vid-container-option").css("top") === "-91px") {
    $(this).children(".vid-container-option").animate({top: "-4px"}, {duration: 100, easing: "linear", complete: function() {
      $(this).children(".vid-container-option").css({ top: "-4px"});
    }});
  }
  $(this).children("img").css({opacity : 1});
});

// 
var index = 0;
var firstItem;
$(".arrow").click(function() {
  if ($(this).hasClass("arr-right")) {
    while (index <= (parentElement.children(".video-item").length - 6)) {
    firstItem = parentElement.children(".video-item")[index];
    firstItem.style.display= "none";
    index++;
    break;
    }
  } else if ($(this).hasClass("arr-left")) {
    while (index > 0) {
    firstItem = parentElement.children()[index - 1];
    firstItem.style.display= "block";
    index--;
    break;
    
    }
  }
});

// ajax features...

const $form = $("#subs-submit");

$form.on("submit" , submitHandler);

function submitHandler(e) {
  e.preventDefault();

  $.ajax({
    url: "/",
    type: "POST",
    data: $form.serialize()
  }).done(response => {
    $("#subs-submit").each(function(){
      this.reset();
    });
      $(".ajaxResponse").html(response);
      console.log(response);
  });
}