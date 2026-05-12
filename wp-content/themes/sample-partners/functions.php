<?php
defined( 'ABSPATH' ) || exit;

/* -------------------------------------------------------
   Theme Setup
------------------------------------------------------- */
function sp_theme_setup(): void {
	load_theme_textdomain( 'sample-partners', get_template_directory() . '/languages' );

	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', [ 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ] );
	add_theme_support( 'customize-selective-refresh-widgets' );

	register_nav_menus( [
		'primary' => __( 'Primary Navigation', 'sample-partners' ),
	] );
}
add_action( 'after_setup_theme', 'sp_theme_setup' );

/* -------------------------------------------------------
   Enqueue Assets
------------------------------------------------------- */
function sp_enqueue_assets(): void {
	$ver = wp_get_theme()->get( 'Version' );
	$dir = get_template_directory_uri();

	// Google Fonts
	wp_enqueue_style(
		'sp-google-fonts',
		'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Noto+Sans+JP:wght@300;400;500;700&family=Noto+Serif+JP:wght@400;500;600&display=swap',
		[],
		null
	);

	// Main stylesheet
	wp_enqueue_style( 'sp-main', $dir . '/assets/css/main.css', [ 'sp-google-fonts' ], $ver );

	// Main script (deferred)
	wp_enqueue_script( 'sp-main', $dir . '/assets/js/main.js', [], $ver, [ 'strategy' => 'defer', 'in_footer' => true ] );
}
add_action( 'wp_enqueue_scripts', 'sp_enqueue_assets' );

/* -------------------------------------------------------
   Contact Form Handler
------------------------------------------------------- */
function sp_handle_contact_form(): void {
	if (
		! isset( $_POST['sp_contact_nonce'] ) ||
		! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['sp_contact_nonce'] ) ), 'sp_contact_form' )
	) {
		return;
	}

	if ( empty( $_POST['sp_name'] ) || empty( $_POST['sp_email'] ) || empty( $_POST['sp_message'] ) || empty( $_POST['sp_type'] ) ) {
		wp_safe_redirect( add_query_arg( 'contact', 'error', wp_get_referer() ) );
		exit;
	}

	$name    = sanitize_text_field( wp_unslash( $_POST['sp_name'] ) );
	$company = sanitize_text_field( wp_unslash( $_POST['sp_company'] ?? '' ) );
	$email   = sanitize_email( wp_unslash( $_POST['sp_email'] ) );
	$phone   = sanitize_text_field( wp_unslash( $_POST['sp_phone'] ?? '' ) );
	$type    = sanitize_text_field( wp_unslash( $_POST['sp_type'] ) );
	$message = sanitize_textarea_field( wp_unslash( $_POST['sp_message'] ) );

	$to      = get_option( 'admin_email' );
	$subject = sprintf( '[お問い合わせ] %s より', $name );
	$body    = sprintf(
		"お名前: %s\n会社名: %s\nメール: %s\n電話: %s\n種別: %s\n\n%s",
		$name, $company, $email, $phone, $type, $message
	);
	$headers = [
		'Content-Type: text/plain; charset=UTF-8',
		sprintf( 'Reply-To: %s <%s>', $name, $email ),
	];

	$sent = wp_mail( $to, $subject, $body, $headers );

	wp_safe_redirect( add_query_arg( 'contact', $sent ? 'success' : 'error', wp_get_referer() ) );
	exit;
}
add_action( 'admin_post_sp_contact', 'sp_handle_contact_form' );
add_action( 'admin_post_nopriv_sp_contact', 'sp_handle_contact_form' );

/* -------------------------------------------------------
   Fallback: disable WordPress default styles on front page
------------------------------------------------------- */
function sp_dequeue_block_styles(): void {
	if ( ! is_admin() ) {
		wp_dequeue_style( 'wp-block-library' );
		wp_dequeue_style( 'wp-block-library-theme' );
		wp_dequeue_style( 'global-styles' );
	}
}
add_action( 'wp_enqueue_scripts', 'sp_dequeue_block_styles', 100 );
