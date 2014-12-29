<!DOCTYPE html>
<html lang="en-US">
<head>
    <!-- Meta charset -->
    <meta charset="UTF-8">

    <!-- Viewport specification for mobile devices -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Basic page information -->
    <meta name="author" content="">
    <meta name="description" content="Savannah May">
    <title><?php if(is_home()) { echo bloginfo('name'); } else { wp_title(''); } ?></title>

    <!-- Favicons -->
    <link rel="shortcut icon" href=""><link rel="apple-touch-icon-precomposed" sizes="144x144" href="">
  
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
        <script src="http://savannah-wp.tonybogdanov.com/wp-content/themes/savannah/assets/js/html5shiv.js"></script>
        <script src="http://savannah-wp.tonybogdanov.com/wp-content/themes/savannah/assets/js/respond.min.js"></script>
    <![endif]-->

    <!-- WP_HEAD -->

<link rel='stylesheet' id='tb-live-preview-css'  href='<?php bloginfo("template_url")?>/css/live-preview.css' type='text/css' media='all' />



<link rel="stylesheet" id="contact-form-7-css" href="<?php bloginfo("template_url")?>/styles.css" type="text/css" media="all">

<link rel="stylesheet" id="js_composer_front-css" href="<?php bloginfo("template_url")?>/css/js_composer.css" type="text/css" media="all">
<link rel="stylesheet" id="tb-bootstrap-css" href="<?php bloginfo("template_url")?>/css/bootstrap.css" type="text/css" media="all">
<link rel="stylesheet" id="tb-fontawesome-css" href="<?php bloginfo("template_url")?>/css/font-awesome.css" type="text/css" media="all">
<link rel="stylesheet" id="tb-animate-css" href="<?php bloginfo("template_url")?>/css/animate.css" type="text/css" media="all">
<link rel="stylesheet" id="tb-styles-css" href="<?php bloginfo("template_url")?>/css/styles_002.css" type="text/css" media="all">

<link rel="stylesheet" id="tb-retina-css" href="<?php bloginfo("template_url")?>/css/retina.css" type="text/css" media="all">


<link rel="stylesheet" id="tb-small-css" href="<?php bloginfo("template_url")?>/css/small.css" type="text/css" media="screen and (min-width: 768px)">
<link rel="stylesheet" id="tb-medium-css" href="<?php bloginfo("template_url")?>/css/medium.css" type="text/css" media="screen and (min-width: 992px)">
<link rel="stylesheet" id="tb-less-css" href="<?php bloginfo("template_url")?>/css/less.css" type="text/css" media="all">
<link rel="stylesheet" id="tb-less-small-css" href="<?php bloginfo("template_url")?>/css/less-small.css" type="text/css" media="screen and (min-width: 768px)">
<link rel="stylesheet" id="js_composer_custom_css-css" href="<?php bloginfo("template_url")?>/css/custom.css" type="text/css" media="screen">
<script type="text/javascript" src="<?php bloginfo("template_url")?>/js/jquery.js"></script>
<script type="text/javascript" src="<?php bloginfo("template_url")?>/js/jquery-migrate.js"></script>
<script type="text/javascript" src="<?php bloginfo("template_url")?>/js/jquery_003.js"></script>



<meta name="generator" content="WordPress 4.0.1" />

	<style type="text/css">.recentcomments a{display:inline !important;padding:0 !important;margin:0 !important;}</style>
	<style type="text/css">.recentcomments a{display:inline !important;padding:0 !important;margin:0 !important;}</style>
