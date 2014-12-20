<?php ob_start(); 

if ( function_exists( 'add_theme_support' ) ) { 
add_theme_support( 'post-thumbnails' );
set_post_thumbnail_size( 150, 150, true ); // default Post Thumbnail dimensions (cropped)
 


add_image_size( 'blog', 675,448); 

add_image_size( 'img-grande', 363,363); 




if ( function_exists( 'register_nav_menu' ) ) {
register_nav_menu( 'primary', 'Este é meu primeiro menu' );

}


function excerpt($limit) {
$excerpt = explode(' ', get_the_excerpt(), $limit);
if (count($excerpt)>=$limit) {
array_pop($excerpt);
$excerpt = implode(" ",$excerpt).'...';
} else {
$excerpt = implode(" ",$excerpt);
}
$excerpt = preg_replace('`\[[^\]]*\]`','',$excerpt);
return $excerpt;
}

}


add_action( 'customize_register', 'gamesquare_customize_register' );

wp_register_script('jquery', get_bloginfo('template_url').'/js/jquery.js');
wp_enqueue_script('jquery');




/* Desenvolvido por Michel Damasceno */

function gamesquare_customize_register( $wp_customize )
{
    

//===================== Upload do logotipo

$wp_customize->add_section( 'theme_image' , array(
     'title'     => __( 'Logo', 'theme' ),
      'description'   => 'Modifique o logo',
) );

$wp_customize->add_setting( 'theme_logo_image' , array(
    'default'     => '',
) );

$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'theme_logo_image', array(
	'label'        => __( 'Logo', 'theme' ),
	'section'    => 'theme_image',
	'settings'   => 'theme_logo_image',
) ) );




//===================== Número de telefone

$wp_customize->add_section( 'theme_text' , array(
     'title'     => __( 'Digite o texto de boas vindas', 'theme' ),
      'description'   => 'Digite o um texto',
) );

$wp_customize->add_setting( 'text_welcome' , array(
    'default'     => 'Fazemos do nosso um ambiente único',
) );

$wp_customize->add_control('welcome_text', array(
  'label'        => __( '', 'theme' ),
  'section'    => 'theme_text',
  'settings'   => 'text_welcome',
));



}


// Registrar áreas de widgets
function theme_widgets_init() {
 // Área 1




 register_sidebar( array (
 'name' => 'Sidebar',
 'id' => 'sidebar',
 'before_title' => '<h2  class="title-sidebar">',
  'after_title'  => '</h2>'

  ) );

 


} // end theme_widgets_init
 
add_action( 'init', 'theme_widgets_init' );

add_action( 'after_setup_theme', 'register_my_menu' );
function register_my_menu() {
  register_nav_menu( 'sidebar', 'sidebar' );
}

if ( isset( $_GET['activated'] ) ) {
 update_option( 'sidebars_widgets', $preset_widgets );
}
// update_option( 'sidebars_widgets', NULL );

// Verificar widgets nas áreas de widgets
function is_sidebar_active( $index ){
  global $wp_registered_sidebars;
 
  $widgetcolums = wp_get_sidebars_widgets();
 
  if ($widgetcolums[$index]) return true;
 
 return false;
} 


/**
 * Filters wp_title to print a neat <title> tag based on what is being viewed.
 *
 * @param string $title Default title text for current view.
 * @param string $sep Optional separator.
 * @return string The filtered title.
 */
function theme_name_wp_title( $title, $sep ) {
  if ( is_feed() ) {
    return $title;
  }
  
  global $page, $paged;

  // Add the blog name
  $title .= get_bloginfo( 'name', 'display' );

  // Add the blog description for the home/front page.
  $site_description = get_bloginfo( 'description', 'display' );
  if ( $site_description && ( is_home() || is_front_page() ) ) {
    $title .= " $sep $site_description";
  }

  // Add a page number if necessary:
  if ( ( $paged >= 2 || $page >= 2 ) && ! is_404() ) {
    $title .= " $sep " . sprintf( __( 'Page %s', '_s' ), max( $paged, $page ) );
  }

  return $title;
}
add_filter( 'wp_title', 'theme_name_wp_title', 10, 2 );





include_once('inc/shortcodes.php');


?>  



	 
	 
	