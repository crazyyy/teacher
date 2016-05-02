var $ = require('jquery');
var jQuery = $;

require('./owl.carousel');
// require('./jquery.mCustomScrollbar');
// require('./jquery.mousewheel.js');
// require('./jquery.mCustomScrollbar');

if (typeof jQuery == 'undefined') {
  console.warn('jQuery hasn\'t loaded');
} else {
  console.log('jQuery has loaded');
}


// $(function() {


//   // Place any jQuery/helper plugins in here.

//   /**
//    * article page framed text
//    */

//   // $('.article-inner').mCustomScrollbar();


//   // var mount = function() {
//   //   $('body').css('background-color', 'red')
//   //   console.log('hi')
//   // }
//   // var unmount = function() {
//   //   $('body').css('background-color', '#fff')
//   //   console.log('out')
//   // }
//   // $('.m2').scrollIntoView(mount, unmount, true)





// })



// $("#owl-gallery-main").owlCarousel({
//   items : 1,
//   slideSpeed : 2000,
//   nav: true,
//   autoplay: true,
//   dots: false,
//   loop: true,
//   responsiveRefreshRate : 200,
//   navText: ['назад','вперед'],
// });



