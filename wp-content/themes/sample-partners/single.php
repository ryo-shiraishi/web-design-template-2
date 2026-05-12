<?php get_header(); ?>

<div class="site-wrapper">
  <main id="main" class="site-main page-content">
    <div class="container">

      <?php while ( have_posts() ) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
          <header class="page-header">
            <h1 class="page-header__title"><?php the_title(); ?></h1>
            <time class="page-header__date" datetime="<?php echo esc_attr( get_the_date( 'c' ) ); ?>">
              <?php echo esc_html( get_the_date() ); ?>
            </time>
          </header>
          <div class="entry-content">
            <?php the_content(); ?>
          </div>
          <nav class="post-navigation">
            <?php
            the_post_navigation( [
              'prev_text' => '&larr; %title',
              'next_text' => '%title &rarr;',
            ] );
            ?>
          </nav>
        </article>
      <?php endwhile; ?>

    </div>
  </main>
</div>

<?php get_footer(); ?>
