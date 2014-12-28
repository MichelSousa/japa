<?php 

function shortcode_blog($atts,$content=null) {

	extract(shortcode_atts(array(

		'showpost' 			=> 5

		), $atts));

 
			         $postid = get_the_ID(); 
			        $comments_count = wp_count_comments($postid);


                   query_posts("showposts=20&category_name=blog");
                   if ( have_posts() ) : while ( have_posts() ) : the_post();?>
					        
					 <div id="post-169" class="post-169 post type-post status-publish format-standard has-post-thumbnail hentry category-video tag-sample-tag-1 tag-sample-tag-2 tag-sample-tag-3 tag-sample-tag-4 tag-sample-tag-5 tag-sample-tag-6 blog-post-big">
				        <div class="text-center">
				        	<a href="<?php the_Permalink()?>">
				        		<?php the_post_thumbnail('bog', array('class' => 'image')); ?></a></div>
				        <div class="info">
				        <div class="arrow"></div>
				        <div class="stats clearfix">
				            <div class="stat uppercase"><i class="fa fa-calendar"></i><?php the_time("M d, Y")?></div>
				            <div class="stat uppercase"><i class="fa fa-user"></i>
				            	<a href="" title="" rel="author"><?php The_author()?></a></div>
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
										                ?>
				                            </a></div>
				                    </div>
					    </div>
					    
					    <div class="content">
					        <div class="sub-heading">
					         <a href="<?php the_Permalink()?>"><?php the_title()?></a>
					        </div>
					        <p><?php echo excerpt("17")?></p>    </div>
					        <a href="<?php the_Permalink()?>" class="button button-small">Leia Mais</a>
				 	    </div>
      
					    

						 <?php

						endwhile;else : 

					     endif; 

	   $content = ob_get_contents();
	   ob_end_clean();

	   return $content;


	}
	

add_shortcode('blog', 'shortcode_blog');		



function shortcode_recentes_posts($atts,$content=null) {


                  echo "<div class='sub-heading'>Postagens Recentes</div>";

                
                   if ( have_posts() ) : while ( have_posts() ) : the_post();?>
					        
						
						   <div class="small-post">
		                    <h5><a href="<?php the_Permalink()?>" title="<?php the_title()?>"><?php the_title()?></a></h5>
		                            <a href="<?php the_Permalink()?>" title="<?php the_title()?>">
		                            	<?php the_post_thumbnail('mini-sidebar', array('class' => 'image wp-post-image')); ?>
		                          <small><?php the_time("M d, Y")?></small>
		            		 </div>

      
					    

						 <?php

						endwhile;else : 

					     endif; 

	

	   return $content;


	}
	

add_shortcode('postsSidebar', 'shortcode_recentes_posts');	


function shortcode_posts($atts,$content=null) {


                  echo "<div class='sub-heading'>Postagens Recentes</div>";

                
                   if ( have_posts() ) : while ( have_posts() ) : the_post();?>
					        
						
						 
						    <div id="post-169" class="post-169 post type-post status-publish format-standard has-post-thumbnail hentry category-video tag-sample-tag-1 tag-sample-tag-2 tag-sample-tag-3 tag-sample-tag-4 tag-sample-tag-5 tag-sample-tag-6 blog-post-big">
				        <div class="text-center">
				        	<a href="<?php the_Permalink()?>">
				        		<?php the_post_thumbnail('bog', array('class' => 'image')); ?></a></div>
				        <div class="info">
				        <div class="arrow"></div>
				        <div class="stats clearfix">
				            <div class="stat uppercase"><i class="fa fa-calendar"></i><?php the_time("M d, Y")?></div>
				            <div class="stat uppercase"><i class="fa fa-user"></i>
				            	<a href="" title="" rel="author"><?php The_author()?></a></div>
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
										                ?>
				                            </a></div>
				                    </div>
					    </div>
					    
					    <div class="content">
					        <div class="sub-heading">
					         <a href="<?php the_Permalink()?>"><?php the_title()?></a>
					        </div>
					        <p><?php echo excerpt("17")?></p>    </div>
					        <a href="<?php the_Permalink()?>" class="button button-small">Leia Mais</a>
				 	    </div>
      
      
					    

						 <?php

						endwhile;else : 

					     endif; 

	

	   return $content;


	}
	

add_shortcode('posts', 'shortcode_posts');	






   