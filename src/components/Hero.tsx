import { motion } from 'motion/react';
import FadeInView from './FadeInView';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-brand-bg">
      {/* Background Image - Bright Yokohama Minatomirai or Office */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=2800&q=80')] bg-cover bg-center opacity-25" />
      {/* Background Subtle Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-bg/95 via-brand-bg/70 to-brand-bg/20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-start pt-20">
        <FadeInView delay={0.2}>
          <p className="font-serif-en text-brand-accent tracking-[0.2em] text-sm md:text-base uppercase mb-6">
            Your Trusted Partner in Business
          </p>
        </FadeInView>

        <FadeInView delay={0.4}>
          <h1 className="font-serif-jp text-4xl md:text-6xl lg:text-7xl leading-[1.4] md:leading-[1.4] font-medium text-brand-primary mb-10">
            あなたのビジネスに、
            <br />
            誠実な伴走者を。
          </h1>
        </FadeInView>

        <FadeInView delay={0.6}>
          <p className="font-sans-jp text-brand-text text-sm md:text-base leading-relaxed tracking-widest max-w-xl mb-12">
            私たちは、企業と個人の課題に正面から向き合い、
            <br className="hidden md:block" />
            最善の解決策をともに考え続けます。
          </p>
        </FadeInView>

        <FadeInView delay={0.8}>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-4 border border-brand-primary text-brand-primary font-serif-jp tracking-widest text-sm hover:bg-brand-primary hover:text-brand-surface transition-colors duration-300"
          >
            お問い合わせはこちら
          </a>
        </FadeInView>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="font-serif-en text-xs tracking-[0.3em] text-brand-muted writing-vertical-rl rotate-180 mb-2">
          SCROLL DOWN
        </span>
        <motion.div
          className="w-[1px] h-16 bg-brand-primary/30 relative overflow-hidden"
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-brand-primary"
            animate={{ y: ['-100%', '200%'] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "circInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
