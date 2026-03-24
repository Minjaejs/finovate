import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import Button from './ui/Button';

const ContactForm = () => {
  const [formState, setFormState] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-brand-bg relative overflow-hidden -mt-10 lg:-mt-16 z-20 text-left">

      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-primary/10 via-transparent to-transparent rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        <div className="mb-14 text-center max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 text-brand-primary font-black text-[10px] uppercase tracking-[0.2em] mb-7 border border-brand-primary/20 rounded-lg shadow-sm"
          >
            Let's Grow Together
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-[28px] lg:text-[36px] font-display font-black tracking-tight text-brand-dark mb-7 leading-[1.15]"
          >
            Scale your firm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">without increasing overhead.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.2 }}
            className="text-[15px] lg:text-[17px] text-brand-body leading-[1.65] font-medium tracking-tight px-4"
          >
            Focus on acquiring clients while we manage the backend operations as your strategic outsourcing partner.
          </motion.p>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-premium border border-gray-100 flex flex-col lg:flex-row max-w-[1050px] mx-auto">

          {/* Left Info Pane */}
          <div className="lg:w-[38%] bg-brand-dark relative p-10 lg:p-12 text-white overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 bg-mesh opacity-10 mix-blend-overlay pointer-events-none"></div>

            <div className="relative z-10 mb-12">
              <h3 className="text-[28px] font-display font-black tracking-tight mb-5 text-white leading-tight">Contact Sales</h3>
              <p className="text-blue-100/60 text-[15px] leading-[1.6] font-medium tracking-tight">
                Ready to deploy your team? Reach out for a free consultation.
              </p>
            </div>

            <div className="space-y-8 relative z-10">
              {[
                { icon: <Mail className="w-4 h-4" />, title: 'Email', detail: 'hello@finovate.io', highlight: true },
                { icon: <Phone className="w-4 h-4" />, title: 'Call', detail: '+44 7392 472035' },
                { icon: <MapPin className="w-4 h-4" />, title: 'London Office', detail: 'One Canada Square, E14 5AB' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className={`mt-0.5 p-3.5 rounded-xl transition-all duration-500 ease-out ${item.highlight ? 'bg-brand-primary text-white shadow-[0_0_20px_rgba(99,91,255,0.4)]' : 'bg-white/5 text-brand-secondary group-hover:bg-white/10 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]'}`}>
                    <div className="scale-90">{item.icon}</div>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400 mb-1.5">{item.title}</h4>
                    <p className={`text-[14px] font-medium tracking-tight leading-snug ${item.highlight ? 'text-white' : 'text-blue-100/80'}`}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-[62%] p-10 lg:p-14 relative bg-white">
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10 max-w-[500px] mx-auto lg:mx-0">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-brand-dark uppercase tracking-widest pl-1">First Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-[15px] text-brand-dark font-medium tracking-tight hover:border-slate-300 hover:bg-white focus:bg-white focus:border-brand-primary focus:ring-[4px] focus:ring-brand-primary/10 transition-all duration-500 outline-none"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-brand-dark uppercase tracking-widest pl-1">Last Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-[15px] text-brand-dark font-medium tracking-tight hover:border-slate-300 hover:bg-white focus:bg-white focus:border-brand-primary focus:ring-[4px] focus:ring-brand-primary/10 transition-all duration-500 outline-none"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-black text-brand-dark uppercase tracking-widest pl-1">Work Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-[15px] text-brand-dark font-medium tracking-tight hover:border-slate-300 hover:bg-white focus:bg-white focus:border-brand-primary focus:ring-[4px] focus:ring-brand-primary/10 transition-all duration-500 outline-none"
                  placeholder="john@firm.co.uk"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-black text-brand-dark uppercase tracking-widest pl-1">Message</label>
                <textarea
                  rows="4"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-[15px] text-brand-dark font-medium tracking-tight hover:border-slate-300 hover:bg-white focus:bg-white focus:border-brand-primary focus:ring-[4px] focus:ring-brand-primary/10 transition-all duration-500 outline-none resize-none"
                  placeholder="How can we help?"
                ></textarea>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full group disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed !h-13 text-[16px] shadow-sm hover:shadow-premium transition-all duration-500 ease-out"
                  disabled={formState === 'submitting' || formState === 'success'}
                >
                  <AnimatePresence mode="wait">
                    {formState === 'idle' && (
                      <motion.div key="idle" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="flex items-center">
                        Request Consultation
                        <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </motion.div>
                    )}
                    {formState === 'submitting' && (
                      <motion.div key="submitting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Wait...
                      </motion.div>
                    )}
                    {formState === 'success' && (
                      <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center text-emerald-300">
                        <CheckCircle2 className="mr-3 w-5 h-5" />
                        Requested
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
                <div className="flex items-center justify-center gap-2 mt-5 text-[13px] text-gray-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>We respond within <strong>24 hours</strong>.</span>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
