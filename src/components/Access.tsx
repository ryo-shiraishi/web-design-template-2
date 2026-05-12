import FadeInView from './FadeInView';

export default function Access() {
  return (
    <section id="access" className="py-32 px-6 bg-brand-bg border-t border-brand-border">
      <div className="max-w-7xl mx-auto">
        <FadeInView>
          <div className="mb-16">
            <h2 className="flex flex-col gap-2 mb-6">
              <span className="font-serif-en text-brand-accent text-sm tracking-[0.2em] uppercase">Access</span>
              <span className="font-serif-jp text-brand-primary text-3xl font-medium tracking-widest">アクセス</span>
            </h2>
            <p className="font-serif-en text-brand-muted tracking-[0.3em] uppercase text-xs">Office Access</p>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <FadeInView delay={0.2} className="order-2 lg:order-1">
            <div className="space-y-12">
              <div>
                <h3 className="font-serif-jp text-brand-accent text-sm tracking-widest mb-4">ADDRESS</h3>
                <p className="font-sans-jp text-brand-text text-sm leading-relaxed tracking-wider">
                  〒100-0001
                  <br />
                  東京都千代田区千代田1-1-1
                  <br />
                  サンプルビル 8階
                </p>
              </div>

              <div>
                <h3 className="font-serif-jp text-brand-accent text-sm tracking-widest mb-4">ACCESS</h3>
                <ul className="font-sans-jp text-brand-text text-sm leading-relaxed tracking-wider space-y-2">
                  <li>・東京メトロ 千代田線「XXX駅」徒歩3分</li>
                  <li>・JR 中央線「XXX駅」徒歩7分</li>
                  <li>・駐車場：近隣コインパーキングをご利用ください</li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif-jp text-brand-accent text-sm tracking-widest mb-4">HOURS</h3>
                <p className="font-sans-jp text-brand-text text-sm leading-relaxed tracking-wider">
                  平日 9:00〜18:00（土日祝休）
                </p>
              </div>
            </div>
          </FadeInView>

          <FadeInView delay={0.4} className="order-1 lg:order-2">
            <div className="aspect-square md:aspect-[4/3] lg:aspect-square w-full opacity-90 hover:opacity-100 transition-opacity duration-700 bg-brand-surface rounded-sm overflow-hidden shadow-lg border border-brand-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280303808788!2d139.7645498767746!3d35.68123617258713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2sTokyo%20Station!5e0!3m2!1sen!2sjp!4v1700000000000!5m2!1sen!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
