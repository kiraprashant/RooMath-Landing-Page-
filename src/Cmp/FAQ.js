import React from "react";
import { FaArrowDown } from "react-icons/fa6";


const FAQ = () => {
  const FAQData = [
    {
      id:1,
      Title:"How does it read my SMS?",
      Description:"RooMath requests the 'Receive SMS' permission. Our local algorithm scans incoming messages for specific bank-related keywords a xnumerical patterns to extract transaction details without ever uploading the content anywhere."
    },
    {
      id:2,
      Title:"Is my data backed up?",
      Description:"Since we are 100% offline, your data is stored in your phone's app-data folder. You can manually export an encrypted backup file  to your local storage or a personal cloud drive if you choose."
    },
    {
      id:3,
      Title:"Does it support all banks?",
      Description:"We support 95%+ of Indian banks and digital wallets (UPI, Credit Cards, Debit Cards). If a specific bank is missing, you can submit  sample message (redacted) for us to add support in the next update."

    }
  ] 
  return (
    <section className="pb-20 px-margin-mobile" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-headline-lg text-headline-lg mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {
            FAQData.map((elem,i) =>{
              return(
                <details key={elem.id}
                className="group glass-card rounded-2xl overflow-hidden"
                // style="transition-delay: 0.3s;"
              >
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none group-open:bg-white/5">
                  <span className="font-bold">{elem.Title}</span>
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                     <FaArrowDown />
                  </span>
                </summary>
                <div className="p-6  text-on-surface-variant text-sm leading-relaxed">
                 {elem.Description}
                </div>
              </details>
              )
            })
          }
          

         
        </div>
      </div>
    </section>
  );
};

export default FAQ;
