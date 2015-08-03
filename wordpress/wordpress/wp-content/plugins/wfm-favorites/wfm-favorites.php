<?php
/* Plugin Name: Favorits article
  Desctiption: Plugins
  Plugin URI: http://saitobaza.ru
  Author: crazyyy
  Version: 0.2
*/

define( 'WFM_PATH', plugin_dir_path( __FILE__ ) );

require WFM_PATH.'/functions.php';

add_filter('the_content', 'wfm_favorites_content');
add_action('wp_enqueue_scripts', 'wfm_favorites_scripts');

add_action('wp_ajax_wfm_test', 'wp_ajax_wfm_test');
