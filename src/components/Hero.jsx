import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, TrendingUp, ShieldCheck, ChevronRight, BarChart3, PieChart } from 'lucide-react';
import Button from './ui/Button';

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-36 lg:pb-[100px] overflow-hidden bg-white z-10">
      {/* Precision Sweeping Background Stripe Style */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[80vw] lg:w-[60vw] h-full bg-brand-bg transform -skew-x-12 translate-x-32 z-0" />
        <div className="absolute inset-0 bg-mesh opacity-[0.8] z-0 mix-blend-multiply" />
      </div>

      {/* Precision Geometric Slant Cut */}
      <div className="absolute bottom-0 left-0 right-0 h-[60px] lg:h-[100px] bg-white transform -skew-y-2 origin-bottom-left z-10 pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12 relative z-20">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[500px] relative z-30"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/60 backdrop-blur-xl rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-200/50 mb-6 font-display text-[10px] uppercase font-bold text-brand-primary tracking-[0.1em]"
            >
              Strategic Outsourcing Partner
            </motion.div>

            <h1 className="text-[42px] sm:text-[52px] lg:text-[64px] font-display font-black tracking-tighter text-brand-dark leading-[1.05] mb-5 drop-shadow-sm">
              Reducing Costs. <br />
              Increasing Margins. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">Scaling Smarter.</span>
            </h1>

            <p className="text-[16px] lg:text-[18px] text-brand-body mb-8 leading-[1.6] font-medium tracking-tight">
              We provide high-quality accounting and operational support services to UK accounting firms. Reduce staffing costs by 60–70% while improving productivity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a href="#pricing" className="inline-block">
                <Button variant="primary" className="group px-7 !h-12 text-[14px] font-display w-full sm:w-auto">
                  Start FREE trial
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#contact" className="inline-block">
                <Button variant="outline" className="group px-7 !h-12 text-[14px] font-display w-full sm:w-auto">
                  Contact sales
                  <ChevronRight className="ml-0.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-[13px] text-brand-body font-semibold border-t border-gray-100 pt-5 mt-6">
              <div className="flex items-center gap-2 group cursor-default hover:bg-brand-bg px-2 py-1.5 rounded-lg -ml-2 transition-colors duration-300">
                <ShieldCheck className="h-4 w-4 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
                <span>GDPR & SOC2</span>
              </div>
              <div className="flex items-center gap-2 group cursor-default hover:bg-brand-bg px-2 py-1.5 rounded-lg transition-colors duration-300">
                <Activity className="h-4 w-4 text-brand-primary group-hover:scale-110 transition-transform duration-300" />
                <span>Dedicated Team</span>
              </div>
              <div className="flex items-center gap-2 group cursor-default hover:bg-brand-bg px-2 py-1.5 rounded-lg transition-colors duration-300">
                <div className="flex -space-x-1.5">
                  <div className="w-5 h-5 rounded-full bg-gray-200 border-2 border-white shadow-sm flex items-center justify-center overflow-hidden"><img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80" alt="avatar" className="w-full h-full object-cover" /></div>
                  <div className="w-5 h-5 rounded-full bg-gray-300 border-2 border-white shadow-sm flex items-center justify-center overflow-hidden"><img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80" alt="avatar" className="w-full h-full object-cover" /></div>
                </div>
                <span>Trusted by UK Firms</span>
              </div>
            </div>
          </motion.div>

          <div className="relative w-full max-w-[600px] mx-auto lg:ml-auto h-[400px] lg:h-[500px] z-20 hidden md:block perspective-[2000px]">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-tr from-brand-primary/20 to-brand-secondary/20 blur-[100px] rounded-full z-0 pointer-events-none"></div>

            <motion.div
              initial={{ opacity: 0, rotateX: 10, rotateY: -10, rotateZ: 2, scale: 0.95 }}
              animate={{ opacity: 1, rotateX: 5, rotateY: -5, rotateZ: 2, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 right-0 w-[100%] h-[350px] lg:h-[450px] bg-white rounded-3xl shadow-premium border border-gray-100/50 overflow-hidden transform-style-3d group z-10 p-2"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-brand-bg">
                <div className="absolute inset-0 bg-brand-dark/[0.02] mix-blend-multiply z-10 pointer-events-none" />

                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600"
                  alt="Dashboard"
                  className="w-full h-full object-cover scale-[1.03] group-hover:scale-105 transition-transform duration-[2s] ease-out opacity-90"
                />

                <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
                  <div className="flex gap-2 bg-white/60 backdrop-blur-lg px-3 py-1.5 rounded-full border border-white/60 shadow-sm align-middle">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse mt-1" />
                    <span className="text-[9px] font-bold text-brand-dark uppercase tracking-[0.1em] font-display">Live Operations Sync</span>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-white/40 flex items-center gap-3 z-20"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-secondary/10 flex items-center justify-center">
                    <PieChart className="w-4 h-4 text-brand-secondary" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Efficiency Gain</div>
                    <div className="text-[16px] font-black text-brand-dark tracking-tight">+240%</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -80, y: 50 }}
              animate={{ opacity: 1, x: -40, y: 30 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="absolute bottom-[10%] left-[-20px] w-[240px] bg-white/95 backdrop-blur-2xl rounded-2xl shadow-premium border border-white p-5 z-30 transform hover:-translate-y-2 hover:shadow-premium transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-accent text-white rounded-xl shadow-md flex items-center justify-center shrink-0">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[9px] text-gray-500 font-bold tracking-[0.15em] uppercase mb-0.5 font-display">Overhead Cost</div>
                  <div className="text-[14px] font-display font-black text-brand-dark tracking-tight leading-none">Reduced by 70%</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-1 items-end h-6">
                  <div className="w-1 h-4 bg-brand-primary rounded-full animate-pulse"></div>
                  <div className="w-1 h-3 bg-brand-primary/30 rounded-full"></div>
                  <div className="w-1 h-6 bg-brand-primary rounded-full animate-pulse"></div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="text-[16px] font-black text-brand-primary tracking-tighter leading-none mb-1">Active</div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
