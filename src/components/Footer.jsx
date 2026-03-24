import React from 'react';
import { ShieldCheck, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-32 pb-16 text-brand-body relative overflow-hidden border-t border-slate-100">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12 mb-24">

          <div className="lg:col-span-5 pr-0 lg:pr-16">
            <a href="#home" className="text-[32px] font-display font-black text-brand-dark tracking-tighter mb-8 inline-block hover:text-brand-primary transition-all duration-300">
              Finovate<span className="text-brand-primary">.</span>
            </a>
            <p className="text-[17px] leading-[1.7] mb-8 font-medium max-w-sm text-brand-body/80">
              Empowering top UK accounting firms with dedicated, highly-trained, and fully compliant offshore infrastructure.
            </p>
            
            <div className="flex flex-col gap-5 mb-10">
              <div className="flex items-center gap-3 text-emerald-500 bg-emerald-50 w-fit px-4 py-2 rounded-xl border border-emerald-100/50">
                <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                <span className="text-[12px] font-black tracking-[0.1em] uppercase font-display">100% GDPR & SOC2 Compliant</span>
              </div>
              <div className="flex items-center gap-3 pl-1">
                <div className="flex -space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white shadow-sm flex items-center justify-center overflow-hidden"><img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80" alt="avatar" className="w-full h-full object-cover" /></div>
                  <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white shadow-sm flex items-center justify-center overflow-hidden"><img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80" alt="avatar" className="w-full h-full object-cover" /></div>
                  <div className="w-8 h-8 rounded-full bg-brand-primary border-2 border-white shadow-sm flex items-center justify-center text-[11px] text-white font-black leading-none">+</div>
                </div>
                <span className="text-[14px] font-bold text-gray-400 ml-1">Trusted by 100+ UK Firms</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-brand-dark font-black mb-8 text-[12px] font-display uppercase tracking-widest">Solutions</h4>
            <ul className="space-y-5 text-[15px] font-medium">
              <li><a href="#" className="hover:text-brand-primary transition-colors hover:translate-x-1 inline-block transform transition-transform duration-300">Bookkeeping</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors hover:translate-x-1 inline-block transform transition-transform duration-300">Final Accounts</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors hover:translate-x-1 inline-block transform transition-transform duration-300">Management Accounts</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors hover:translate-x-1 inline-block transform transition-transform duration-300">VAT Returns</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors hover:translate-x-1 inline-block transform transition-transform duration-300">Payroll</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-brand-dark font-black mb-8 text-[12px] font-display uppercase tracking-widest">Company</h4>
            <ul className="space-y-5 text-[15px] font-medium">
              <li><a href="#about" className="hover:text-brand-primary transition-colors hover:translate-x-1 inline-block transform transition-transform duration-300">About Us</a></li>
              <li><a href="#how-it-works" className="hover:text-brand-primary transition-colors hover:translate-x-1 inline-block transform transition-transform duration-300">Deployment</a></li>
              <li><a href="#pricing" className="hover:text-brand-primary transition-colors hover:translate-x-1 inline-block transform transition-transform duration-300">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors hover:translate-x-1 inline-block transform transition-transform duration-300">Security</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors hover:translate-x-1 inline-block transform transition-transform duration-300">Careers</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-brand-dark font-black mb-8 text-[12px] font-display uppercase tracking-widest">Newsletter</h4>
            <p className="text-[14px] font-medium mb-8 text-brand-body/70 leading-relaxed">
              Subscribe for industry insights and scalability tips for UK accounting firms.
            </p>
            <div className="relative mb-10 group">
              <input
                type="email"
                placeholder="Work email"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-brand-dark placeholder-gray-400 focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all text-[15px] font-medium"
              />
              <button
                className="absolute right-1.5 top-1.5 bottom-1.5 w-12 flex items-center justify-center bg-brand-primary hover:bg-brand-secondary text-white rounded-xl transition-all duration-300 shadow-sm"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <a href="mailto:hello@finovate.io" className="flex items-center gap-4 text-brand-body hover:text-brand-primary transition-all group">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 group-hover:bg-brand-primary/10 group-hover:border-brand-primary/30 transition-all duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-bold tracking-tight text-[15px]">hello@finovate.io</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-slate-100 text-[14px] font-medium tracking-tight text-gray-400">
          <p>&copy; {currentYear} Finovate Outsourcing Ltd. Registered in England & Wales.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-dark transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-dark transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-dark transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
