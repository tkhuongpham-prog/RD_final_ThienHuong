// JavaScript Document

AOS.init({
    duration: 800,   // thời gian hiệu ứng
    offset: 120,     // scroll tới gần mới hiện
    once: false     
  });


$('[data-fancybox="gallery"]').fancybox({
  animationEffect: "zoom-in-out",
  transitionEffect: "fade",
  buttons: [
    "zoom",
    "close"
  ]
});