<meta name="generator" content="Powered by Visual Composer - drag and drop page builder for WordPress."/>
<!--[if IE 8]><link rel="stylesheet" type="text/css" href="http://savannah-wp.tonybogdanov.com/wp-content/plugins/js_composer/assets/css/vc-ie8.css" media="screen"><![endif]-->
    <!-- Custom color CSS -->
    <style type="text/css" id="custom-color-css" data-tb-cc-template="a,a:hover,a:visited,a:active,a:focus{color:#c2973c}.section-heading:before,.section-heading:after,.section-heading .tl,.section-heading .tr,.section-heading .br,.section-heading .bl{border-color:#c2973c}.sub-heading:after,.comment-reply-title:after{background-color:#c2973c}.button,.button:hover,.button:visited,.button:focus,.button:active{border-color:#c2973c;color:#c2973c}.button.button-clear:active,.button.button-clear.active,.active&gt;.button.button-clear{color:#c2973c !important}.button:active,.button.active,.active&gt;.button{background-color:#c2973c}.button:not(.button-clear):hover,input:focus,select:focus,textarea:focus{-webkit-box-shadow:inset #c2973c 0 0 0 2px;-moz-box-shadow:inset #c2973c 0 0 0 2px;-ms-box-shadow:inset #c2973c 0 0 0 2px;-o-box-shadow:inset #c2973c 0 0 0 2px;box-shadow:inset #c2973c 0 0 0 2px}.button-inverted:active{color:#c2973c !important}.button-big.button-icon-left .fa,.button-big.button-icon-right .fa{border-color:#c2973c}blockquote,blockquote p{color:#c2973c}code,kbd,pre,tt{background-color:#c2973c}input,select,textarea{border-color:#c2973c}.colored,.colored:hover,.colored:visited,.colored:focus,.colored:active{color:#c2973c !important}.coloredbg{background:#c2973c !important}.navbar li.active&gt;a&gt;span,.navbar li.current-menu-ancestor&gt;a&gt;span{border-color:#c2973c}.navbar-brand,.navbar-brand:hover,.navbar-brand:focus,.navbar-brand:visited,.navbar-brand:active{border-top-color:#c2973c}.nav-wrapper-brand,.nav-close,.nav-close:hover,.nav-close:visited,.nav-close:active,.nav-close:focus{color:#c2973c}.nav li:not(.active):not(.current-menu-ancestor)&gt;a&gt;span .tl:before,.nav li:not(.active):not(.current-menu-ancestor)&gt;a&gt;span .tl:after,.nav li:not(.active):not(.current-menu-ancestor)&gt;a&gt;span .br:before,.nav li:not(.active):not(.current-menu-ancestor)&gt;a&gt;span .br:after{background-color:#c2973c}.nav&gt;li&gt;ul,.nav ul ul{border-color:#c2973c}.nav ul li&gt;a&gt;span:before{background-color:#c2973c}nav li.node:before{border-left-color:#c2973c}.cover .one,.cover .two{border-color:#c2973c}.hero-heading:before,.hero-heading:after,.hero-heading .tl,.hero-heading .tr,.hero-heading .br,.hero-heading .bl{border-color:#c2973c}.hero-amp{color:#c2973c}.hero-amp:before,.hero-amp:after{background-color:#c2973c}.list li .bullet{border-color:#c2973c}.datetime{background-color:#c2973c}.datetime:before{border-right-color:#c2973c}.skill-bar .bar{border-color:#c2973c}.skill-bar .bar:before,.skill-bar .bar:after,.skill-bar .fill,.skill-bar .fill:before,.skill-bar .fill:after,.skill-bar .value{background-color:#c2973c}.skill-bar .value:after{border-top-color:#c2973c}.footer-label{color:#c2973c}.history,.history .icon{border-color:#c2973c}.history .icon .fa{color:#c2973c}.portfolio .item .overlay{background-color:transparent}.portfolio .item:hover .overlay{background-color:#c2973c}.portfolio .item .overlay .tile{background-color:#c2973c}.blog-post .info,.blog-post-small .info,.blog-post-big .info{background-color:#c2973c}.blog-post .info .arrow,.blog-post-small .info .arrow,.blog-post-big .info .arrow{border-top-color:#c2973c}@media screen and (min-width:992px){:not(.has-sidebar)&gt;.blog-post.on-the-left .info .arrow{border-left-color:#c2973c}:not(.has-sidebar)&gt;.blog-post.on-the-right .info .arrow{border-right-color:#c2973c}}.expandable:before{border-top-color:#c2973c}.diamond .background{background-color:#c2973c}body .author{background-color:#c2973c}.iconed .iconed-icon{color:#c2973c}.flickr-feed-item a .hover{background-color:#c2973c}.testimonials-logo a:hover img{background-color:#c2973c}.testimonials-box{background-color:#c2973c}.testimonials-arrow-left{border-top-color:#c2973c;border-right-color:#c2973c}.testimonials-arrow-right{border-top-color:#c2973c;border-left-color:#c2973c}footer .copyright p,footer .copyright a{color:#c2973c !important}">a,a:hover,a:visited,a:active,a:focus{color:#c2973c}.section-heading:before,.section-heading:after,.section-heading .tl,.section-heading .tr,.section-heading .br,.section-heading .bl{border-color:#c2973c}.sub-heading:after,.comment-reply-title:after{background-color:#c2973c}.button,.button:hover,.button:visited,.button:focus,.button:active{border-color:#c2973c;color:#c2973c}.button.button-clear:active,.button.button-clear.active,.active>.button.button-clear{color:#c2973c !important}.button:active,.button.active,.active>.button{background-color:#c2973c}.button:not(.button-clear):hover,input:focus,select:focus,textarea:focus{-webkit-box-shadow:inset #c2973c 0 0 0 2px;-moz-box-shadow:inset #c2973c 0 0 0 2px;-ms-box-shadow:inset #c2973c 0 0 0 2px;-o-box-shadow:inset #c2973c 0 0 0 2px;box-shadow:inset #c2973c 0 0 0 2px}.button-inverted:active{color:#c2973c !important}.button-big.button-icon-left .fa,.button-big.button-icon-right .fa{border-color:#c2973c}blockquote,blockquote p{color:#c2973c}code,kbd,pre,tt{background-color:#c2973c}input,select,textarea{border-color:#c2973c}.colored,.colored:hover,.colored:visited,.colored:focus,.colored:active{color:#c2973c !important}.coloredbg{background:#c2973c !important}.navbar li.active>a>span,.navbar li.current-menu-ancestor>a>span{border-color:#c2973c}.navbar-brand,.navbar-brand:hover,.navbar-brand:focus,.navbar-brand:visited,.navbar-brand:active{border-top-color:#c2973c}.nav-wrapper-brand,.nav-close,.nav-close:hover,.nav-close:visited,.nav-close:active,.nav-close:focus{color:#c2973c}.nav li:not(.active):not(.current-menu-ancestor)>a>span .tl:before,.nav li:not(.active):not(.current-menu-ancestor)>a>span .tl:after,.nav li:not(.active):not(.current-menu-ancestor)>a>span .br:before,.nav li:not(.active):not(.current-menu-ancestor)>a>span .br:after{background-color:#c2973c}.nav>li>ul,.nav ul ul{border-color:#c2973c}.nav ul li>a>span:before{background-color:#c2973c}nav li.node:before{border-left-color:#c2973c}.cover .one,.cover .two{border-color:#c2973c}.hero-heading:before,.hero-heading:after,.hero-heading .tl,.hero-heading .tr,.hero-heading .br,.hero-heading .bl{border-color:#c2973c}.hero-amp{color:#c2973c}.hero-amp:before,.hero-amp:after{background-color:#c2973c}.list li .bullet{border-color:#c2973c}.datetime{background-color:#c2973c}.datetime:before{border-right-color:#c2973c}.skill-bar .bar{border-color:#c2973c}.skill-bar .bar:before,.skill-bar .bar:after,.skill-bar .fill,.skill-bar .fill:before,.skill-bar .fill:after,.skill-bar .value{background-color:#c2973c}.skill-bar .value:after{border-top-color:#c2973c}.footer-label{color:#c2973c}.history,.history .icon{border-color:#c2973c}.history .icon .fa{color:#c2973c}.portfolio .item .overlay{background-color:transparent}.portfolio .item:hover .overlay{background-color:#c2973c}.portfolio .item .overlay .tile{background-color:#c2973c}.blog-post .info,.blog-post-small .info,.blog-post-big .info{background-color:#c2973c}.blog-post .info .arrow,.blog-post-small .info .arrow,.blog-post-big .info .arrow{border-top-color:#c2973c}@media screen and (min-width:992px){:not(.has-sidebar)>.blog-post.on-the-left .info .arrow{border-left-color:#c2973c}:not(.has-sidebar)>.blog-post.on-the-right .info .arrow{border-right-color:#c2973c}}.expandable:before{border-top-color:#c2973c}.diamond .background{background-color:#c2973c}body .author{background-color:#c2973c}.iconed .iconed-icon{color:#c2973c}.flickr-feed-item a .hover{background-color:#c2973c}.testimonials-logo a:hover img{background-color:#c2973c}.testimonials-box{background-color:#c2973c}.testimonials-arrow-left{border-top-color:#c2973c;border-right-color:#c2973c}.testimonials-arrow-right{border-top-color:#c2973c;border-left-color:#c2973c}footer .copyright p,footer .copyright a{color:#c2973c !important}</style>
       <?php wp_head()?>
    <!-- Custom CSS -->
    </head>
<body id="body" class="page page-id-204 page-template-default multibackground-disablemousewheeloverride wpb-js-composer js-comp-ver-4.3.4 vc_responsive">

    <!-- Top bar -->
    <div id="topbar">
        <div class="top-bar dark">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6" id="topbar-top-left">
                        <a href="#contacts" class="footer-label uppercase"><span class="button button-icon button-clear pull-left">
                            <i class="fa fa-briefcase"></i></span><span class="pull-left">Contrate-me agora!</span></a>
                    </div>
                    <div class="col-lg-6 col-md-6 text-right">

                        <div class="pull-right" id="topbar-top-right">
                             <?php dynamic_sidebar( "socialtopo" ); ?> 
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="topbar-expandable" class="dark">
            <div class="expandable">
                <a href="#" class="diamond">
                    <span class="background"></span>
                    <span class="line1"></span>
                    <span class="line2"></span>
                </a>
                <div class="expandable-content">
                    <div class="expandable-content-inner">
<div class="container ">
    

    <div class="vc_row wpb_row vc_row-fluid">
	

	 <?php dynamic_sidebar( "topo" ); ?> 

	
</div>
    </div>
</div>
		</div> 
	</div> 
</div></div>                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Hero -->
    <div id="hero" data-multibackground=""  data-multibackground-layer-0-type="image" data-multibackground-layer-0-url="http://savannah-wp.tonybogdanov.com/wp-content/uploads/2014/11/hero.jpg" data-multibackground-layer-0-attachment="parallax" data-multibackground-layer-0-parallaxspeed="1.0" data-multibackground-layer-0-transitionloaded="linear,500" data-multibackground-layer-1-type="pattern" data-multibackground-layer-1-url="http://savannah-wp.tonybogdanov.com/wp-content/uploads/2014/11/overlay.png" data-multibackground-layer-1-attachment="fixed" data-multibackground-layer-1-transitionloaded="linear,0">
        <div class="container">
            <div class="content padding-top padding-tq-bottom text-center">
                <div class="hero-heading uppercase"><span><?php if(is_home()) { echo bloginfo('name'); } else { wp_title(''); } ?> </span></div>
                <div class="hero-subheading uppercase" data-rotate-1="Beautiful person" data-rotate-2="Amateur guitar player" data-rotate-speed="5000" data-rotate-delay="0"><?php bloginfo('description'); ?></div>
                <div class="hero-amp" data-rotate-1="&amp;" data-rotate-2="&amp;" data-rotate-speed="5000" data-rotate-delay="300">&amp;</div>
                <div class="hero-handscript lowercase" data-rotate-1="People lover" data-rotate-2="Awesome story teller" data-rotate-speed="5000" data-rotate-delay="600">Graphic designer</div>
                <div id="hero-cover-space" class="cover-space hidden-sm hidden-xs"></div>
            </div>
        </div>
        <div id="hero-cover" class="cover hidden-sm hidden-xs">
            <div class="one"></div>
            <div class="two"></div>
            <img src="<?php echo get_theme_mod("theme_logo_image") ?>" alt="" />
        </div>
    </div>


    <!-- Navigation -->
    <nav class="navbar" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a href="http://savannah-wp.tonybogdanov.com/#body" class="navbar-brand"><span id="tagline">Savannah May</span></a>
            </div>
            <div class="collapse navbar-collapse">
                
                 <ul class="nav navbar-nav">

                    <?php 



                                $defaults = array(
                                    'theme_location'  => '',
                                    'menu'            => false,
                                    'container' => false,
                                    'container_class' => '',
                                    'container_id'    => '',
                                    
                                    'menu_class'      => '',
                                    'menu_id'         => '',
                                    'echo'            => true,
                                    'fallback_cb'     => '',
                                    'before'          => '',
                                    'after'           => '',
                                    'link_before'     => '<span>',
                                    'link_after'      => '<span class="tl"></span>
                                                            <span class="br"></span>
                                                            </span>',
                                    'items_wrap'      => '%3$s',
                                    'depth'           => 0,
                                    'walker'          => ''
                                );

                               wp_nav_menu( $defaults );





                    ?>

                          
                    </ul>


          </div>
        </div>
    </nav>