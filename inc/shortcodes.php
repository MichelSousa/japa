<?php 

function shortcode_blog($atts,$content=null) {

	extract(shortcode_atts(array(

		'showpost' 			=> 5

		), $atts));



                   query_posts("showposts=20&category_name=blog");
                   if ( have_posts() ) : while ( have_posts() ) : the_post();?>
					        
					 <div id="post-169" class="post-169 post type-post status-publish format-standard has-post-thumbnail hentry category-video tag-sample-tag-1 tag-sample-tag-2 tag-sample-tag-3 tag-sample-tag-4 tag-sample-tag-5 tag-sample-tag-6 blog-post-big">
				        <div class="text-center">
				        	<a href="http://savannah-wp.tonybogdanov.com/freelancing/">
				        		<?php the_post_thumbnail('bog', array('class' => 'image')); ?></a></div>
				        <div class="info">
				        <div class="arrow"></div>
				        <div class="stats clearfix">
				            <div class="stat uppercase"><i class="fa fa-calendar"></i>Nov 7, 2014</div>
				            <div class="stat uppercase"><i class="fa fa-user"></i><a href="http://savannah-wp.tonybogdanov.com/author/tonybogdanov/" title="Posts by Tony Bogdanov" rel="author">Tony Bogdanov</a></div>
				            <div class="stat uppercase"><i class="fa fa-folder-o"></i><a href="http://savannah-wp.tonybogdanov.com/category/video/" rel="category tag">Video</a></div>
				                            <div class="stat uppercase"><i class="fa fa-eye"></i>847</div>
				                            <div class="stat uppercase"><i class="fa fa-comments-o"></i><a href="http://savannah-wp.tonybogdanov.com/freelancing/#comments">No comments</a></div>
				                    </div>
					    </div>
					    <div class="content">
					        <div class="sub-heading"><a href="http://savannah-wp.tonybogdanov.com/freelancing/"><?php the_title()?></a></div>
					        <p><?php echo excerpt("17")?></p>    </div>
					    <a href="http://savannah-wp.tonybogdanov.com/freelancing/" class="button button-small">Leia Mais</a>
					</div>
      
					    

						 <?php

						endwhile;else : 

					     endif; 

	   $content = ob_get_contents();
	   ob_end_clean();

	   return $content;


	}
	

add_shortcode('blog', 'shortcode_blog');		