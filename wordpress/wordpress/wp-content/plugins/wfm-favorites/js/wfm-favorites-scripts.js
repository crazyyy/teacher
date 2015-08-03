jQuery(document).ready(function($){
  $('.wfp-favorites-link a').click( function(e) {
    console.log(wfmFavorites);
    $.ajax({
      type: 'POST',
      // url: '/wp-admin/admin-ajax.php',
      url: wfmFavorites.url,
      data: {
        test: 'Test post',
        action: 'wfm_test'
      },
      success: function(res){
        console.log(res);
      },
      error: function() {
        alert('Error!')
      }
    })
    e.preventDefault();
  });
});
