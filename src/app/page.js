"use client"
import Statics from "@/components/Statics";
import Slider from "../components/Slider";
import Jaire from "@/components/Jaire";
import Religio from "@/components/Religio";
import Accordion from "@/components/Accordion";
import Comunicación from "@/components/Comunicación";
import SliderSmall from "@/components/SliderSmall";


export default function Home() {
  return (
    <div className={`flex flex-col min-h-screen w-screen`}>
      <div id="Anunciar Fotos" className="hidden sticky top-0 h-screen lg:flex flex-col items-center justify-center z-index-10">
        <Slider />
      </div>
      <div id="Anunciar Fotos celular" className="flex sticky top-0 h-screen lg:hidden flex-col items-center justify-center z-index-10">
        <SliderSmall />
      </div>
      
      <div className="sticky top-1 h-auto bg-[#F1F1F1] py-5  flex flex-col items-center 
      justify-center text-white z-index-10">
        <Statics />
      </div>
      <div id="jaire" className="sticky top-0 h-screen bg-gradient-to-tr flex 
      flex-col items-center justify-center z-index-10">
        <Jaire />
      </div>
      <div id="comunicacion" className="sticky top-0 p-10 bg-[#F1F1F1] 
      flex flex-col items-center justify-center z-index-10">
        <Comunicación />
      </div>
      <div id="religio" className="sticky top-0 h-screen w-screen flex flex-col 
      items-center bg-[#F1F1F1] z-index-10">
        <Religio />
      </div>
      <div id="accordion" className="sticky top-0 h-screen flex flex-col items-center justify-center bg-[#F1F1F1] z-index-10">
        <Accordion></Accordion>
      </div>
    </div>
  );
}
