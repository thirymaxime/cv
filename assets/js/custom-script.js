$(function init(){
  AOS.init({disable: 'phone'});
  $('[data-toggle="github-tooltip"]').tooltip();
  $('[data-toggle="linkedin-tooltip"]').tooltip();
  $('[data-toggle="email-tooltip"]').tooltip();
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
});
