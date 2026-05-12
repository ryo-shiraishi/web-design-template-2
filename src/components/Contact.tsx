import FadeInView from './FadeInView';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-brand-surface border-t border-brand-border">
      <div className="max-w-3xl mx-auto">
        <FadeInView>
          <div className="mb-16 text-center">
            <h2 className="flex flex-col gap-2 mb-6 items-center">
              <span className="font-serif-en text-brand-accent text-sm tracking-[0.2em] uppercase">Contact</span>
              <span className="font-serif-jp text-brand-primary text-3xl font-medium tracking-widest">お問い合わせ</span>
            </h2>
            <p className="font-serif-en text-brand-muted tracking-[0.3em] uppercase text-xs mb-8">Get In Touch</p>
            <p className="font-sans-jp text-brand-text text-sm leading-relaxed tracking-wider">
              ご相談・ご質問など、お気軽にお問い合わせください。
              <br className="hidden sm:block" />
              担当者より2営業日以内にご連絡いたします。
            </p>
          </div>
        </FadeInView>

        <FadeInView delay={0.2}>
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div className="w-full sm:w-1/3 flex items-center">
                <label className="text-sm font-serif-jp tracking-wider text-brand-text">
                  お名前 <span className="text-brand-accent ml-2 text-xs">必須</span>
                </label>
              </div>
              <div className="w-full sm:w-2/3">
                <input
                  type="text"
                  required
                  className="w-full bg-brand-bg border border-brand-border px-4 py-3 text-brand-text text-sm focus:outline-none focus:border-brand-primary transition-colors"
                  placeholder="山田 太郎"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div className="w-full sm:w-1/3 flex items-center">
                <label className="text-sm font-serif-jp tracking-wider text-brand-text">
                  会社名
                </label>
              </div>
              <div className="w-full sm:w-2/3">
                <input
                  type="text"
                  className="w-full bg-brand-bg border border-brand-border px-4 py-3 text-brand-text text-sm focus:outline-none focus:border-brand-primary transition-colors"
                  placeholder="株式会社サンプル"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div className="w-full sm:w-1/3 flex items-center">
                <label className="text-sm font-serif-jp tracking-wider text-brand-text">
                  メールアドレス <span className="text-brand-accent ml-2 text-xs">必須</span>
                </label>
              </div>
              <div className="w-full sm:w-2/3">
                <input
                  type="email"
                  required
                  className="w-full bg-brand-bg border border-brand-border px-4 py-3 text-brand-text text-sm focus:outline-none focus:border-brand-primary transition-colors"
                  placeholder="info@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div className="w-full sm:w-1/3 flex items-center">
                <label className="text-sm font-serif-jp tracking-wider text-brand-text">
                  電話番号
                </label>
              </div>
              <div className="w-full sm:w-2/3">
                <input
                  type="tel"
                  className="w-full bg-brand-bg border border-brand-border px-4 py-3 text-brand-text text-sm focus:outline-none focus:border-brand-primary transition-colors"
                  placeholder="03-0000-0000"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div className="w-full sm:w-1/3 flex mt-3">
                <label className="text-sm font-serif-jp tracking-wider text-brand-text">
                  お問い合わせ種別 <span className="text-brand-accent ml-2 text-xs">必須</span>
                </label>
              </div>
              <div className="w-full sm:w-2/3 relative">
                <select 
                  required
                  className="w-full bg-brand-bg border border-brand-border px-4 py-3 text-brand-text text-sm focus:outline-none focus:border-brand-primary appearance-none transition-colors cursor-pointer"
                >
                  <option value="" disabled selected>選択してください</option>
                  <option value="経営戦略">経営戦略コンサルティングについて</option>
                  <option value="業務改善">業務改善・DX推進について</option>
                  <option value="人材開発">人材・組織開発について</option>
                  <option value="その他">その他</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brand-primary">
                  ▼
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div className="w-full sm:w-1/3 flex mt-3">
                <label className="text-sm font-serif-jp tracking-wider text-brand-text">
                  お問い合わせ内容 <span className="text-brand-accent ml-2 text-xs">必須</span>
                </label>
              </div>
              <div className="w-full sm:w-2/3">
                <textarea
                  required
                  rows={5}
                  className="w-full bg-brand-bg border border-brand-border px-4 py-3 text-brand-text text-sm focus:outline-none focus:border-brand-primary transition-colors resize-y"
                  placeholder="具体的なご相談内容をご記入ください。"
                ></textarea>
              </div>
            </div>

            <div className="pt-6 border-t border-brand-border flex items-center justify-center">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input type="checkbox" required className="peer appearance-none w-5 h-5 border border-brand-border bg-brand-bg checked:bg-brand-primary checked:border-brand-primary transition-colors focus:outline-none cursor-pointer" />
                  <svg className="absolute w-3 h-3 text-brand-surface opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-sm text-brand-muted group-hover:text-brand-text transition-colors tracking-wider">個人情報取扱いへの同意（必須）</span>
              </label>
            </div>

            <div className="pt-8 flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-4 px-16 py-4 border border-brand-primary text-brand-primary font-serif-jp tracking-widest text-sm hover:bg-brand-primary hover:text-brand-surface transition-colors duration-300 w-full sm:w-auto"
              >
                <span>送 信</span>
                <span className="font-serif-en">→</span>
              </button>
            </div>
          </form>
        </FadeInView>
      </div>
    </section>
  );
}
