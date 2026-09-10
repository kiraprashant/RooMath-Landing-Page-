import React from "react";
import { BsTerminalFill } from "react-icons/bs";
import { MdBolt } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { IoMdLock } from "react-icons/io";

const Privacy = () => {
  const data = [
    {
      Title: "Welcome",
      Decription:
        "Connect your Google account to secure your local preferences. No data leaves your device.",
      Step: "Step 1",
      Img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQQqTbg9uG9Ce0YHtENOjGDIRx2anoTYSe0Z_Z8UBaAo9wlZC2aYqgKyIu4Gk0oAGT2V6cagijcWMAqAsRm3hdCpoRXbGWUOndDoAqpQu_QO6M4aXHGIIBA3hHaii4zzDQBYyShYHUUPre-yV49o6nLNwr58J6vk2m0gH-8uKuQSQPirfcZvNFQaL91v0pEzrMR22VRixRns5VmVjq1Mmtbk1zxJldQdbcNLizMx48XA8qKGAylWGoVf5bqtuGaL0U_a0cyDQ3XxY",
    },
    {
      Title: "Permissions",
      Decription:
        "Grant SMS access. Our local engine analyzes text without internet connectivity.",
      Step: "Step 2",
      Img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9JcFsEOL2efq4yn-p0jGz-fL6PWtiKXi5eS2Xw_DIuyl2NryKZNbS9LEjE8VarrsqywA8hgJopSSRQC9eOxMga5Ppsu6O1RBtVdfL-Mvte6PyXTaN1Jo5ezizBK-guW66664032WD_FKOAWbrh_a5g0qrpAmu6r7KHg-2Pv2aucF1n2h0xxnsvDqcSMT7hKqMq60l-pcVLDEqbD_R5XPlGaJ1ZaRXiREZwWOyA_di4ecR1F93Sl-iefyDJBH2zDS8jbEZtmZAjB8",
    },

    {
      Title: "Privacy-First",
      Decription:
        "Set your monthly budget and watch your dashboard come to life instantly..",
      Step: "Step 3",
      Img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVgJE51cf68WaY7VA-8MAylXnwQX6BLEqrsAsho6yNwq_ckUAFQ16LCww06oQkG8G1cGBwE9vdbUVrHWvCsJcTJRCOeGPtZjWWAoPH3DvIUuykC_b-tzp8YObeR1Z98BJbdIKhR6cIyUUq_l7hMlhFLSL8jftCxI8QlBJ2MKFk452bINfgTWoPy8LiYVdydWkbsqC65EudoGt4zQYMae3CHtegOvYNymSfT8ZbUxmm_rPoVFX_oiypsxUg0AuhLQeYScQrZSsdVlU",
    },
  ];

  return (
    <div className="md:px-margin-desktop w-full max-w-container-max mx-auto">
      <section className="py-stack-lg">
        <div className="max-w-7xl mx-auto px-container-padding">
          <div className="flex justify-between items-end mb-stack-md">
            <div className="mb-4">
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Trust & Privacy
              </h2>
              <p className="text-on-surface-variant">
                Step into the future of budgeting in three simple steps.
              </p>
            </div>

          </div>
          <div className="flex gap-stack-md   no-scrollbar pb-10">
            {data.map((elem, i) => {
              const { Title, Decription, Step, Img } = elem;
              return (
                <div
                  key={i}
                  className="min-w-[300px] md:min-w-[400px] glass-card-privacy  rounded-2xl overflow-hidden group mr-4"
                >
                  <div className="h-64 bg-surface-container relative">
                    <img
                      className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                      data-alt="A minimalist conceptual illustration for an app welcome screen. A single, glowing indigo sphere floats in a dark void, with clean white text saying 'Welcome to the Future'. The lighting is high-contrast with soft cyan highlights, creating a calm, premium atmosphere that emphasizes simplicity and digital sophistication."
                      src={Img}
                    />
                    <div className="absolute bottom-4 left-4 bg-primary text-on-primary px-3 py-1 rounded-full text-caption font-bold">
                      {Step}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-headline-md text-headline-md mb-2">
                      {Title}
                    </h3>
                    <p className="text-caption text-on-surface-variant">
                      {Decription}
                    </p>
                  </div>
                </div>
              );
            })}


         
  
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-container-padding py-stack-lg text-center mb-10">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-tertiary/10 text-tertiary mb-6">
          <span className="material-symbols-outlined text-4xl"><IoMdLock /></span>
        </div>
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
          100% Offline. Privacy isn&apos;t a feature.
          ItDon&apos;s our foundation..
        </h2>
        <p className="text-on-surface-variant mb-10 max-w-2xl mx-auto">
          We donDon&apos;t have servers. We donDon&apos;t have your data. RooMath is a tool that
          runs purely on your hardware, ensuring your financial privacy is
          absolute.
        </p>
        <div className="flex flex-wrap justify-center gap-stack-md">
          <div className="glass-card px-6 py-3 rounded-full flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">
              <AiFillSafetyCertificate />
            </span>
            <span className="text-caption font-label-mono">
              SOC2 Compliant Logic
            </span>
          </div>
          <div className="glass-card px-6 mx-3 py-3 rounded-full flex items-center gap-2">
            <span className="material-symbols-outlined text-sm"><MdBolt /></span>
            <span className="text-caption font-label-mono">No Latency</span>
          </div>
          <div className="glass-card px-6 py-3 rounded-full flex items-center gap-2">
            <span className="material-symbols-outlined text-sm"><BsTerminalFill /></span>
            <span className="text-caption font-label-mono">
              Open-Source Ready
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
