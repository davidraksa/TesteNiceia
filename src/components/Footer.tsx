import React from 'react';
import { ArrowRight, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    // Background updated to dark coffee #3E2C22
    <footer className="bg-[#3E2C22] text-[#D4C5BC]">
      {/* Final CTA Section */}
      <div className="border-b border-[#543D32]">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-5xl font-light text-[#F0E6E0] mb-6">
            Seu negócio não cresce com mais esforço. <br />
            <span className="font-serif italic text-[#F3DBB2]">Ele cresce com decisões melhores.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#A89890] max-w-2xl mx-auto mb-10">
            Se você está pronto para sair do improviso e assumir o controle da gestão, essa mentoria é o próximo passo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button className="px-8 py-4 bg-[#F3DBB2] text-[#3E2C22] font-bold rounded-sm hover:bg-[#E6D5C8] transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
               Garantir minha vaga agora
             </button>
             <button className="px-8 py-4 bg-transparent border border-[#754B2F] text-[#F0E6E0] rounded-sm hover:bg-[#543D32] transition-colors flex items-center justify-center">
               Agendar reunião estratégica
               <ArrowRight className="w-5 h-5 ml-2" />
             </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-serif italic text-[#F0E6E0] mb-1">Niceia Fronza</h4>
            <p className="text-sm text-[#7D6E66]">Mentoria & Gestão Empresarial</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <a href="tel:+5549988173962" className="flex items-center gap-2 text-[#D4C5BC] hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm tracking-wide">(49) 98817-3962</span>
            </a>
            <div className="hidden md:block w-px h-4 bg-[#543D32]"></div>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#543D32] text-center text-xs text-[#5D4E46]">
          <p>&copy; {new Date().getFullYear()} Niceia Fronza. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
