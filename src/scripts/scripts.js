$(document).ready(function () {
 
  $("#loadcover").hide();
  
  /*Make height*/
  var window_height = $(window).height();
  $("#header").height(window_height);
  $("#subject").css("top", window_height);
  $("#subject").height(window_height * 2);
  $("#aboutme").height(window_height);
  $("#contactme").height(window_height);
  $("#footer").css("top", window_height * 3);
  
  var thisHeight = $(".continue").height();
  $(".continue").animate({ top: window_height -  thisHeight}, 0);

  /* handles window resize */
  $(window).resize(function() {
    window_height = $(window).height();
    if ( window_height < 500 ) { window_height = 500; }
    $("#header").height(window_height);
    $("#subject").css("top", window_height);
    $("#subject").height(window_height * 2);
    $("#aboutme").height(window_height);
    $("#contactme").height(window_height);
    $("#footer").css("top", window_height * 3);
    $(".continue").animate({ top: window_height -  thisHeight}, 0);
    
  });
  
  /*Menu scrolling*/
  $("#menu").hide();
  $("#menu").css("opacity", "0.8");
  $(".menu").hide();
  var menuVisible = false;
  $(window).scroll(function (event) {

    var scroll = $(window).scrollTop();

    switch (menuVisible) {
      case false:
        if (scroll > 60) {
          $(".button.default").fadeOut("fast");
          $("#menu").slideDown("slow", "swing");
          $(".menu").slideDown("slow", "swing");
          menuVisible = true;
        }
        break;
      case true:
        if (scroll <= 60) {
          $("#menu").slideUp("slow", "swing");
          $(".menu").slideUp("slow", "swing");
          setTimeout(function () {
            $(".default").fadeIn("slow");
          }, 350);
          menuVisible = false;
        }
        break;
    }
  });

  /*JUMP TO HOME*/
  $("#home, #menu_home").click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
  });

  /*JUMP TO ABOUTME*/
  $("#about, #menu_about, .continue").click(function () {
    $('html, body').animate({
        scrollTop: $("#aboutme").offset().top
    }, 1000);
  });
  
  /*JUMP TO CONTACTME*/
  $("#contact, #menu_contact").click(function () {
    $('html, body').animate({
        scrollTop: $("#contactme").offset().top
    }, 1000);
  });

  /* Change Picture of about when mouseover */
  $( ".about" ).mouseover(function() {
    $(".about_icon").attr('src', 'src/img/about_black.png');
  });
  
  $( ".about" ).mouseout(function() {
    $(".about_icon").attr('src', 'src/img/about_white.png');
  });
  
  /* Change Picture of contact when mouseover */
  $( ".contact" ).mouseover(function() {
    $(".contact_icon").attr('src', 'src/img/contact_black.png');
  });
  
  $( ".contact" ).mouseout(function() {
    $(".contact_icon").attr('src', 'src/img/contact_white.png');
  });
  
  /* Change Picture of blog when mouseover */
  $( ".blog" ).mouseover(function() {
    $(".blog_icon").attr('src', 'src/img/blog_black.png');
  });
  
  $( ".blog" ).mouseout(function() {
    $(".blog_icon").attr('src', 'src/img/blog_white.png');
  });
  
  /* Change Picture of fb when mouseover */
  $( "#fb" ).mouseover(function() {
    $("#fb_icon").attr('src', 'src/img/FB-f-Logo__white_144.png');
  });
  
  $( "#fb" ).mouseout(function() {
    $("#fb_icon").attr('src', 'src/img/FB-f-Logo__gray_144.png');
  });
  
  /* Change Picture of twitter when mouseover */
  $( "#twitter" ).mouseover(function() {
    $("#twitter_icon").attr('src', 'src/img/Twitter_Social_Icon_Rounded_Square_White.png');
  });
  
  $( "#twitter" ).mouseout(function() {
    $("#twitter_icon").attr('src', 'src/img/Twitter_Social_Icon_Rounded_Square_Gray.png');
  });
  
  /* Change Picture of email when mouseover */
  $( "#email" ).mouseover(function() {
    $("#email_icon").attr('src', 'src/img/email_icon_white.png');
  });
  
  $( "#email" ).mouseout(function() {
    $("#email_icon").attr('src', 'src/img/email_icon_gray.png');
  });
  
  /* Continue arrow glow */
  var continueMouse = false;
  $( ".continue" ).mouseover(function() {
    continueMouse = true;
  });
  
  $( ".continue" ).mouseout(function() {
    continueMouse = false;
  });
  
  var op = 0;
  var dir = 0;
  setInterval(function () {
    if ( !continueMouse ) {
      switch ( dir ) {
        case 0:
          op += 0.025;
          if ( op >= 1)
            {
              dir = 1;
            }
          break;
        case 1:
          op -= 0.025;
          if ( op <= 0)
            {
              dir = 0;
            }
          break;
      }
      $(".continue").css("opacity", op)
    }
    else {
      op = 1;
      $(".continue").css("opacity", op)
    }
  }, 30);
});
