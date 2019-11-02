$(function(){
  $('[data-toggle="github-tooltip"]').tooltip();
});

$(function(){
  $('[data-toggle="linkedin-tooltip"]').tooltip();
});

$(function(){
  $('[data-toggle="email-tooltip"]').tooltip();
});

document.querySelector('div.logos-navbar > a:nth-child(1)').addEventListener('mouseover', function(){
  document.querySelector('div.logos-navbar > a:nth-child(1) > img').src = 'assets/img/github-logo-hover.png';
});

document.querySelector('div.logos-navbar > a:nth-child(1)').addEventListener('mouseout', function(){
  document.querySelector('div.logos-navbar > a:nth-child(1) > img').src = 'assets/img/github-logo.png';
});

document.querySelector('div.logos-navbar > a:nth-child(2)').addEventListener('mouseover', function(){
  document.querySelector('div.logos-navbar > a:nth-child(2) > img').src = 'assets/img/linkedin-logo-hover.png';
});

document.querySelector('div.logos-navbar > a:nth-child(2)').addEventListener('mouseout', function(){
  document.querySelector('div.logos-navbar > a:nth-child(2) > img').src = 'assets/img/linkedin-logo.png';
});

document.querySelector('div.logos-navbar > a:nth-child(3)').addEventListener('mouseover', function(){
  document.querySelector('div.logos-navbar > a:nth-child(3) > img').src = 'assets/img/email-logo-hover.png';
});

document.querySelector('div.logos-navbar > a:nth-child(3)').addEventListener('mouseout', function(){
  document.querySelector('div.logos-navbar > a:nth-child(3) > img').src = 'assets/img/email-logo.png';
});
