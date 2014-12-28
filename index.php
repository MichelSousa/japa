<?php get_header()?>

 <!-- PAGE CONTENT START -->

    <div id="content" class="clearfix">

        <div class="container padding-minus-bottom">

            <div class="row">

                <div class="col-lg-8 col-md-8 col-sm-6 has-sidebar">

                       <?php echo do_shortcode('[blog]' ) ?>
                       
                </div><!--- fim col-sm-6 has-sidebar---->

                <div class="col-lg-4 col-md-4 col-sm-6">
                    
                    <?php get_sidebar()?>

                </div><!--- fim col-md-4 ---->

            </div><!--- fim row ---->

        </div><!--- fim container ---->

    </div><!--- fim content ---->

    <!-- PAGE CONTENT END -->

    <?php get_footer()?>