<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package fastshop
 */
?>

		</div><!-- .col-full -->
	</div><!-- #content -->

	<?php do_action( 'fastshop_before_footer' ); ?>

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="col-full">

			<?php
			/**
			 * @hooked fastshop_footer_widgets - 10
			 * @hooked fastshop_credit - 20
			 */
			do_action( 'fastshop_footer' ); ?>

		</div><!-- .col-full -->
	</footer><!-- #colophon -->

	<?php do_action( 'fastshop_after_footer' ); ?>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
