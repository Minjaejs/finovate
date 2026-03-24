import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, PieChart, PoundSterling, Users, ShieldCheck, ArrowRight, Laptop } from 'lucide-react';

const services = [
  {
    title: 'Bookkeeping API',
    description: 'Accurate, timely recording of transactions. Real-time ledger maintenance ensuring gapless sync.',
    icon: <BookOpen className="w-[22px] h-[22px] text-brand-primary" />
  },
  {
    title: 'Final Accounts',
    description: 'Statutory preparation aligned meticulously with complex UK GAAP and IFRS framework standards.',
    icon: <FileText className="w-[22px] h-[22px] text-brand-secondary" />
  },
  {
    title: 'Management Ops',
    description: 'Granular financial reporting providing deep strategic visibility for board-level business decisions.',
    icon: <PieChart className="w-[22px] h-[22px] text-brand-accent" />
  },
  {
    title: 'VAT Automation',
    description: 'Automated extraction formatting and MTD-compliant VAT filing, ensuring absolute filing accuracy.',
    icon: <PoundSterling className="w-[22px] h-[22px] text-brand-primary" />
  },
  {
    title: 'Payroll Engine',
    description: 'End-to-end processing, strict PAYE compliance, and scalable employee onboarding without the overhead.',
    icon: <Users className="w-[22px] h-[22px] text-brand-secondary" />
  },
  {
    title: 'Tax Compliance',
    description: 'Complex strategic tax planning and corporate tax return (CT600) filing handled in isolated environments.',
    icon: <ShieldCheck className="w-[22px] h-[22px] text-brand-accent" />
  },
  {
    title: 'MTD for ITSA',
    description: 'Automated updates for real-time tax insights and better control over your cash flow from April 2026.',
    icon: <Laptop className="w-[22px] h-[22px] text-brand-primary" />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-12 lg:py-18 bg-white relative z-20 -mt-10 lg:-mt-16">

      <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        <div className="flex flex-col lg:flex-row justify-between items-end gap-6 mb-12 pt-8 border-t border-gray-100">
          <div className="max-w-[500px]">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[28px] lg:text-[34px] font-display font-black tracking-tight text-brand-dark leading-[1.1] drop-shadow-sm"
            >
              Unified accounting <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">infrastructure.</span>
            </motion.h2>
          </div>
          <div className="max-w-[420px]">
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, delay: 0.1 }}
              className="text-[14px] lg:text-[16px] text-brand-body leading-[1.6] font-medium tracking-tight"
            >
              Premium financial services built specifically for the compliance of top-tier UK & Ireland firms.
            </motion.p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-5 lg:gap-7 max-w-[1300px] mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * index, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group flex w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.33%-20px)] xl:w-[calc(25%-21px)]"
            >
              <div className="relative h-full w-full bg-white p-6 lg:p-7 flex flex-col gap-5 items-start cursor-default shadow-premium rounded-[22px] border border-gray-100 transition-all duration-500 overflow-hidden hover:border-brand-primary/30 hover:-translate-y-1">
                
                <div className="shrink-0 relative w-[48px] h-[48px] rounded-[14px] bg-brand-bg flex items-center justify-center border border-gray-100/50 shadow-sm transition-all duration-500 ease-out group-hover:bg-white group-hover:border-brand-primary/20 group-hover:shadow-[0_8px_20px_rgba(20,184,166,0.12)]">
                  <div className="relative z-10 transition-transform duration-500 group-hover:-rotate-6 scale-90">
                    {service.icon}
                  </div>
                  <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/5 rounded-[14px] blur-xl transition-all duration-500"></div>
                </div>

                <div className="flex-1 flex flex-col gap-2.5">
                  <h3 className="text-[17px] font-display font-black text-brand-dark tracking-tight leading-snug group-hover:text-brand-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[13.5px] text-brand-body leading-[1.55] font-medium tracking-tight">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
