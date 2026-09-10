"use client"

import React from 'react'
import ExpenseBar from './Chart/ExpenseBar';
import ExpenseDonutChart from './Chart/ExpenseDonutChart';



const data = [
    {
        title:"Essentials",
        subtitle:"Rent, Bills, Groceries",
        percent:50,
        amount:"$2,500",
        Spend:"$1,250",
        color:"#3B82F6"
    },
    {
        title:"Saving & Investment",
        subtitle:"Emergency Fund, Crypto Currency, Stock",
        percent:20,
        amount:"$2,000",
        Spend:"$400",
        color:"#10B981"
    },
    {
        title:"Lifestyle",
        subtitle:"Dining, Shopping, Fun",
        percent:30,
        amount:"$2,500",
        Spend:"$750",
        color:"#FB923C"
    },
    
  ];

const Onboarding = () => {
  return (
<main className="flex-grow pt-24 pb-32 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto">
<div className="mx-auto">
{/* <!-- Header Section --> */}
<section className="mb-12 text-center md:text-left">
<h1 className="font-headline-lg text-headline-lg mb-2 text-on-surface">Define your financial goals</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Set your monthly targets for savings, essentials, and personal spending.</p>
</section>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
{/* <!-- Interaction Panel --> */}
<div className="lg:col-span-7 space-y-6">
{/* <!-- Rule of Thumb Toggle --> */}
<div className="glass-panel p-6 rounded-xl flex items-center justify-between">
<div>
<p className="font-label-md text-label-md text-primary mb-1">RECOMMENDED STRATEGY</p>
<p className="font-body-md text-body-md text-on-surface">Apply the 50/30/20 Rule</p>
</div>

</div>
{/* <!-- Budget Sliders --> */}
<div className="glass-panel p-8 rounded-xl light-leak space-y-10">

{/* <div className="space-y-4">
<div className="flex justify-between items-end"> */}

{
    data.map((elem,i) => (
        <div  key={i} className="space-y-4">
<div className="flex justify-between items-end">
        <ExpenseBar
         
          title={elem.title}
          subtitle={elem.subtitle}
          percent={elem.percent}
          amount={elem.amount}
          spend={elem.Spend}
          color={elem.color}
        />
        </div>
        </div>
    ))
}

{/* </div>
</div>  */}


{/* <!-- Savings Slider --> */}
{/* <div className="space-y-4">
<div className="flex justify-between items-end">
<div>
<h3 className="font-label-md text-label-md text-on-surface">Savings &amp; Investments</h3>
<p className="text-xs text-on-surface-variant">Emergency Fund, Stocks</p>
</div>
<div className="text-right">
<span className="font-headline-md text-headline-md text-primary" id="savingsPercent">20%</span>
<p className="font-label-sm text-label-sm text-on-surface-variant" id="savingsAmount">$1,000</p>
</div>
</div>
<input readOnly className="w-full h-1.5 bg-surface-container-highest rounded-full appearance-none cursor-pointer slider-thumb" id="savingsSlider" max="100" min="0" type="range" value="20"/>
</div> */}



{/* <!-- Warning Alert --> */}
<div className="hidden flex items-center gap-3 p-4 bg-error-container/20 border border-error/20 rounded-lg" id="allocationWarning">
<span className="material-symbols-outlined text-error">warning</span>
<p className="font-label-sm text-label-sm text-error">Total allocation exceeds 100%. Please adjust your buckets.</p>
</div>
</div>
</div>


{/* <!-- Visualization Panel --> */}
<div className="lg:col-span-5 sticky top-24">
<div className="glass-panel p-8 rounded-xl flex flex-col items-center justify-center text-center">
<div className="w-64 h-64 mb-24">
{/* <!-- Visual Representation (SVG Graph) --> */}
<ExpenseDonutChart />


{/* <div className="absolute inset-0 flex flex-col items-center justify-center">
{/* <ExpenseDonutChart /> */}
{/* <span className="font-display-lg text-display-lg text-on-surface leading-none">$7,000</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mt-2">Total Monthly</span>
</div> */} 
</div>
<div className="w-full space-y-4 ">
<div className="flex items-center justify-between text-left">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-on-surface-variant"></div>
<span className="font-label-sm text-label-sm">Essentials</span>
</div>
<span className="font-label-md text-label-md" id="summaryEssentials">$2,500</span>
</div>
<div className="flex items-center justify-between text-left">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-primary"></div>
<span className="font-label-sm text-label-sm">Savings</span>
</div>
<span className="font-label-md text-label-md" id="summarySavings">$2,000</span>
</div>
<div className="flex items-center justify-between text-left">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-tertiary"></div>
<span className="font-label-sm text-label-sm">Lifestyle</span>
</div>
<span className="font-label-md text-label-md" id="summaryLifestyle">$2,500</span>
</div>
</div>
<div className="w-full mt-8 pt-8 border-t border-white/5">
<img alt="Dashboard Preview" className="w-full h-32 object-cover rounded-lg opacity-40 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0" data-alt="A sophisticated fintech dashboard visualization showing clean line graphs and sleek financial metrics in a dark mode setting. The aesthetic is professional and high-end, utilizing a deep navy and cyan color palette with soft glowing edges. Precision-engineered data points are connected by elegant, thin strokes, conveying security and futuristic financial control. The lighting is low-key and cinematic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlgx4SoG4SWDLN8np-lmhSlgQuY7W2b2SKU-VfcYfoPYVG20Nrys8VPkZ41nDIdl04H43xCWIaYtiSoV-VtBX55C-yVgflh0L7N1iAndrvBDfuZCUZgBUMDyuXhjI01V_zx2Bc4vxOkfUA5OKgR6f7W2fW9cn0O26tRP1Lp_H6AypEHRDXxbr6uzuoxVG3rQEAgmcWHWb5W5YdJ2cnx5AepaieV1FfLcv-tR9LqzEXBMoyo6MpHTf-LkQgnTel9YuwszRKvEULSrk"/>
</div>
</div>
</div>
</div>
</div>
</main>
  )
}

export default Onboarding