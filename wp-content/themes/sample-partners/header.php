<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header" id="site-header">
  <div class="site-header__inner">

    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="site-header__logo">
      <span><?php bloginfo( 'name' ); ?></span>
    </a>

    <nav class="site-header__nav" aria-label="<?php esc_attr_e( 'Primary', 'sample-partners' ); ?>">
      <a href="#about"   class="site-header__nav-link">ABOUT / 事業概要</a>
      <a href="#company" class="site-header__nav-link">COMPANY / 会社概要</a>
      <a href="#access"  class="site-header__nav-link">ACCESS / アクセス</a>
      <a href="#contact" class="site-header__nav-link">CONTACT / お問い合わせ</a>
    </nav>

    <button class="site-header__menu-btn" id="menuOpen" aria-label="<?php esc_attr_e( 'Open menu', 'sample-partners' ); ?>" aria-expanded="false" aria-controls="mobileMenu">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <line x1="3" y1="6"  x2="21" y2="6"/>
        <line x1="3" y1="12" x2="21" y2="12"/>
        <line x1="3" y1="18" x2="21" y2="18"/>
      </svg>
    </button>

  </div>
</header>

<div class="mobile-menu" id="mobileMenu" aria-hidden="true">
  <button class="mobile-menu__close" id="menuClose" aria-label="<?php esc_attr_e( 'Close menu', 'sample-partners' ); ?>">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="18" y1="6"  x2="6"  y2="18"/>
      <line x1="6"  y1="6"  x2="18" y2="18"/>
    </svg>
  </button>
  <nav class="mobile-menu__nav" aria-label="<?php esc_attr_e( 'Mobile Navigation', 'sample-partners' ); ?>">
    <a href="#about"   class="mobile-menu__link">ABOUT / 事業概要</a>
    <a href="#company" class="mobile-menu__link">COMPANY / 会社概要</a>
    <a href="#access"  class="mobile-menu__link">ACCESS / アクセス</a>
    <a href="#contact" class="mobile-menu__link">CONTACT / お問い合わせ</a>
  </nav>
</div>
