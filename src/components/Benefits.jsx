import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, TrendingUp, Monitor, CheckCircle } from 'lucide-react';

const benefits = [
  { icon: <TrendingUp className="w-[20px] h-[20px] text-brand-secondary" />, title: '60–70% Cost Reduction', text: 'Significantly lower your overhead compared to domestic hiring.' },
  { icon: <Shield className="w-[20px] h-[20px] text-brand-primary" />, title: 'Exclusive Dedicated Teams', text: 'Your offshore talent acts as a direct, exclusive extension of your UK office.' },
  { icon: <Zap className="w-[20px] h-[20px] text-brand-accent" />, title: 'Flexible & Scalable Model', text: 'Quickly scale capacity according to seasonal demands without hiring friction.' },
  { icon: <CheckCircle className="w-[20px] h-[20px] text-emerald-500" />, title: 'Reduced Hiring Risk', text: 'Bypass the slow and risky domestic recruitment cycle completely.' },
  { icon: <Monitor className="w-[20px] h-[20px] text-brand-primary" />, title: 'Zero Infrastructure Costs', text: 'We handle all hardware, software, office space, and HR management.' },
  { icon: <TrendingUp className="w-[20px] h-[20px] text-brand-secondary" />, title: 'Increased Profit Margins', text: 'Direct capital savings drop immediately to your bottom line.' },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 rounded-full blur-[120px] pointer-events-none transform -translate-y-1/2"></div>

      <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Sticky Left Sidebar Header */}
          <div className="lg:col-span-5 lg:sticky top-32 relative z-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="pr-4 lg:pr-8"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary/10 text-brand-primary font-black text-[10px] uppercase tracking-[0.2em] mb-7 border border-brand-primary/20 rounded-lg">
                Key Benefits
              </div>
              <h2 className="text-[28px] lg:text-[36px] font-display font-black tracking-tight text-brand-dark mb-7 leading-[1.15]">
                Why the fastest <br />
                growing firms <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">choose Finovate.</span>
              </h2>
              <p className="text-[15px] lg:text-[17px] text-brand-body leading-[1.6] font-medium mb-10 tracking-tight">
                Extending your capabilities globally means mitigating operational risk while generating increased profit margins.
              </p>

              <div className="group bg-slate-50 p-7 lg:p-8 rounded-3xl border border-slate-100 flex flex-col gap-6 shadow-sm relative overflow-hidden transition-all duration-500 hover:shadow-premium hover:bg-white text-left">
                <div className="absolute -right-10 -top-10 w-48 h-48 bg-gradient-to-br from-brand-accent/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-100 shadow-sm text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-500 ease-out">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[19px] font-display font-black text-brand-dark mb-3 tracking-tight">Zero Hiring Friction</h4>
                  <p className="text-[14px] font-medium text-brand-body leading-[1.6] tracking-tight">
                    Skip tedious placement cycles. We provide instant access to high-tier talent aligned strictly with your standards.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Grid Content (Timeline) */}
          <div className="lg:col-span-7 relative z-10 lg:-mt-6">
            {/* The single vertical line track perfectly aligned */}
            <div className="absolute top-10 bottom-10 left-[24px] lg:left-[30px] w-[2px] bg-slate-100 z-0 hidden sm:block"></div>

            <div className="grid gap-6 relative">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative"
                >
                  {/* Floating Circular Pin */}
                  <div className="absolute top-8 left-[13px] lg:left-[19px] w-6 h-6 z-10 hidden sm:flex items-center justify-center bg-white rounded-full">
                    <div className="w-[10px] h-[10px] rounded-full bg-brand-bg border-[2.5px] border-brand-primary shadow-[0_0_12px_rgba(20,184,166,0.3)] group-hover:scale-125 group-hover:bg-brand-primary transition-all duration-300"></div>
                  </div>

                  <div className="p-7 lg:p-8 rounded-[24px] border border-slate-100 sm:ml-[60px] lg:ml-[70px] hover:shadow-premium hover:border-brand-primary/20 bg-white transition-all duration-500 ease-out">
                    <div className="mb-6 inline-flex relative w-12 h-12 rounded-xl items-center justify-center bg-brand-bg border border-slate-100 shadow-sm group-hover:shadow-[0_8px_20px_rgba(20,184,166,0.3)] group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-500 ease-out">
                      <div className="group-hover:text-white transition-colors duration-300 scale-90">
                        {benefit.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[18px] lg:text-[19px] font-display font-black text-brand-dark mb-2.5 tracking-tight group-hover:text-brand-primary transition-colors duration-400">{benefit.title}</h3>
                      <p className="text-[14px] text-brand-body leading-[1.65] font-medium tracking-tight">
                        {benefit.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;
