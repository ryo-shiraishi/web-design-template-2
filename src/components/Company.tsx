import FadeInView from './FadeInView';

export default function Company() {
  const companyInfo = [
    { label: '会社名', value: '株式会社サンプルパートナーズ' },
    { label: '英語表記', value: 'Sample Partners Co., Ltd.' },
    { label: '設立', value: '2015年4月1日' },
    { label: '代表取締役', value: '山田 太郎' },
    { label: '資本金', value: '1,000万円' },
    { label: '従業員数', value: '20名（2025年4月現在）' },
    { label: '所在地', value: '〒100-0001 東京都千代田区千代田1-1-1 サンプルビル8階' },
    { label: '電話番号', value: '03-XXXX-XXXX' },
    { label: 'FAX', value: '03-XXXX-XXXX' },
    { label: '事業内容', value: '経営コンサルティング、業務改善支援、人材・組織開発' },
  ];

  return (
    <section id="company" className="py-32 px-6 bg-brand-surface border-t border-brand-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <FadeInView className="order-2 lg:order-1 relative aspect-[4/3] lg:aspect-auto lg:h-full">
            <img 
              src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=1500&q=80" 
              alt="Company Office" 
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700 rounded-sm shadow-lg" 
            />
          </FadeInView>

          <div className="order-1 lg:order-2">
            <FadeInView>
              <div className="mb-16">
                <h2 className="flex flex-col gap-2 mb-6">
                  <span className="font-serif-en text-brand-accent text-sm tracking-[0.2em] uppercase">Company</span>
                  <span className="font-serif-jp text-brand-primary text-3xl font-medium tracking-widest">会社概要</span>
                </h2>
                <p className="font-serif-en text-brand-muted tracking-[0.3em] uppercase text-xs">Company Profile</p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="border-t border-brand-border">
                {companyInfo.map((info, idx) => (
                  <div 
                    key={info.label} 
                    className={`flex flex-col sm:flex-row py-6 sm:py-8 border-b border-brand-border ${
                      idx === 0 ? 'bg-transparent' : ''
                    }`}
                  >
                    <dt className="w-full sm:w-48 font-serif-jp text-brand-primary font-medium text-sm tracking-wider mb-2 sm:mb-0 shrink-0">
                      {info.label}
                    </dt>
                    <dd className="w-full font-sans-jp text-brand-text text-sm tracking-wider leading-relaxed">
                      {info.value}
                    </dd>
                  </div>
                ))}
              </div>
            </FadeInView>
          </div>
        </div>
      </div>
    </section>
  );
}
