import React from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import logoImg from '../../assets/LogoQuiosque.png'; // Caminho ajustado

export function Header() {
  return (
    <header className="bg-white shadow-sm h-16 md:h-20 flex items-center justify-between px-4 md:px-8 z-10 shrink-0">
      
      {/* LADO ESQUERDO: Logo e Marca */}
      <div className="flex items-center gap-3">
        
        {/* 1. Logo (Só aparece no Mobile 'md:hidden') */}
        <div className="md:hidden w-10 h-10 bg-brand-white rounded-full border-2 border-brand-black flex items-center justify-center overflow-hidden shrink-0">
          <img 
            src={logoImg} 
            alt="Logo" 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* 2. Textos */}
        <div>
          {/* VERSÃO MOBILE: Mostra a Marca igual a Sidebar */}
          <div className="md:hidden flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">
              Quiosque
            </span>
            <h1 className="font-bold text-lg text-brand-black leading-none">
              Pé na Areia
            </h1>
          </div>

          {/* VERSÃO TABLET/PC: Mostra Saudação */}
          <div className="hidden md:block">
            <h1 className="text-2xl font-bold text-brand-black leading-none">
              Olá, Atleta! 🏐
            </h1>
            <p className="text-sm text-gray-500 mt-1">Bora repor as energias?</p>
          </div>
        </div>
      </div>

      {/* LADO DIREITO: Busca e Carrinho */}
      <div className="flex items-center gap-4">
        {/* Busca (Só aparece em Tablet/PC) */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Buscar produtos..." 
            className="pl-9 pr-4 py-2 rounded-full bg-brand-gray border-none focus:ring-2 focus:ring-brand-yellow focus:outline-none w-48 transition-all"
          />
        </div>

        {/* Botão Carrinho */}
        <button className="relative bg-brand-black text-white p-2 md:p-3 rounded-full hover:bg-brand-yellow hover:text-black transition-colors group">
          <ShoppingCart size={20} className="group-active:scale-90 transition-transform" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">2</span>
        </button>
      </div>
    </header>
  );
}