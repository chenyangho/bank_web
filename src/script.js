var s = skrollr.init();

$(window).scroll(function(evt){
  if($(window).scrollTop()>0){
    $(".navbar").removeClass("navbor-top");
    $(".navbar").addClass("bg-light");
    $(".navbar").addClass("navbar-light");
  }else{
    $(".navbar").addClass("navbar-top");
    $(".navbar").removeClass("bg-light");
    $(".navbar").removeClass("navbar-light ");
  }
})

$(document).on('click','a',function(evt){
  event.preventDefault();
  var target = $(this).attr("href")
  $('html,body').animate({
    scrollTop: $(target).offset().top
  },600)
})