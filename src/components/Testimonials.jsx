import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Partnering with Finovate was the best operational decision we made this year. We reduced our backlog by 80% in the first three months, and our offshore team’s knowledge of UK GAAP is outstanding.",
    name: "James Harrington",
    role: "Managing Partner",
    company: "Harrington & Co.",
    rating: 5,
  },
  {
    quote: "The quality of work on our Year-End accounts has been phenomenal. We managed to scale our firm's client base by over 40% without the headache of local recruitment struggles.",
    name: "Sarah Jenkins",
    role: "Director",
    company: "Jenkins Financial Group",
    rating: 5,
  },
  {
    quote: "Finovate’s GDPR compliant infrastructure and ISO certified processes put us completely at ease. The team feels like a direct extension of our own London office.",
    name: "David O'Connor",
    role: "Senior Accountant",
    company: "Elite Business Solutions",
    rating: 5,
  },
  {
    quote: "Their MTD for ITSA prep has been an absolute lifesaver. Handing over our quarterly filing volumes to Finovate completely eliminated our seasonal burnout.",
    name: "Emily Croft",
    role: "Head of Tax",
    company: "Croft & Associates",
    rating: 5,
  },
  {
    quote: "We save at least £120k annually using Finovate's bookkeeping operations. The cost difference is night and day, but more impressively, the precision is flawless.",
    name: "Michael Chen",
    role: "Founder",
    company: "Chen Accounting Partners",
    rating: 5,
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 lg:py-24 bg-brand-bg relative overflow-hidden text-center">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-primary/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary/10 text-brand-primary font-black text-[10px] uppercase tracking-[0.2em] mb-5 border border-brand-primary/20 rounded-lg shadow-sm"
          >
            Client Success
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[30px] md:text-[38px] font-display font-black tracking-tight text-brand-dark mb-4 leading-[1.05]"
          >
            Trusted by the <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Best Firms.</span>
          </motion.h2>
        </div>

        <div className="relative bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-premium group overflow-hidden">
          {/* Subtle quotemarks */}
          <Quote className="absolute -top-6 -left-6 w-20 h-20 text-brand-primary opacity-10 transform -rotate-12 group-hover:opacity-20 transition-opacity duration-700" />
          <Quote className="absolute -bottom-6 -right-6 w-20 h-20 text-brand-secondary opacity-10 transform rotate-[168deg] group-hover:opacity-20 transition-opacity duration-700" />

          <div className="relative min-h-[160px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, filter: "blur(5px)", scale: 0.98 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                exit={{ opacity: 0, filter: "blur(5px)", scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-center w-full"
              >
                <div className="flex justify-center gap-1.5 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-accent fill-brand-accent drop-shadow-[0_0_8px_rgba(245,179,36,0.3)] shadow-sm" />
                  ))}
                </div>
                <p className="text-[17px] md:text-[19px] text-brand-body font-display font-medium leading-[1.65] mb-8 tracking-tight">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <h4 className="font-display font-black text-brand-dark text-[17px] mb-1.5">{testimonials[currentIndex].name}</h4>
                  <div className="text-[12px] text-gray-400 font-bold tracking-tight uppercase flex items-center justify-center gap-2">
                    {testimonials[currentIndex].role} 
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span className="text-brand-primary">@{testimonials[currentIndex].company}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-5 mt-10 relative z-10">
            <button
              onClick={prev}
              className="p-3.5 rounded-xl bg-brand-bg text-brand-dark hover:bg-white hover:text-brand-primary border border-transparent hover:border-brand-primary shadow-sm hover:shadow-premium transition-all duration-300"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ease-out ${i === currentIndex ? 'bg-brand-primary w-8 shadow-[0_0_8px_rgba(99,91,255,0.4)]' : 'bg-gray-200 hover:bg-gray-300 w-1.5'}`}
                  aria-label={`Step ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3.5 rounded-xl bg-brand-bg text-brand-dark hover:bg-white hover:text-brand-primary border border-transparent hover:border-brand-primary shadow-sm hover:shadow-premium transition-all duration-300"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
