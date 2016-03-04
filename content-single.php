<?php
/**
 * @package fastshop
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> itemscope="" itemtype="http://schema.org/BlogPosting">

	<?php
	/**
	 * @hooked fastshop_post_header - 10
	 * @hooked fastshop_post_meta - 20
	 * @hooked fastshop_post_content - 30
	 */
	do_action( 'fastshop_single_post' );
	?>

</article><!-- #post-## -->
