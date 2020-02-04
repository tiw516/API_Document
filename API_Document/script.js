$('body').scrollspy({
    target: '.bs-docs-sidebar',
    offset: 40
});
// $("#sidebar").affix({
//     offset: {
//       top: 60
//     }
// });


// // if window resize call responsive function
// $(window).resize(function(e) {
//     screen_resize();
// });
// // call responsive function on default :)
// $(document).ready(function(e) {
// 	screen_resize();
// });
//
// function screen_resize() {
//   var w = parseInt(window.innerWidth);
//
//   if (w < 990) {
//
//   }
// }


$(document).ready(function() {

  $('#lang_cn').on('click',function(e){
      var current = window.location.hash;
      $("#lang_cn").attr("href", "CAD_cn.html"+current);
  })

  $('#lang_en').on('click',function(e){
      var current = window.location.hash;
      $("#lang_en").attr("href", "CAD_en.html"+current);
  })

  $('#lang_cn_USD').on('click',function(e){
      var current = window.location.hash;
      $("#lang_cn_USD").attr("href", "USD_cn.html"+current);
  })

  $('#lang_en_USD').on('click',function(e){
      var current = window.location.hash;
      $("#lang_en_USD").attr("href", "USD_en.html"+current);
  })

  $('#content').on('click',function(e){
    document.getElementById("mySidenav").style.width = "0";
  })

  $('#mySidenav a').on('click',function(e){
    document.getElementById("mySidenav").style.width = "0";
  })

});


// $(document).bind('scroll', function (e) {
//   $('.thirdlevel').each(function () {
//     history.replaceState({}, "", $("a[href^='#']", e.target).attr("href"));
//   })
//
// });
$(window).on('activate.bs.scrollspy', function (e) {
    if ($("a[href^='#']", e.target).attr("href") == '#OverviewPage' || $("a[href^='#']", e.target).attr("href") == '#RequestAndParametersPage' ||
        $("a[href^='#']", e.target).attr("href") == '#SignPage' || $("a[href^='#']", e.target).attr("href") == '#PaymentSuccessPage' ) {
      history.replaceState({}, "", $("a[href^='#']", e.target).attr("href"));
    }
    if ($(e.target.childNodes[0]).attr('class') == 'thirdlevel'){
      // console.log($(e.target.childNodes[0]).attr('class'));
      history.replaceState({}, "", $(e.target.childNodes[0]).attr('href'));
    }
    if ($("a[href^='#']", e.target).attr("href") == '#Pay'){

    }

    // else if ($(e.target.childNodes[2]).attr('class') == 'firstlevel'){
    //   history.replaceState({}, "", $("a[href^='#']", e.target).attr("href"));
    // }


    // history.replaceState({}, "", $("a[href^='#']", e.target).attr("href"));

});


// $(window).on('activate.bs.scrollspy', function(e) {
//   var $hash, $node;
//   $hash = $("a[href^='#']", e.target).attr("href").replace(/^#/, '');
//   $node = $('#' + $hash);
//   if ($node.length) {
//     $node.attr('id', '');
//   }
//   document.location.hash = $hash;
//   if ($node.length) {
//     return $node.attr('id', $hash);
//   }
// });
