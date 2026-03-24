import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Server, FileWarning, Key, ShieldCheck, DatabaseBackup } from 'lucide-react';

const securityFeatures = [
  { icon: <Lock className="w-6 h-6" />, title: 'Strict GDPR Compliance', text: 'All client information is handled under secure access management protocols.' },
  { icon: <Key className="w-6 h-6" />, title: 'Restricted Systems', text: 'Monitored workflows and controlled data access with strict biometric entry.' },
  { icon: <ShieldCheck className="w-6 h-6" />, title: 'Confidentiality Agreements', text: 'Every team member signs rigorous NDAs that ensure privacy remains fully protected.' },
  { icon: <Server className="w-6 h-6" />, title: 'Internal Data Controls', text: 'We strictly follow structured internal data protection controls globally.' },
];

const Security = () => {
  return (
    <section id="security" className="py-16 lg:py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute -top-[300px] right-[100px] w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent/20 via-brand-secondary/5 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 relative pr-0 lg:pr-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 text-brand-primary font-black text-[10px] uppercase tracking-[0.2em] mb-7 border border-brand-primary/20 rounded-lg shadow-sm"
            >
              Enterprise Security
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: 0.1 }}
              className="text-[28px] lg:text-[36px] font-display font-black tracking-tight mb-7 leading-[1.15] text-white drop-shadow-sm"
            >
              Data Security & <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-emerald-300 to-emerald-500">Confidentiality.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: 0.2 }}
              className="text-[15px] lg:text-[17px] text-blue-100/60 leading-[1.65] font-medium tracking-tight"
            >
              We follow GDPR-compliant processes supported by structured internal data protection controls. All client information is handled under secure access management protocols with restricted system permissions. Your firm’s information and clients’ privacy remain fully protected.
            </motion.p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 lg:gap-8">
            {securityFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <div className="h-full rounded-3xl p-7 lg:p-8 bg-slate-900/40 border border-slate-800 transition-all duration-500 ease-out cursor-default shadow-sm hover:shadow-premium hover:border-brand-secondary/40 hover:-translate-y-1.5 relative overflow-hidden backdrop-blur-md">
                   {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/0 to-brand-accent/0 group-hover:from-brand-secondary/10 group-hover:to-brand-accent/10 transition-colors duration-500 pointer-events-none"></div>

                  <div className="flex flex-col gap-6 relative z-10">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-dark border border-slate-700 rounded-xl text-brand-accent group-hover:scale-110 group-hover:bg-brand-secondary group-hover:text-white group-hover:border-white/20 transition-all duration-500 ease-out">
                      <div className="group-hover:text-white transition-colors duration-300 scale-90">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[18px] font-display font-bold mb-3 text-white tracking-tight group-hover:text-white transition-all duration-300">{feature.title}</h3>
                      <p className="text-blue-100/50 text-[14px] leading-[1.6] font-medium tracking-tight group-hover:text-blue-100/80 transition-colors duration-300">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Security;
