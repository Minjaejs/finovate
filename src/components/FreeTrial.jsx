import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import Button from './ui/Button';

const FreeTrial = () => {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">

        <div className="relative rounded-3xl md:rounded-[40px] bg-brand-dark shadow-premium overflow-hidden border border-slate-800 group">
          {/* Animated Mesh Backdrops Inside */}
          <div className="absolute inset-0 bg-mesh opacity-[0.1] pointer-events-none mix-blend-overlay transition-opacity duration-1000 group-hover:opacity-20"></div>

          <div className="absolute -top-[200px] -left-[200px] w-[500px] h-[500px] bg-gradient-to-br from-brand-primary/30 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute -bottom-[200px] -right-[200px] w-[500px] h-[500px] bg-gradient-to-tl from-brand-secondary/20 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

          <div className="p-10 md:p-14 lg:p-20 relative z-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-[800px] mx-auto"
            >
              <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
                <div className="inline-flex justify-center items-center gap-2 px-3 py-1.5 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-xl font-black tracking-[0.2em] uppercase text-[9px] shadow-sm">
                  <Zap className="w-3 h-3" />
                  Risk-Free Trial Offer
                </div>
                <div className="inline-flex justify-center items-center px-3 py-1.5 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-xl font-black tracking-[0.2em] uppercase text-[9px] shadow-sm animate-pulse">
                  Limited Slots
                </div>
              </div>

              <h2 className="text-[30px] lg:text-[38px] font-display font-black tracking-tight text-white mb-7 leading-[1.15]">
                Evaluate us securely. <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary via-emerald-300 to-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]">Zero commitment.</span>
              </h2>

              <p className="text-[15px] md:text-[18px] text-blue-100/60 mb-10 max-w-[700px] mx-auto leading-[1.65] font-medium tracking-tight">
                We offer a one-month <strong className="text-white">FREE trial</strong> for selected bookkeeping. Evaluate quality, communication, and efficiency before any long-term partnership.
              </p>

              <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-12 text-white/80 tracking-tight font-medium">
                {['No long-term contract', 'Immediate deployment', 'SOC2 data compliant'].map((text, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-[14px] md:text-[15px]">{text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="primary" className="group text-[15px] font-display !h-12 px-9 transition-all hover:shadow-premium tracking-tight">
                  Start FREE Trial
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-slate-700 text-white hover:bg-white/10 hover:border-white/30 font-display text-[15px] !h-12 px-9 transition-all hover:shadow-premium tracking-tight">
                  Security Docs
                </Button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FreeTrial;
