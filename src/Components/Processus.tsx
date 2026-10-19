import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Processus: React.FC = () => {
  const headerReveal = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const step0 = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const step1 = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const step2 = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const step3 = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const stepReveals = [step0, step1, step2, step3];
  const steps = [
    {
      id: '01',
      title: 'ANALYSE',
      description: 'Compréhension approfondie des besoins et définition des objectifs'
    },
    {
      id: '02',
      title: 'ARCHITECTURE',
      description: 'Conception technique, structure des composants et design system'
    },
    {
      id: '03',
      title: 'DÉVELOPPEMENT',
      description: 'Implémentation itérative avec tests unitaires et intégration continue'
    },
    {
      id: '04',
      title: 'LIVRAISON',
      description: 'Déploiement en production avec documentation et formation'
    }
  ];

  return (
    <section id="processus" className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      {/* WHITE BUBBLE */}
      <div className="max-w-7xl mx-auto bg-white rounded-[48px] px-12 py-16 shadow-2xl">
        {/* Section Header */}
        <div
          ref={headerReveal.ref}
          className="text-center mb-24 transition-all duration-700 ease-out"
          style={{
            opacity: headerReveal.isVisible ? 1 : 0,
            transform: headerReveal.isVisible ? 'translateY(0)' : 'translateY(40px)',
          }}
        >
          <h2 className="text-4xl md:text-5xl font-black font-gravitor text-gray-900 uppercase tracking-tighter mb-4">
            Comment je travaille
          </h2>
          <div className="w-20 h-1.5 bg-[#FA8072] mx-auto rounded-full" />
        </div>

        {/* Minimalist Vertical Track */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2 hidden md:block" />

          <div className="space-y-16 md:space-y-24 relative">
            {steps.map((step, index) => (
              <div
                key={step.id}
                ref={stepReveals[index]?.ref}
                className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} transition-all duration-700 ease-out`}
                style={{
                  opacity: stepReveals[index]?.isVisible ? 1 : 0,
                  transform: stepReveals[index]?.isVisible
                    ? 'translateX(0)'
                    : index % 2 === 0
                      ? 'translateX(-50px)'
                      : 'translateX(50px)',
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                
                {/* Center Indicator (Gamer Style) - En premier sur mobile */}
                <div className="order-1 md:order-2 relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#2D2E32] border-4 border-black rounded-xl shadow-[4px_4px_0px_#000000] flex flex-col items-center justify-center transform hover:scale-110 transition-transform cursor-default">
                    <span className="text-[10px] font-silkscreen text-[#FA8072] leading-none mb-1">LVL</span>
                    <span className="text-xl font-silkscreen text-white leading-none">{step.id}</span>
                  </div>
                  <div className="w-[2px] h-6 bg-gray-200 md:hidden mt-2" />
                </div>

                {/* Content Side - En second sur mobile (sous le badge LVL) */}
                <div className={`order-2 md:order-1 flex-1 w-full text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <h3 className="text-2xl font-black font-['Georgia',serif] text-gray-900 mb-2 md:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-sm mx-auto md:mx-0 inline-block">
                    {step.description}
                  </p>
                </div>

                {/* Spacer for the other side on desktop */}
                <div className="order-3 md:order-3 flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Processus;