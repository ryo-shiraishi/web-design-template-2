<?php get_header(); ?>

<div class="site-wrapper">
  <main id="main" class="site-main page-content">
    <div class="container">

      <?php if ( have_posts() ) : ?>
        <?php while ( have_posts() ) : the_post(); ?>
          <article id="post-<?php the_ID(); ?>" <?php post_class( 'post-item' ); ?>>
            <header class="post-item__header">
              <h2 class="post-item__title">
                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
              </h2>
              <time class="post-item__date" datetime="<?php echo esc_attr( get_the_date( 'c' ) ); ?>">
                <?php echo esc_html( get_the_date() ); ?>
              </time>
            </header>
            <div class="post-item__excerpt">
              <?php the_excerpt(); ?>
            </div>
          </article>
        <?php endwhile; ?>

        <div class="pagination">
          <?php the_posts_pagination(); ?>
        </div>

      <?php else : ?>
        <p class="no-posts"><?php esc_html_e( '投稿が見つかりませんでした。', 'sample-partners' ); ?></p>
      <?php endif; ?>

    </div>
  </main>
</div>

<?php get_footer(); ?>
