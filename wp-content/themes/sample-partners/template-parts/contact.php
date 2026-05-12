<?php
$contact_status = isset( $_GET['contact'] ) ? sanitize_key( $_GET['contact'] ) : '';
?>

<section id="contact" class="contact section section--bg-surface section--border-default">
  <div class="container container--narrow">

    <div class="fade-in-view">
      <div class="contact__heading-wrap">
        <h2 class="section-heading section-heading--center">
          <span class="section-heading__en">Contact</span>
          <span class="section-heading__jp">お問い合わせ</span>
        </h2>
        <p class="section-sub section-sub--center">Get In Touch</p>
        <p class="contact__lead">
          ご相談・ご質問など、お気軽にお問い合わせください。<br class="contact__lead-br">
          担当者より2営業日以内にご連絡いたします。
        </p>
      </div>
    </div>

    <?php if ( 'success' === $contact_status ) : ?>
      <div class="contact__notice contact__notice--success" role="alert">
        お問い合わせを受け付けました。2営業日以内にご連絡いたします。
      </div>
    <?php elseif ( 'error' === $contact_status ) : ?>
      <div class="contact__notice contact__notice--error" role="alert">
        送信に失敗しました。お手数ですが再度お試しください。
      </div>
    <?php endif; ?>

    <div class="fade-in-view" data-delay="0.2">
      <form
        class="contact-form"
        method="post"
        action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>"
        novalidate
      >
        <?php wp_nonce_field( 'sp_contact_form', 'sp_contact_nonce' ); ?>
        <input type="hidden" name="action" value="sp_contact">

        <div class="contact-form__row">
          <div class="contact-form__label-wrap">
            <label for="sp_name" class="contact-form__label">
              お名前 <span class="contact-form__required">必須</span>
            </label>
          </div>
          <div class="contact-form__field-wrap">
            <input type="text" id="sp_name" name="sp_name" required class="contact-form__input" placeholder="山田 太郎">
          </div>
        </div>

        <div class="contact-form__row">
          <div class="contact-form__label-wrap">
            <label for="sp_company" class="contact-form__label">会社名</label>
          </div>
          <div class="contact-form__field-wrap">
            <input type="text" id="sp_company" name="sp_company" class="contact-form__input" placeholder="株式会社サンプル">
          </div>
        </div>

        <div class="contact-form__row">
          <div class="contact-form__label-wrap">
            <label for="sp_email" class="contact-form__label">
              メールアドレス <span class="contact-form__required">必須</span>
            </label>
          </div>
          <div class="contact-form__field-wrap">
            <input type="email" id="sp_email" name="sp_email" required class="contact-form__input" placeholder="info@example.com">
          </div>
        </div>

        <div class="contact-form__row">
          <div class="contact-form__label-wrap">
            <label for="sp_phone" class="contact-form__label">電話番号</label>
          </div>
          <div class="contact-form__field-wrap">
            <input type="tel" id="sp_phone" name="sp_phone" class="contact-form__input" placeholder="03-0000-0000">
          </div>
        </div>

        <div class="contact-form__row">
          <div class="contact-form__label-wrap contact-form__label-wrap--top">
            <label for="sp_type" class="contact-form__label">
              お問い合わせ種別 <span class="contact-form__required">必須</span>
            </label>
          </div>
          <div class="contact-form__field-wrap contact-form__field-wrap--select">
            <select id="sp_type" name="sp_type" required class="contact-form__select">
              <option value="" disabled selected>選択してください</option>
              <option value="経営戦略">経営戦略コンサルティングについて</option>
              <option value="業務改善">業務改善・DX推進について</option>
              <option value="人材開発">人材・組織開発について</option>
              <option value="その他">その他</option>
            </select>
            <span class="contact-form__select-arrow" aria-hidden="true">▼</span>
          </div>
        </div>

        <div class="contact-form__row">
          <div class="contact-form__label-wrap contact-form__label-wrap--top">
            <label for="sp_message" class="contact-form__label">
              お問い合わせ内容 <span class="contact-form__required">必須</span>
            </label>
          </div>
          <div class="contact-form__field-wrap">
            <textarea id="sp_message" name="sp_message" required rows="5" class="contact-form__textarea" placeholder="具体的なご相談内容をご記入ください。"></textarea>
          </div>
        </div>

        <div class="contact-form__consent">
          <label class="contact-form__consent-label">
            <span class="contact-form__checkbox-wrap">
              <input type="checkbox" name="sp_consent" required class="contact-form__checkbox">
              <span class="contact-form__checkmark" aria-hidden="true">
                <svg viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </span>
            <span class="contact-form__consent-text">個人情報取扱いへの同意（必須）</span>
          </label>
        </div>

        <div class="contact-form__submit-wrap">
          <button type="submit" class="contact-form__submit">
            <span>送 信</span>
            <span class="contact-form__submit-arrow">→</span>
          </button>
        </div>

      </form>
    </div>

  </div>
</section>
