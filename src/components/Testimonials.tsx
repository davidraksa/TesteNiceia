import React from 'react';
import Slider from 'react-slick';
import { Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    text: "Só temos elogios! Tivemos a oportunidade de contar com o trabalho da Pontua, conduzido pela Niceia, e só temos elogios! O serviço foi prestado com excelência, trazendo uma visão clara e estratégica para o nosso negócio. A dedicação, profissionalismo e atenção aos detalhes fizeram toda a diferença, resultando em melhorias significativas na gestão e nos resultados da empresa. Agradecemos muito pela parceria e recomendamos fortemente a todos que buscam evolução e crescimento.",
    author: "Jean Knoll",
    company: "Unicapital",
    image: "https://static.wixstatic.com/media/6d27bb_9b9c39f63dc749dc8ff6940753f68c8c~mv2.jpeg/v1/crop/x_128,y_906,w_1792,h_1792/fill/w_168,h_168,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-09-26%20at%2010_23_51.jpeg"
  },
  {
    text: "A consultoria trouxe mudanças significativas para a empresa, especialmente na mentalidade e na visão estratégica do negócio. A melhoria na gestão e no alinhamento da equipe geraram resultados concretos. A Pontua demonstrou que é possível empreender com sucesso e conduzir a empresa a um novo patamar de excelência.",
    author: "Adriana de Almeida Duarte",
    company: "Ótica Conceitus Oculare",
    image: "https://static.wixstatic.com/media/6d27bb_4cd48170dac7416382725254baee636d~mv2.jpg/v1/crop/x_0,y_504,w_3024,h_3024/fill/w_168,h_168,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0021.jpg"
  },
  {
    text: "Caminhar com pessoas que tem um olhar atento, um filtro maior para nossa empresa, um olhar para ver aonde estamos, como estamos caminhando, aonde queremos ir e como chegaremos lá. Isso sempre fez toda a diferença. A Niceia é aquela mulher que senta com a gente, muitas vezes pegou na minha mão, foi até um suporte emocional em tomadas de decisões, e eu sou muito grata, muito grata. Desejo muito sucesso, e que muitas pessoas vivam essa experiência de ter alguém tão competente, uma empresa tão especial para caminhar junto e olhar para o nosso negócio.",
    author: "Eliane Moura",
    company: "Eliane Moura Brand",
    image: "https://static.wixstatic.com/media/6d27bb_483ac9208d254a069bbc373b044b98ca~mv2.jpeg/v1/crop/x_0,y_0,w_800,h_802/fill/w_168,h_168,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-09-26%20at%2013_28_27.jpeg"
  }
];

export function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    customPaging: (i) => (
        <div className="w-3 h-3 mx-1 rounded-full bg-[#E6D5C8] hover:bg-[#754B2F] transition-colors"></div>
    ),
    dotsClass: "slick-dots" // Using standard class to target with manual CSS
  };

  return (
    <section className="py-20 bg-[#F0E6E0] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-[#754B2F] uppercase">
            Depoimentos
          </span>
          <h2 className="mt-4 text-3xl font-light text-[#3E2C22] md:text-4xl">
            O que dizem nossos mentorados
          </h2>
        </div>

        <div className="max-w-4xl mx-auto pb-12"> {/* Added padding bottom for dots space */}
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <div key={index} className="px-4 py-4 outline-none">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-sm shadow-sm border border-[#E6D5C8]/50">
                   {/* Image */}
                   <div className="flex-shrink-0">
                     <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-[#F3DBB2] overflow-hidden shadow-md">
                        <ImageWithFallback 
                           src={item.image}
                           alt={item.author}
                           className="w-full h-full object-cover"
                        />
                     </div>
                   </div>

                   {/* Content */}
                   <div className="flex-1 text-center md:text-justify">
                      <Quote className="w-8 h-8 text-[#754B2F]/20 mb-4 mx-auto md:mx-0" />
                      <p className="text-lg text-[#5D4E46] italic leading-relaxed mb-6">
                        "{item.text}"
                      </p>
                      <div>
                        <h4 className="font-serif text-xl text-[#3E2C22]">{item.author}</h4>
                        <p className="text-sm text-[#754B2F] font-medium tracking-wide">{item.company}</p>
                      </div>
                   </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      
      {/* Essential Slick CSS embedded manually */}
      <style>{`
        /* Slick Slider */
        .slick-slider {
            position: relative;
            display: block;
            box-sizing: border-box;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-touch-callout: none;
            -khtml-user-select: none;
            -ms-touch-action: pan-y;
            touch-action: pan-y;
            -webkit-tap-highlight-color: transparent;
        }
        .slick-list {
            position: relative;
            display: block;
            overflow: hidden;
            margin: 0;
            padding: 0;
        }
        .slick-list:focus {
            outline: none;
        }
        .slick-list.dragging {
            cursor: pointer;
            cursor: hand;
        }
        .slick-slider .slick-track,
        .slick-slider .slick-list {
            -webkit-transform: translate3d(0, 0, 0);
            -moz-transform: translate3d(0, 0, 0);
            -ms-transform: translate3d(0, 0, 0);
            -o-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
        .slick-track {
            position: relative;
            top: 0;
            left: 0;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
        .slick-track:before,
        .slick-track:after {
            display: table;
            content: '';
        }
        .slick-track:after {
            clear: both;
        }
        .slick-loading .slick-track {
            visibility: hidden;
        }
        .slick-slide {
            display: none;
            float: left;
            height: 100%;
            min-height: 1px;
        }
        [dir='rtl'] .slick-slide {
            float: right;
        }
        .slick-slide img {
            display: block;
        }
        .slick-slide.slick-loading img {
            display: none;
        }
        .slick-slide.dragging img {
            pointer-events: none;
        }
        .slick-initialized .slick-slide {
            display: block;
        }
        .slick-loading .slick-slide {
            visibility: hidden;
        }
        .slick-vertical .slick-slide {
            display: block;
            height: auto;
            border: 1px solid transparent;
        }
        .slick-arrow.slick-hidden {
            display: none;
        }
        
        /* Custom Dots Styles - Fixing vertical stacking */
        .slick-dots {
            position: absolute;
            bottom: -30px;
            display: block;
            width: 100%;
            padding: 0;
            margin: 0;
            list-style: none;
            text-align: center;
        }
        .slick-dots li {
            position: relative;
            display: inline-block;
            width: 20px;
            height: 20px;
            margin: 0 5px;
            padding: 0;
            cursor: pointer;
        }
        .slick-dots li button {
            font-size: 0;
            line-height: 0;
            display: block;
            width: 20px;
            height: 20px;
            padding: 5px;
            cursor: pointer;
            color: transparent;
            border: 0;
            outline: none;
            background: transparent;
        }
        
        /* Custom Dot Appearance */
        .slick-dots li button:before {
            display: none; /* Hide default content */
        }
        
        /* Using the div inside customPaging */
        .slick-dots li div {
           /* Inherit size from our Tailwind classes */
        }
        
        .slick-dots li.slick-active div {
            background-color: #754B2F;
        }
      `}</style>
    </section>
  );
}
