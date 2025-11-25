import { useState } from 'react';
import { Flame } from 'lucide-react'; // Removemos 'Search', pois foi para o componente BuscaMobile

// Imports de Componentes
import { Header } from './components/layout/Header';
import { BarraLateral } from './components/layout/BarraLateral';
import { BarraInferior } from './components/layout/BarraInferior';
import { CardProduto } from './components/produto/CardProduto';

// Novos componentes de UI
import { BannerPromocional } from './components/ui/BannerPromocional';
import { BuscaMobile } from './components/ui/BuscaMobile';

// Dados
import { categories, products } from './data/db';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const filteredProducts = activeTab === 'home' 
    ? products 
    : products.filter(product => product.category === activeTab || product.category === 'destaques'); 

  return (
    <div className="flex flex-col md:flex-row h-screen bg-brand-gray font-sans text-brand-black overflow-hidden">
      
      <BarraLateral 
        categories={categories} 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />

      <div className="flex-1 flex flex-col h-full relative w-full">
        
        <Header />

        <main className="flex-1 overflow-y-auto p-4 md:p-8 pb-24 md:pb-8 bg-brand-gray scroll-smooth">
          
          {/* Componente de Busca (Só aparece no mobile, controlado dentro do próprio componente via CSS) */}
          <BuscaMobile />

          {/* Banner (Só na Home) */}
          {activeTab === 'home' && <BannerPromocional />}

          {/* Seção de Produtos */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold flex items-center gap-2 capitalize">
                <Flame className="text-brand-yellow fill-brand-yellow" size={20} /> 
                {activeTab === 'home' ? 'Cardápio Completo' : activeTab}
              </h2>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-10 text-gray-500">
                <p>Nenhum item encontrado nesta categoria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <CardProduto key={product.id} product={product} />
                ))}
              </div>
            )}
          </section>
        </main>

        <BarraInferior 
          categories={categories} 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />

      </div>
    </div>
  );
}