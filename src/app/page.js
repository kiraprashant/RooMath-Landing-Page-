import FAQ from "@/Cmp/FAQ";
import Onboarding from "@/Cmp/Onboarding";
import Parsing from "@/Cmp/Parsing";
import Privacy from "@/Cmp/Privacy";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Feature from "@/Cmp/Feature";
import Hero from "@/Cmp/Hero";

export default function Home() {
  return (
    <div>
         <Hero />
         <Feature />
         <Onboarding />
         <Parsing />
         <Privacy />
         <FAQ />
    </div>
  );
}
