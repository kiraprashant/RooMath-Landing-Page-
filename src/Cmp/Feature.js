import React from "react";
import { MdDescription,MdSms,MdCategory} from "react-icons/md";
import { IoCloudOffline,IoLogInSharp } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import { SiPreact } from "react-icons/si";


const Feature = () => {
    const FeatureData = [
        {
            id:1,
            Icon:<MdSms size={24} color="#b8f0c9"/>,

            Title:"SMS Auto Tracking",
            Description:"Zero-effort logging. We parse your bank SMS instantly as they arrive."
        },
        {
            id:2,
            Icon:<IoCloudOffline size={24} color="#d4c2ff"/>,
            Title:"Offline Storage",
            Description:"Your data lives on your device. Fast, reliable, and completely private."
        },
        {
            id:3,
            Icon:<IoLogInSharp size={24} color="#ffc2c7"/>,
            Title:"Google Sign-in",
            Description:"Quick onboarding while maintaining your local database integrity."
        },
        {
            id:4,
            Icon:<FaFilter size={24} color="#b4c5ff"/>,
            Title:"Fast Search",
            Description:"Find any transaction instantly with powerful local filters."
        },
        {
            id:5,
            Icon:<SiPreact size={24} color="#d4c2ff"/>,
            Title:"Smart Parsing",
            Description:"Advanced algorithms categorize transactions with clinical precision."
        },
        {
            id:6,
            Icon:<MdCategory size={24} color="#b8f0c9"/>,
            Title:"Categories",
            Description:"Fully customizable labels for every type of expense you track."
        },
        {
            id:7,
            Icon:<MdCategory size={24} color="#b8f0c9"/>,
            Title:"Monthly Dashboard",
            Description:"A high-level view of your financial health in a single glass pane."
        },
        {
            id:8,
            Icon:<MdCategory size={24} color="#b8f0c9"/>,
            Title:"Edit & Delete",
            Description:"Complete manual control. Add, update, or remove entries in seconds."
        },
        {
            id:9,
            Icon:<MdCategory size={24} color="#b8f0c9"/>,
            Title:"Bank Grade",
            Description:"Security that feels like physical hardware. Biometric ready."
        },

    ]
  return (
    <div className="mt-28 ">
      {/* <!-- Features Grid --> */}
      <section
        className="md:px-margin-desktop px-margin-mobile w-full max-w-container-max mx-auto"
        id="features"
      >
        <div className="text-center mb-stack-lg reveal-up mb-5">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Designed for Mastery
          </h2>
          <p className="text-on-surface-variant mt-2">
            Every tool you need to control your capital, offline and private.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-stack-md gap-6" >

        {
            FeatureData.map((elem,i) =>{
                return(
                    <div key={elem.id} className="glass-card p-stack-md rounded-2xl flex flex-col gap-2 hover:border-primary/50 transition-colors group reveal-up p-5">
                    <span className=" group-hover:scale-110 transition-transform">
                      {elem.Icon}
                    </span>
                    <h3 className="font-headline-md text-headline-md">{elem.Title}</h3>
                    <p className="text-caption text-on-surface-variant">
                      {elem.Description}
                    </p>
                  </div>
                )
            })
        }


        </div>
      </section>
    </div>
  );
};

export default Feature;
