import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, ShieldCheck, CheckCircle2, X } from 'lucide-react';

const comparisonData = [
  { role: 'Bookkeeper', local: '£27,000 – £35,000', finovate: '£10,000 – £12,000', savings: '60–70%' },
  { role: 'Full Client Accountant', local: '£35,000 – £50,000', finovate: '£18,000 – £24,000', savings: '50–60%' }
];

const overheadCosts = [
  'Employer National Insurance Contributions',
  'Pension Contributions',
  'Office Rent & Utilities',
  'Recruitment & Agency Fees',
  'HR & Management Overhead',
  'Paid Leave & Sick Pay',
  'Equipment, Software & Licensing Costs'
];

const CostComparison = () => {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-white relative overflow-hidden -mt-10 lg:-mt-16 z-20">

      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none transform -translate-y-1/2"></div>

      <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        <div className="mb-12 lg:mb-16 max-w-[1100px] mx-auto">
          <div className="max-w-[700px]">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-bg text-brand-dark font-bold text-[10px] uppercase tracking-[0.2em] mb-6 border border-gray-200/60 shadow-sm rounded-lg">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-primary" />
              The Current UK Cost Structure
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[28px] lg:text-[36px] font-display font-black tracking-tight text-brand-dark leading-[1.15] mb-6"
            >
              Hiring in the UK involves <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">more than base salary.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: 0.1 }}
              className="text-[15px] lg:text-[17px] text-brand-body leading-[1.65] font-medium tracking-tight max-w-[500px]"
            >
              Employers must account for several additional overhead costs that significantly increase the total employment expense.
            </motion.p>
          </div>
        </div>

        {/* Premium Redesigned Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, delay: 0.15 }}
          className="flex flex-col xl:flex-row gap-8 items-stretch max-w-[1100px] mx-auto"
        >
          {/* Left Side: Clean Overhead List */}
          <div className="xl:w-[280px] shrink-0 w-full h-full">
            <div className="bg-white rounded-[24px] p-7 lg:p-8 border border-gray-100 flex flex-col shadow-premium relative z-10 overflow-hidden h-full transition-all duration-500 hover:border-brand-primary/20">

              <h3 className="font-display font-black text-brand-dark text-[18px] mb-2 tracking-tight leading-tight">
                Hidden UK Overheads
              </h3>
              <p className="text-[13px] text-gray-500 font-medium mb-6 pb-6 border-b border-gray-100 leading-snug">
                Instantly eliminated with <br/> our offshore model.
              </p>

              <ul className="space-y-4">
                {overheadCosts.map((cost, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[13.5px] text-brand-body font-medium tracking-tight leading-snug">
                    <div className="w-[18.5px] h-[18.5px] mt-0.5 rounded-full bg-rose-50 flex items-center justify-center shrink-0 border border-rose-100/50">
                      <X className="w-2.5 h-2.5 text-rose-500" />
                    </div>
                    <span>{cost}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Primary Pricing Comparison Cards */}
          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative z-20">
            {comparisonData.map((item, index) => (
              <div key={index} className="relative rounded-[24px] bg-white shadow-premium border border-gray-100 p-7 lg:p-8 flex flex-col overflow-hidden group hover:border-brand-primary/30 transition-all duration-500 ease-out h-full">

                <div className="flex flex-col gap-2.5 mb-8">
                  <h3 className="font-display font-black text-brand-dark text-[18px] tracking-tight">{item.role}</h3>
                  <div className="inline-flex items-center self-start font-display font-black text-emerald-500 text-[13px] tracking-tight bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-100/50">
                    Saves {item.savings}
                    <TrendingDown className="w-3.5 h-3.5 ml-1.5" />
                  </div>
                </div>

                <div className="flex flex-col gap-4 mb-8 flex-1">
                  {/* UK Cost */}
                  <div className="bg-rose-50/20 rounded-xl p-5 border border-rose-100/20 flex flex-col justify-center flex-1">
                    <div className="flex items-center gap-2 mb-2 text-rose-400 text-[10px] font-bold uppercase tracking-wider">
                      <X className="w-3 h-3" /> UK Cost
                    </div>
                    <div className="text-[18px] text-gray-400 font-medium line-through decoration-rose-300/60 decoration-[1.5px]">{item.local}</div>
                  </div>

                  {/* Finovate Cost */}
                  <div className="bg-brand-bg/50 rounded-xl p-5 border border-brand-primary/10 relative overflow-hidden group-hover:bg-white group-hover:border-brand-primary/20 transition-all duration-500 flex flex-col justify-center flex-1">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-primary/10 to-transparent blur-2xl rounded-full"></div>
                    <div className="flex items-center gap-2 mb-2 text-brand-primary text-[10px] font-bold uppercase tracking-wider relative z-10">
                      <CheckCircle2 className="w-3 h-3" /> Finovate Cost
                    </div>
                    <div className="font-display font-black text-brand-dark text-[21px] tracking-tight relative z-10">{item.finovate}</div>
                  </div>
                </div>

                {/* Progress Bar Visualizer */}
                <div className="mt-auto">
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden flex">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "35%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className="bg-brand-primary h-full rounded-full"
                    />
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "65%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="bg-emerald-400/10 relative h-full flex items-center rounded-r-full"
                    >
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
                    </motion.div>
                  </div>
                  <div className="flex justify-between mt-3 text-[9px] font-bold text-gray-400 uppercase tracking-widest pl-0.5">
                    <span>Cost paid</span>
                    <span className="text-emerald-500">Saved Capital</span>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Trust Footer below Cards */}
            <div className="md:col-span-2 bg-brand-bg/40 rounded-[20px] px-6 py-5 flex flex-col sm:flex-row items-center sm:items-start gap-5 border border-gray-100 z-10 transition-all hover:bg-white hover:shadow-premium duration-500 group">
              <div className="w-12 h-12 rounded-[14px] bg-white border border-brand-primary/20 shadow-sm flex flex-shrink-0 items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 ease-out">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <p className="text-[14px] lg:text-[15px] font-medium text-brand-body leading-[1.6] text-center sm:text-left pt-0.5">
                Each resource works exclusively for your firm and is <strong className="text-brand-dark font-bold bg-brand-primary/5 px-1 py-0.5 rounded">not shared</strong> with any other organisation. This ensures accountability and complete alignment.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CostComparison;
