<?php get_header(); ?>

<div class="site-wrapper">
  <main id="main" class="site-main page-content">
    <div class="container">

      <?php while ( have_posts() ) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
          <header class="page-header">
            <h1 class="page-header__title"><?php the_title(); ?></h1>
          </header>
          <div class="entry-content">
            <?php the_content(); ?>
          </div>
        </article>
      <?php endwhile; ?>

    </div>
  </main>
</div>

<?php get_footer(); ?>
