<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package TWS_Master_Pro
 */

get_header();
?>
	<?php

		if(wp_is_mobile()):
			get_template_part( 'template-parts/mobile/content', 'page' ); // page content
		else:
			get_template_part( 'template-parts/desktop/content', 'page' ); // page content
		endif;
	?>	
<?php
get_footer();
