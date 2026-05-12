<footer class="site-footer">
  <div class="site-footer__inner">

    <nav class="site-footer__nav" aria-label="<?php esc_attr_e( 'Footer Navigation', 'sample-partners' ); ?>">
      <div class="site-footer__nav-item">
        <a href="#about" class="site-footer__nav-link">事業概要</a>
        <span class="site-footer__nav-sep" aria-hidden="true"></span>
      </div>
      <div class="site-footer__nav-item">
        <a href="#company" class="site-footer__nav-link">会社概要</a>
        <span class="site-footer__nav-sep" aria-hidden="true"></span>
      </div>
      <div class="site-footer__nav-item">
        <a href="#access" class="site-footer__nav-link">アクセス</a>
        <span class="site-footer__nav-sep" aria-hidden="true"></span>
      </div>
      <div class="site-footer__nav-item">
        <a href="#contact" class="site-footer__nav-link">お問い合わせ</a>
      </div>
    </nav>

    <p class="site-footer__copy">
      &copy; <?php echo esc_html( gmdate( 'Y' ) ); ?> <?php bloginfo( 'name' ); ?> Co., Ltd. All Rights Reserved.
    </p>

  </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
