import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Search, UserCheck, Laptop, Rocket } from 'lucide-react';

const steps = [
  { step: '01', icon: <Search className="w-6 h-6 text-brand-primary" />, title: 'Consultation & Discovery', text: 'We map out your firm’s goals, current workload bottlenecks, and the precise velocity metrics you need.' },
  { step: '02', icon: <UserCheck className="w-6 h-6 text-brand-secondary" />, title: 'Sourcing & Verification', text: 'Our specialized recruiting engine algorithmically matches you with candidates from our top 2% vetted talent pool.' },
  { step: '03', icon: <Laptop className="w-6 h-6 text-brand-accent" />, title: 'Systems Onboarding', text: 'Your new team members undergo SOC2-compliant training on your firm’s specific tech stack and communication protocols.' },
  { step: '04', icon: <Rocket className="w-6 h-6 text-brand-primary" />, title: 'Live Deployment', text: 'Your fully dedicated offshore unit begins production within our encrypted facility, scaling your output immediately.' },
];

const HowItWorks = () => {
  const containerRef = useRef(null);

  return (
    <section id="how-it-works" ref={containerRef} className="py-16 md:py-24 bg-brand-dark relative z-0">
      {/* Immersive Background Architecture */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-primary/10 via-brand-secondary/5 to-transparent rounded-full blur-[120px] mix-blend-screen opacity-60"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent/10 via-slate-900/10 to-transparent rounded-full blur-[100px] mix-blend-screen opacity-50"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-16 lg:mb-20">
          <div className="max-w-[600px]">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 text-brand-primary font-black text-[10px] uppercase tracking-[0.2em] mb-7 border border-brand-primary/20 rounded-lg shadow-sm"
            >
              <span className="w-1 h-1 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(20,184,166,0.8)] animate-pulse"></span>
              Deployment Engine
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: 0.1 }}
              className="text-[28px] lg:text-[36px] font-display font-black tracking-tight text-white leading-[1.15]"
            >
              A seamless, zero-friction <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-emerald-300 to-brand-accent drop-shadow-[0_0_20px_rgba(16,185,129,0.2)]">Integration Process.</span>
            </motion.h2>
          </div>
          <div className="max-w-[400px] pb-2">
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, delay: 0.2 }}
              className="text-[15px] lg:text-[17px] text-blue-100/60 leading-[1.65] font-medium tracking-tight"
            >
              We abstract away the complexities of international hiring. In under four weeks, you deploy an integrated offshore team functioning inside your infrastructure.
            </motion.p>
          </div>
        </div>

        {/* Premium Redesigned Stepper */}
        <div className="relative">
          {/* Animated Stepper Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-800 -translate-y-1/2 hidden lg:block rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className="h-full bg-slate-900/40 border border-slate-800 rounded-[28px] p-7 lg:p-8 backdrop-blur-sm group-hover:bg-slate-800/40 group-hover:border-brand-primary/30 shadow-sm transition-all duration-500 ease-out relative overflow-hidden group-hover:-translate-y-2 flex flex-col justify-start">
                  
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-dark border border-slate-700 mb-6 group-hover:border-brand-primary group-hover:bg-brand-primary transition-all duration-500 relative">
                     <span className="absolute -top-2.5 -right-2.5 text-[9px] bg-slate-800 border border-slate-700 px-2 py-0.5 rounded-full font-black text-gray-400 group-hover:text-white group-hover:bg-brand-primary group-hover:border-white/20 transition-all duration-300">{step.step}</span>
                     <div className="group-hover:scale-110 group-hover:text-white transition-all duration-500 ease-out [&>svg]:group-hover:text-white scale-90">
                        {step.icon}
                     </div>
                  </div>

                  <h3 className="text-[18px] font-display font-bold text-white mb-3 tracking-tight group-hover:text-white transition-all duration-300">{step.title}</h3>
                  <p className="text-[14px] text-blue-100/50 leading-[1.65] font-medium tracking-tight group-hover:text-blue-100/80 transition-colors">
                    {step.text}
                  </p>

                  <div className="w-8 h-[1px] bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mt-8 opacity-20 group-hover:opacity-100 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
