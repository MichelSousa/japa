     
     <aside class="sidebar">
          <div class="widget"><div class="sub-heading">Search The Blog</div>
                <form role="search" method="get" class="search-form" action="<?php echo get_option("home")?>">
                    <input type="search" class="search-field" name="s" placeholder="Search..." value="" />
                <button type="submit" class="search-submit button button-icon"><i class="fa fa-search"></i></button>
                </form>
              </div>
           <?php dynamic_sidebar( "sidebar" ); ?> 
     </aside>

    

<script type="text/javascript">
var j = jQuery.noConflict();

        j(document).ready(function(){

            j(".sidebar ul").eq(0).attr("class","list");
            j(".sidebar ul").eq(1).attr("class","list");

        })

</script>