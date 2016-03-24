<?php
/**
 * @package fastshop
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> itemscope="" itemtype="http://schema.org/BlogPosting">

	<header class="entry-header">
		<?php
		if ( is_single() ) {
			fastshop_posted_on();
		}
		the_title( sprintf( '<h1 class="entry-title" itemprop="name headline"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h1>' );
		?>
	</header><!-- .entry-header -->
	<aside class="entry-meta">
		<?php
		if ( ! is_single() ) {
			if ( 'post' == get_post_type() ) {
				fastshop_posted_on();
			}
		}
		if ( 'post' == get_post_type() ) : // Hide category and tag text for pages on Search ?>

			<?php
			/* translators: used between list items, there is a space after the comma */
			$categories_list = get_the_category_list( __( ', ', 'fastshop' ) );

			if ( $categories_list && fastshop_categorized_blog() ) : ?>
				<span class="cat-links">
					<?php
					echo '<span class="screen-reader-text">' . esc_attr( __( 'Categories: ', 'fastshop' ) ) . '</span>';
					echo wp_kses_post( $categories_list );
					?>
				</span>
			<?php endif; // End if categories ?>

			<?php
			/* translators: used between list items, there is a space after the comma */
			$tags_list = get_the_tag_list( '', __( ', ', 'fastshop' ) );

			if ( $tags_list ) : ?>
				<span class="tags-links">
					<?php
					echo '<span class="screen-reader-text">' . esc_attr( __( 'Tags: ', 'fastshop' ) ) . '</span>';
					echo wp_kses_post( $tags_list );
					?>
				</span>
			<?php endif; // End if $tags_list ?>

		<?php endif; // End if 'post' == get_post_type() ?>

		<?php if ( ! post_password_required() && ( comments_open() || '0' != get_comments_number() ) ) : ?>
			<span class="comments-link"><?php comments_popup_link( __( 'Leave a comment', 'fastshop' ), __( '1 Comment', 'fastshop' ), __( '% Comments', 'fastshop' ) ); ?></span>
		<?php endif; ?>
	</aside>
	<div class="entry-content" itemprop="articleBody">
		<?php
		if ( is_single() ) {

			fastshop_post_thumbnail( 'full' );

			the_content(
				sprintf(
					__( 'Continue reading %s', 'fastshop' ),
					'<span class="screen-reader-text">' . get_the_title() . '</span>'
				)
			);

		} else {
			if ( in_array( 'medium_large', get_intermediate_image_sizes() ) ) {
				fastshop_post_thumbnail( 'medium_large' );
			} else {
				fastshop_post_thumbnail( 'medium' );
			}
			the_excerpt();
		}

		wp_link_pages( array(
			'before' => '<div class="page-links">' . __( 'Pages:', 'fastshop' ),
			'after'  => '</div>',
		) );
		?>
	</div><!-- .entry-content -->
	<?php fastshop_display_comments() ?>
</article><!-- #post-## -->