import React from 'react';

export function CardProduto({ product }) {
  return (
    <div className="bg-white p-3 md:p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-yellow cursor-pointer group flex sm:flex-col gap-4 sm:gap-0 items-center sm:items-start">
      
      {/* Imagem */}
      <div className="w-20 h-20 sm:w-full sm:h-40 bg-brand-gray rounded-xl sm:mb-4 flex items-center justify-center text-4xl sm:text-6xl shrink-0 group-hover:scale-105 transition-transform">
        {product.image}
      </div>
      
      {/* Infos */}
      <div className="flex-1 w-full">
        <h3 className="font-bold text-brand-black text-base sm:text-lg leading-tight mb-1">
            {product.name}
        </h3>
        <p className="text-gray-500 text-xs sm:text-sm line-clamp-2 h-auto sm:h-10 mb-2 sm:mb-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-2">
          <span className="font-bold text-lg text-brand-black">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          <button className="bg-brand-black text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-colors active:scale-90">
            +
          </button>
        </div>
      </div>
    </div>
  );
}