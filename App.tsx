
import React from 'react';

const App: React.FC = () => {
  const notionLink = "https://www.notion.so/A-FORMA-O-DA-MENTE-RICA-2df80da4aa9e804ba86ad33da82f261b?source=copy_link";

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-stone-200 selection:text-stone-900">
      
      {/* Decorative Borders */}
      <div className="fixed inset-0 border-[12px] md:border-[20px] border-stone-100 pointer-events-none z-40"></div>
      
      {/* Background Accent */}
      <div className="fixed top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-stone-200/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[30vw] h-[30vw] bg-stone-200/30 blur-[100px] rounded-full pointer-events-none"></div>

      <main className="relative z-10 max-w-4xl w-full px-8 py-20 md:py-32 flex flex-col items-center space-y-20 md:space-y-28">
        
        {/* Header - Signature Style */}
        <header className="w-full text-center space-y-6 fade-in">
          <div className="flex flex-col items-center space-y-3">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-stone-400 font-semibold mb-2">
              Início da Transição
            </span>
            <div className="h-px w-8 bg-stone-300"></div>
          </div>
          <h1 className="serif text-5xl md:text-7xl lg:text-8xl text-stone-900 leading-[1.1] font-normal tracking-tight">
            Bem-vindo à sua nova <br />
            <span className="italic font-light text-stone-800">clara perspectiva.</span>
          </h1>
        </header>

        {/* Validation Quote */}
        <section className="max-w-2xl w-full fade-in delay-1">
          <div className="relative p-8 md:p-12 bg-white/40 backdrop-blur-sm border border-stone-200/60 shadow-sm">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f8f7f4] px-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-stone-300">
                  <path d="M11 17L11 19L7 19C5.34315 19 4 17.6569 4 16C4 14.3431 5.34315 13 7 13L7 13C8.65685 13 10 14.3431 10 16L10 17Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M20 17L20 19L16 19C14.3431 19 13 17.6569 13 16C13 14.3431 14.3431 13 16 13L16 13C17.6569 13 19 14.3431 19 16L19 17Z" stroke="currentColor" strokeWidth="1.5" />
                </svg>
             </div>
             
             <p className="serif text-xl md:text-2xl text-stone-700 leading-relaxed text-center italic font-light">
              "A maioria das pessoas reage ao dinheiro; poucas escolhem regê-lo. Você acaba de ingressar no segundo grupo."
             </p>
             
             <div className="mt-10 space-y-6 text-stone-600 text-base md:text-lg leading-relaxed text-center font-light tracking-wide">
                <p>
                  Este não é um evento casual. Sua decisão de repensar a lógica do capital demonstra uma maturidade que poucos alcançam. Não buscamos aqui o efêmero, mas o perene.
                </p>
                <p>
                  O que você adquiriu é o mapa para uma autonomia intelectual e financeira, construída sobre pilares de consciência e tempo.
                </p>
             </div>
          </div>
        </section>

        {/* Product Identity & Usage */}
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 fade-in delay-2">
          <div className="space-y-6">
            <h2 className="serif text-3xl text-stone-800 font-light border-b border-stone-200 pb-4">A Filosofia</h2>
            <p className="text-stone-600 leading-relaxed font-light text-sm md:text-base">
              Nossa abordagem ignora as fórmulas de enriquecimento rápido. Focamos na <strong>reestruturação da percepção</strong>. Entender o fluxo do dinheiro é, antes de tudo, entender o fluxo de suas próprias decisões e prioridades.
            </p>
          </div>
          
          <div className="space-y-6">
            <h2 className="serif text-3xl text-stone-800 font-light border-b border-stone-200 pb-4">O Caminho</h2>
            <ul className="space-y-5 text-stone-600 text-sm md:text-base">
              <li className="flex items-start gap-4">
                <span className="text-[10px] text-stone-400 font-bold border border-stone-200 px-1.5 py-0.5 mt-1">I</span>
                <span className="font-light">Contemple cada módulo. A pressa é o inimigo da clareza patrimonial.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[10px] text-stone-400 font-bold border border-stone-200 px-1.5 py-0.5 mt-1">II</span>
                <span className="font-light">Reflita sobre sua história antes de planejar o seu futuro.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[10px] text-stone-400 font-bold border border-stone-200 px-1.5 py-0.5 mt-1">III</span>
                <span className="font-light">Aplique as ferramentas com a calma de quem sabe para onde caminha.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <div className="w-full flex flex-col items-center space-y-12 fade-in delay-3">
          <div className="w-full flex items-center justify-center space-x-4">
            <div className="h-px flex-1 bg-stone-200 hidden md:block"></div>
            <div className="text-[10px] tracking-[0.4em] text-stone-400 uppercase font-medium">O próximo passo</div>
            <div className="h-px flex-1 bg-stone-200 hidden md:block"></div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-stone-300 opacity-0 group-hover:opacity-20 blur-lg transition duration-1000 group-hover:duration-200"></div>
            <a 
              href={notionLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block px-16 py-6 bg-stone-900 text-stone-50 text-sm uppercase tracking-[0.2em] font-medium transition-all duration-500 hover:bg-stone-800 hover:px-20 active:scale-[0.98] text-center"
            >
              Iniciar minha jornada
            </a>
          </div>

          <footer className="max-w-sm text-center">
            <p className="text-stone-400 text-[11px] leading-relaxed tracking-widest uppercase font-light">
              Assuma a governança do seu tempo. <br /> O processo é agora.
            </p>
          </footer>
        </div>

      </main>

      {/* Aesthetic Vertical Labels */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col space-y-24 items-center opacity-30 pointer-events-none">
        <span className="rotate-90 text-[10px] tracking-[0.6em] uppercase text-stone-500 whitespace-nowrap">CONSCIÊNCIA</span>
        <span className="rotate-90 text-[10px] tracking-[0.6em] uppercase text-stone-500 whitespace-nowrap">ESTRATÉGIA</span>
        <span className="rotate-90 text-[10px] tracking-[0.6em] uppercase text-stone-500 whitespace-nowrap">LIBERDADE</span>
      </div>

    </div>
  );
};

export default App;
