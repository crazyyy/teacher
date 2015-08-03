<?php

function wfm_favorites_content($content) {
  if( !is_single() || !is_user_logged_in() ) return $content;
  return '<p class="wfp-favorites-link"><a href="#">Add to favorites</a></p>'. $content;
}

function wfm_favorites_scripts(){
  if ( !is_single() || !is_user_logged_in() ) return;
  wp_enqueue_script('wfm-favorites-scripts', plugins_url('/wfm-favorites/js/wfm-favorites-scripts.js', _FILE_), array('jquery'), null, true );
  wp_enqueue_style( 'wfm-favorites-style2', plugins_url('/wfm-favorites/css/wfm-favorites-style.css', _FILE_));
  wp_localize_script('wfm-favorites-scripts', 'wfmFavorites', ['url' => admin_url('admin-ajax.php')] );
}

function wp_ajax_wfm_test() {
  if( isset($_POST['test']) ) {
    print_r($_POST);
  }
  wp_die('ready ');
}
