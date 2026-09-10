import React from "react";
import { SiSwiggy } from "react-icons/si";
import { FaShoppingBag } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
    
  return (
    <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="z-10 s" id="hero-content">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary font-label-md text-label-md mb-6">
            Offline-First • 100% Private
          </span>
          <h1 className="font-display-lg text-display-lg md:text-[64px] leading-tight mb-6">
            Track Every Rupee <span className="gradient-text">Smarter.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            A premium expense tracker that parses your SMS locally. No cloud, no
            data leaks, just pure financial clarity directly on your phone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md font-bold hover:opacity-90 transition-all neon-glow-primary">
             <FaDownload />
              Source Code
            </button>
            {/* <button className="flex items-center justify-center gap-2 border border-outline-variant px-8 py-4 rounded-xl font-label-md text-label-md font-bold hover:bg-white/5 transition-all">
              <span className="material-symbols-outlined">play_circle</span>
              Watch Demo
            </button> */}
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="relative z-10 w-[300px] h-[600px] bg-surface-container rounded-[48px] border-[8px] border-surface-variant shadow-2xl overflow-hidden animate-float-subtle">
            <img
              alt="Dashboard"
              className="w-full h-full object-cover opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzUCiSs6V2f0QdBKabUT4yIKtVUlq8iiqZSdpJvhTVvd0d4aT73HmmF-PD51pgc-VAdZDlurjRhFVzywnuYBGSSg-BS4AvtL6fnDcVBPIOK2IMDsZ4YkOVEAkuobrfdSNkMJoXIIGYXhG7FBAFS_xTmmoms0LCLjHme5RU3Lrt9RFGsATk2v8MVMHU3leCGq1uncRwIAmX1YJffoQ0jhuKMqpdtlWU5EOSnOiDUG7TgwOiqMZfehRy1IJk80k28MWAAsNVAK7e_9Q"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>

          <div className="absolute -top-10 -right-4 md:-right-10 animate-float glass-card p-4 rounded-2xl z-20 w-48">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-500">
              <SiSwiggy />
              </div>
              <div>
                <div className="text-[10px] text-on-surface-variant uppercase font-bold">
                  Swiggy
                </div>
                <div className="text-on-surface font-bold">₹499.00</div>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 -left-12 md:-left-24 animate-float glass-card p-4 rounded-2xl z-20 w-52">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                 <FaShoppingBag />
              </div>
              <div>
                <div className="text-[10px] text-on-surface-variant uppercase font-bold">
                  Amazon
                </div>
                <div className="text-on-surface font-bold">₹1,299.00</div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 -right-8 animate-float glass-card p-4 rounded-full z-20">
            <div className="w-12 h-12 flex items-center justify-center text-primary-fixed font-bold text-2xl">
              ₹
            </div>
          </div>

          <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
