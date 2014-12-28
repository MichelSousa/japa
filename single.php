 <?php get_header() ;

      if ( have_posts() ) : while ( have_posts() ) : the_post();?>

       <?php 
         $postid = get_the_ID(); 
        $comments_count = wp_count_comments($postid);
      ?>
  <!-- PAGE CONTENT START -->
    <div id="content" class="clearfix">

        <!-- Custom heading -->
        <div class="padding-bottom">
            <div data-multibackground=""  data-multibackground-layer-0-type="image" data-multibackground-layer-0-url="http://savannah-wp.tonybogdanov.com/wp-content/uploads/2014/11/SplitShire_IMG_3904.jpg" data-multibackground-layer-0-attachment="static" data-multibackground-layer-0-transitionloaded="linear,500" data-multibackground-layer-1-type="pattern" data-multibackground-layer-1-url="http://savannah-wp.tonybogdanov.com/wp-content/uploads/2014/11/overlay.png" data-multibackground-layer-1-attachment="fixed" data-multibackground-layer-1-transitionloaded="linear,500">
                <div id="heading">
                    <section class="margin-nevative-top padding-tq-top padding-tq-bottom text-center">
                        <div class="content">
                            <div class="container">
                                <div class="section-heading colored js-no-borders"><?php the_title();?></div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>

    <div class="container padding-minus-bottom">
        <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-6 has-sidebar">
                <div id="post-169" class="post-169 post type-post status-publish format-standard has-post-thumbnail hentry category-video tag-sample-tag-1 tag-sample-tag-2 tag-sample-tag-3 tag-sample-tag-4 tag-sample-tag-5 tag-sample-tag-6 blog-post-big padding-minus-bottom">
    	<div class="text-center">
            <?php the_post_thumbnail("full" ); ?> 
        </div>


    <div class="info">
        <div class="arrow"></div>
        <div class="stats clearfix">
            <div class="stat uppercase"><i class="fa fa-calendar"></i><?php the_time("M d, Y")?></div>
            <div class="stat uppercase"><i class="fa fa-user"></i><a href="http://savannah-wp.tonybogdanov.com/author/tonybogdanov/" title="Posts by Tony Bogdanov" rel="author"><?php the_author()?></a></div>
            <div class="stat uppercase"><i class="fa fa-folder-o"></i><a href="http://savannah-wp.tonybogdanov.com/category/video/" rel="category tag">Video</a></div>
                            <div class="stat uppercase"><i class="fa fa-eye"></i>847</div>
                            <div class="stat uppercase"><i class="fa fa-comments-o"></i><a href="http://savannah-wp.tonybogdanov.com/freelancing/#comments">
                                <?php if($comments_count->total_comments <=0 ){
                 echo "Nenhum comentário";
               }
               elseif($comments_count->total_comments == 1)
                { 
                  echo $comments_count->total_comments . " comentário";
                }
                else
                {
                   echo $comments_count->total_comments . " comentários";
                }
              ?></a></div>
                    </div>
    </div>
    <div class="content">
        <div class="sub-heading"><?php the_title();?></div>
        <div class="container "><div class="vc_row wpb_row vc_row-fluid">
	<div class="vc_col-sm-12 wpb_column vc_column_container">
		<div class="wpb_wrapper">
			
	<div class="wpb_text_column wpb_content_element ">
		<div class="wpb_wrapper">
 
    <?php  the_content()?>

		</div> 
	</div> 
<br><br>
<?php comments_template(); ?> 

		</div> 
	</div> 
</div></div>
 <?php

                        endwhile;else : 

                         endif; 

        ?>
</div></div>
</div>
      <div class="col-lg-4 col-md-4 col-sm-6">
                
                <?php get_sidebar()?>

              </div>

</div>
</div>


 <?php get_footer()?>