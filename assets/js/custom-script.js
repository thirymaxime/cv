$(function init(){
  AOS.init({
    disable: 'phone',
    once: true
  });
  $('[data-toggle="github-tooltip"]').tooltip();
  $('[data-toggle="linkedin-tooltip"]').tooltip();
  $('[data-toggle="email-tooltip"]').tooltip();
  $('[data-toggle="cv-tooltip"]').tooltip();
  $('[data-toggle="link-top-tooltip"]').tooltip();
  $('div.logos-navbar > a:nth-child(1)').mouseover(function(){
    $('div.logos-navbar > a:nth-child(1) > img').attr('src', 'assets/img/github-logo-hover.png');
  });
  $('div.logos-navbar > a:nth-child(1)').mouseout(function(){
    $('div.logos-navbar > a:nth-child(1) > img').attr('src', 'assets/img/github-logo.png');
  });
  $('div.logos-navbar > a:nth-child(2)').mouseover(function(){
    $('div.logos-navbar > a:nth-child(2) > img').attr('src', 'assets/img/linkedin-logo-hover.png');
  });
  $('div.logos-navbar > a:nth-child(2)').mouseout(function(){
    $('div.logos-navbar > a:nth-child(2) > img').attr('src', 'assets/img/linkedin-logo.png');
  });
  $('div.logos-navbar > a:nth-child(3)').mouseover(function(){
    $('div.logos-navbar > a:nth-child(3) > img').attr('src', 'assets/img/email-logo-hover.png');
  });
  $('div.logos-navbar > a:nth-child(3)').mouseout(function(){
    $('div.logos-navbar > a:nth-child(3) > img').attr('src', 'assets/img/email-logo.png');
  });
  $('div.logos-navbar > a:nth-child(4)').mouseover(function(){
    $('div.logos-navbar > a:nth-child(4) > img').attr('src', 'assets/img/cv-logo-hover.png');
  });
  $('div.logos-navbar > a:nth-child(4)').mouseout(function(){
    $('div.logos-navbar > a:nth-child(4) > img').attr('src', 'assets/img/cv-logo.png');
  });
  $('#navbarSupportedContent>ul>li>a').on('click', function(){
    $('#navbarSupportedContent').collapse('hide');
  });
  $(document).click(function(e) {
	if (!$(e.target).is('nav')) {
    	$('#navbarSupportedContent').collapse('hide');
    };
  });
});
