import React from "react";
import "../app/globals.css";

const Navbar = () => {
  return (
    <nav className="flex flex-col overflow-x-hidden">
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-2xl border-b border-outline-variant/10 shadow-sm">
        <nav className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="font-headline-md text-headline-md font-bold tracking-tight text-primary">
            RooMath
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300" href="#features">
              Features
            </a>
            <a
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300"
              href="#dashboard"
            >
              Onboarding
            </a>
            <a
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300"
              href="#sms"
            >
              SMS Tracking
            </a>

            <a
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300"
              href="#faq"
            >
              FAQ
            </a>
         <div className="flex items-center gap-4">
            <button className="hidden sm:block font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300">
              Login
            </button>
            <button className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-label-md text-label-md font-bold hover:scale-95 transition-transform duration-200 neon-glow-primary">
              Get Started
            </button>
          </div>
          </div>
 
        </nav>
      </header>
    </nav>
  );
};

export default Navbar;
