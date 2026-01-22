import image_a3ca0cf13218008a3e0f32593288f869856ef8de from 'figma:asset/a3ca0cf13218008a3e0f32593288f869856ef8de.png';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImg from 'figma:asset/5a0cd0b626da55f2fe9ad691ab9d8007d31a871d.png';

export function Hero() {
  const memberImages = [
    "https://static.wixstatic.com/media/6d27bb_9b9c39f63dc749dc8ff6940753f68c8c~mv2.jpeg/v1/crop/x_128,y_906,w_1792,h_1792/fill/w_168,h_168,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-09-26%20at%2010_23_51.jpeg",
    "https://static.wixstatic.com/media/6d27bb_4cd48170dac7416382725254baee636d~mv2.jpg/v1/crop/x_0,y_504,w_3024,h_3024/fill/w_168,h_168,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0021.jpg",
    "https://static.wixstatic.com/media/6d27bb_483ac9208d254a069bbc373b044b98ca~mv2.jpeg/v1/crop/x_0,y_0,w_800,h_802/fill/w_168,h_168,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-09-26%20at%2013_28_27.jpeg"
  ];

  return (
    // Background matches main theme #F0E6E0
    <section className="relative w-full overflow-hidden bg-[#F0E6E0]">
      <div className="container mx-auto px-6 py-12 md:py-20 lg:py-24">
        {/* Adjusted grid gap and alignment to bring image closer to text */}
        <div className="grid gap-12 lg:gap-8 lg:grid-cols-2 lg:items-center max-w-7xl mx-auto">
          {/* Left Column: Content */}
          <div className="flex flex-col space-y-8 animate-in slide-in-from-left-4 duration-700 fade-in order-2 lg:order-1 z-10">
            
            <div className="flex items-center space-x-2">
              <div className="h-px w-8 bg-[#754B2F]"></div>
              <span className="text-sm font-semibold tracking-widest text-[#754B2F] uppercase">
                Mentoria Estratégica
              </span>
            </div>
            
            <h1 className="text-4xl font-light tracking-tight text-[#3E2C22] md:text-5xl lg:text-[49px]">
              Você não precisa trabalhar mais. <br />
              <span className="font-serif italic text-[#754B2F]">Precisa decidir melhor.</span>
            </h1>
            
            <p className="max-w-xl text-lg text-[#5D4E46] leading-relaxed">
              Uma mentoria em grupo, online e prática, para empresários que querem organizar a gestão, 
              dominar os números e tomar decisões estratégicas com segurança.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary Button using the #754B2F brand color */}
              <button className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all bg-[#754B2F] rounded-sm hover:bg-[#5C3A2E] hover:shadow-lg hover:-translate-y-0.5 group">
                Quero organizar minha gestão
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className="flex items-center gap-4 text-sm text-[#5D4E46]">
              <div className="flex -space-x-2">
                 {memberImages.map((src, i) => (
                   <div key={i} className="w-8 h-8 rounded-full border-2 border-[#F0E6E0] bg-[#E6D5C8] flex items-center justify-center overflow-hidden">
                     <ImageWithFallback 
                        src={src} 
                        alt={`Member ${i + 1}`} 
                        className="w-full h-full object-cover"
                     />
                   </div>
                 ))}
              </div>
              <p>Junte-se a outros empresários</p>
            </div>
          </div>

          {/* Right Column: Image */}
          {/* Changed justify-end to justify-start to pull image left towards text */}
          <div className="flex justify-center lg:justify-start lg:pl-12 animate-in slide-in-from-right-4 duration-700 fade-in delay-200 order-1 lg:order-2 relative">
            <div className="relative inline-block">
               {/* Decoration Background matches image size */}
               <div className="absolute inset-0 bg-[#F3DBB2] rounded-sm transform translate-x-4 translate-y-4"></div>
               
               {/* Image Container - Width adapts to image content */}
               <div className="relative rounded-sm shadow-xl bg-[#E6D5C8] overflow-hidden">
                  <ImageWithFallback
                    src={heroImg}
                    alt="Mentora Niceia Fronza"
                    className="block h-[500px] lg:h-[600px] w-auto max-w-[90vw] object-contain object-bottom"
                  />
                  
                  {/* Gradient Overlay with Logo */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#3E2C22] via-[#3E2C22]/80 to-transparent pt-24 pb-8 px-8 flex justify-center items-end">
                     <div className="w-48 max-w-full">
                        {/* Using standard img tag to ensure transparency is preserved */}
                        <img
                          src={image_a3ca0cf13218008a3e0f32593288f869856ef8de}
                          alt="Pontua Consultoria Empresarial"
                          className="w-full h-auto object-contain drop-shadow-md opacity-90 hover:opacity-100 transition-opacity"
                        />
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
