<?php get_header()?>

 <!-- PAGE CONTENT START -->
    <div id="content" class="clearfix">

    <div class="container padding-minus-bottom">
        <div class="row">

            <div class="col-lg-8 col-md-8 col-sm-6 has-sidebar">
                   <?php echo do_shortcode('[posts]' ) ?>
            </div><!--- fim content---->

            <div class="col-lg-4 col-md-4 col-sm-6">
                
                <?php get_sidebar()?>

              </div>
        </div>
    </div>
    </div>
    <!-- PAGE CONTENT END -->

    <?php get_footer()?>