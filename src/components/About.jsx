import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import Button from './ui/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Counter = ({ from, to, duration = 2, suffix = "" }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [count, to, duration, inView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-40 mt-32 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            {/* Main Image with modern offset */}
            <div className="relative z-10 rounded-[28px] overflow-hidden shadow-premium border-[6px] border-white aspect-[4/5] bg-brand-bg group">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-60"></div>
              <img
                src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?q=80&w=2070&auto=format&fit=crop"
                alt="Finovate Expertise"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                loading="lazy"
              />
            </div>

            {/* Floating stat card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: 0.2 }}
              className="absolute -bottom-6 right-6 lg:right-10 glass-premium p-4 rounded-2xl z-20 flex flex-col justify-center min-w-[180px]"
            >
              <div className="flex flex-col gap-0.5">
                <div className="text-[36px] font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-brand-primary to-brand-secondary leading-none tracking-tighter mb-0.5">60%</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight">
                  Minimum Cost <br />Reduction
                </div>
              </div>
            </motion.div>

            {/* Floating stat card 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, delay: 0.4 }}
              className="absolute top-10 -left-4 lg:-left-12 flex items-center gap-2.5 bg-brand-dark px-4 py-3 rounded-2xl shadow-premium z-20 border border-white/10"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_12px_rgba(52,211,153,0.6)]"></div>
              <div className="text-[10px] font-bold text-white tracking-[0.15em] font-display uppercase">Dedicated Staff Output</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary/10 text-brand-primary font-black text-[10px] uppercase tracking-[0.2em] mb-7 border border-brand-primary/20 rounded-lg">
              About Us
            </div>

            <h2 className="text-[28px] lg:text-[36px] font-display font-black tracking-tight text-brand-dark leading-[1.15] mb-7">
              Elite operational support. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-primary">Unmatched efficiency.</span>
            </h2>

            <div className="space-y-5 text-[15px] lg:text-[17px] text-brand-body mb-10 leading-[1.65] font-medium border-l-[3px] border-brand-primary/30 pl-6 ml-1">
              <p>
                We are a dedicated offshore outsourcing company providing high-quality accounting and operational support services to UK accounting firms.
              </p>
              <p>
                Our mission is to help firms significantly reduce operational costs while maintaining the highest standards of accuracy, compliance, and efficiency.
              </p>
              <p className="font-bold text-brand-dark">
                Our objective is simple: Reduce your staffing costs by 60–70% while improving productivity and scalability.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10"
            >
              <div className="bg-white p-5 rounded-3xl border border-gray-100 flex flex-col justify-center items-start shadow-sm hover:shadow-premium hover:-translate-y-0.5 transition-all duration-300">
                <div className="text-[28px] font-display font-black text-brand-primary mb-0.5 leading-none tracking-tighter">
                  <Counter from={0} to={100} duration={2} suffix="+" />
                </div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Clients</div>
              </div>
              <div className="bg-white p-5 rounded-3xl border border-gray-100 flex flex-col justify-center items-start shadow-sm hover:shadow-premium hover:-translate-y-0.5 transition-all duration-300">
                <div className="text-[28px] font-display font-black text-brand-secondary mb-0.5 leading-none tracking-tighter">
                  <Counter from={0} to={99} duration={2} suffix="%" />
                </div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Accuracy</div>
              </div>
              <div className="bg-white p-5 rounded-3xl border border-gray-100 flex flex-col justify-center items-start col-span-2 md:col-span-1 shadow-sm hover:shadow-premium hover:-translate-y-0.5 transition-all duration-300">
                <div className="text-[28px] font-display font-black text-brand-accent mb-0.5 leading-none tracking-tighter">
                  <Counter from={0} to={60} duration={2} suffix="%" />
                </div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Cost Savings</div>
              </div>
            </motion.div>

            <Button variant="primary" className="group px-9 !h-12 text-[15px]">
              Partner With Us
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
