//main application entry point
// var $ = require('./src/jquery');
// var jquery = require('./src/jquery');
// var jQuery = require('./src/jquery');


// webpack entry point
// import './src/jquery';  // jQuery is in global scope after this
// import './src/jquery.mCustomScrollbar';

// var mCustomScrollbar = require('./src/jquery.mCustomScrollbar');


import $ from 'jquery';
// require('./jquery.mCustomScrollbar');
import owlCarousel from './src/owl.carousel';

// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function () {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
        console[method] = noop;
    }
}
}());
if (typeof jQuery == 'undefined') {
  console.warn('jQuery hasn\'t loaded');
} else {
  console.log('jQuery has loaded');
}
// Place any jQuery/helper plugins in here.

/**
 * article page framed text
 */


// (function () {

// $(".article-inner").mCustomScrollbar({
//   theme:"3d",
//     scrollButtons:{
//       enable:true
//     },
//     callbacks:{
//       onInit:function(){
//         console.log("scrollbars initialized");
//       }
//     }
//   });
// }());



$('.home-owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
            items:1
})


// $('body').css({
//   display: 'none'
// });




// require('jquery/src/css');

// $('body').css('background', 'red');
