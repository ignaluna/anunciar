"use client"
import Statics from "@/components/Statics";
import Slider from "../components/swiper";
import Jaire from "@/components/Jaire";
import Footer from "@/components/Footer";
import Religio from "@/components/Religio";
import Accordion from "@/components/Accordion";
import Comunicación from "@/components/Comunicación";


export default function Home() {
  return (
    <div className={`flex flex-col min-h-screen`}>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        <Slider />
      </div>
      <div className="sticky top-0 h-screen bg-[#F1F1F1]  flex flex-col items-center 
      justify-center text-white">
        <Statics />
      </div>
      <div className="sticky top-0 h-screen bg-gradient-to-tr flex flex-col items-center justify-center text-white">
        <Jaire />
      </div>
      <div className="sticky top-0 h-screen bg-[#F1F1F1] flex flex-col items-center justify-center text-white">
        <Comunicación/>
      </div>
      <div className="sticky top-0 md:top-12 h-screen flex flex-col 
      items-center justify-center bg-[#F1F1F1] text-white">
        <Religio />
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-[#F1F1F1]">
        <Accordion></Accordion>
        <div className="absolute bottom-0 w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
