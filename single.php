<?php
/**
 * The template for displaying all single posts.
 *
 * @package fastshop
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php while ( have_posts() ) : the_post(); ?>

			<?php
			do_action( 'fastshop_single_post_before' );

			get_template_part( 'content', 'single' );

			/**
			 * @hooked fastshop_post_nav - 10
			 * @hooked fastshop_display_comments - 20
			 */
			do_action( 'fastshop_single_post_after' );
			?>

		<?php endwhile; // end of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php do_action( 'fastshop_sidebar' ); ?>
<?php get_footer(); ?>
