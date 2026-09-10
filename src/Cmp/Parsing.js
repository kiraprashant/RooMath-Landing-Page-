import React from "react";
import { IoMdLock } from "react-icons/io";

const Parsing = () => {
  return (
    <section className="flex-grow pb-32 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto" id="sms">
      <div className="max-w-container-max mx-auto flex flex-col items-center">
        <div className="text-center mb-20 max-w-2xl ">
          <h2 className="font-headline-lg text-headline-lg mb-4">
            Magic Parsing. Zero Cloud.
          </h2>
          <p className="text-on-surface-variant">
            Our local engine transforms raw bank messages into structured
            financial data instantly.
          </p>
        </div>
        <div
          className="relative w-full max-w-4xzl flex flex-col md:flex-row items-center justify-between gap-12 py-12 "
          // style="transition-delay: 0.2s;"
        >
          {/* <!-- SMS Bubble --> */}
          <div className="w-full md:w-[320px] glass-card p-6 rounded-3xl border-primary/20 bg-primary/5 hover:border-primary/40">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">person</span>
              </div>
              <span className="text-label-sm font-bold opacity-70">BANK-HDFC</span>
            </div>
            <p className="font-body-md text-sm text-on-surface-variant mb-2">
              A/c XX1234 debited for ₹850.00 on 24-MAY-24. Info:
              UPI-ZOMATO-ORDER.
            </p>
            <div className="text-[10px] opacity-40 text-right">12:45 PM</div>
          </div>
          {/* <!-- Bridge --> */}
          <div className="flex flex-col items-center flex-1 gap-4">
            <span className="text-label-sm font-bold text-primary tracking-widest uppercase">
              Smart Parsing
            </span>
            <div className="flex gap-4">
              <span className="px-3 py-1 bg-surface-container rounded-full text-[10px] border border-outline-variant/30 text-on-surface-variant text-center w-32">
                100% PRIVATE
              </span>
            </div>
            <div className="smart-bridge w-full"></div>
            <div className="flex gap-4">
              <span className="px-3 py-1 bg-surface-container rounded-full text-[10px] border border-outline-variant/30 text-on-surface-variant">
                LOCAL PROCESSING
              </span>
            </div>
          </div>
          {/* <!-- Structured Card --> */}
          <div className="w-full md:w-[320px] glass-card p-6 rounded-3xl border-secondary/20 bg-secondary/5 neon-glow-primary hover:border-secondary/50 overflow-hidden relative">
            <div className="shimmer-effect absolute inset-0 pointer-events-none"></div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h4 className="font-bold text-lg">Zomato</h4>
                <p className="text-label-sm text-on-surface-variant">
                  Food &amp; Dining
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-on-secondary/10 flex items-center justify-center text-secondary">
                <span
                  className="material-symbols-outlined"
                  // style="font-variation-settings: 'FILL' 1;"
                >
                  restaurant
                </span>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <div className="text-2xl font-bold">₹850.00</div>
              <div className="text-label-sm text-success font-medium flex items-center gap-1 text-primary">
                <span className="material-symbols-outlined text-xs">verified</span>{" "}
                Verified
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parsing;
