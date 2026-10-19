import React from 'react';
import test1 from '../assets/Elia.png';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SoftwareIcon: React.FC<{ label: string; sub: string; icon: React.ReactNode }> = ({ label, sub, icon }) => (
  <div className="flex items-start gap-4 p-4 border border-slate-100 rounded-2xl bg-slate-50 flex-1 min-w-[200px] hover:border-slate-900 hover:bg-white transition-all group">
    <div className="w-12 h-12 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-slate-900 overflow-hidden group-hover:border-slate-900 transition-all p-2">
      {icon}
    </div>
    <div className="flex flex-col">
      <span className="text-slate-900 font-bold text-sm tracking-tight">{label}</span>
      <span className="text-slate-400 text-[10px] leading-tight uppercase font-medium">{sub}</span>
    </div>
  </div>
);

const PresentationCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="border border-slate-100 rounded-[28px] md:rounded-[32px] p-6 md:p-8 bg-white shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
    <h3 className="text-xl md:text-2xl font-black font-gravitor text-slate-900 mb-5 md:mb-6 uppercase tracking-tight italic">
      {title}
    </h3>
    <div className="flex-1">
      {children}
    </div>
  </div>
);

const Presentation: React.FC = () => {
  const photoReveal = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const bioReveal = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const bottomReveal = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  const technologies = [
    { label: "React", sub: "Modern Frontend Library", color: "#61DAFB", path: "M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9z" },
    { label: "TypeScript", sub: "Strict & Scalable code", color: "#3178C6", path: "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" },
    { label: "Tailwind CSS", sub: "Utility-first styling", color: "#06B6D4", path: "M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" },
    { label: "Flutter", sub: "Mobile development", color: "#02569B", path: "M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" },
    { label: "HTML5", sub: "Structure web", color: "#E34F26", path: "M1.5 0h21l-1.9 21.5L12 24l-8.6-2.5L1.5 0zm9.6 11.2l-.3-3.2h6.9l.2-2.3H6.3l.8 8.6h5.8l-.4 3.7-2.5.7-2.4-.7-.2-2h-2.3l.3 4 4.5 1.2 4.5-1.2.7-8.8H11.1z" },
    { label: "CSS3", sub: "Design web", color: "#1572B6", path: "M1.5 0h21l-1.9 21.5L12 24l-8.6-2.5L1.5 0zm14.6 3.6l-.3 3.1H7.1l.2 1.8h8.2l-1.1 11.6L12 21.2l-2.4-1.1-.3-3H7.1l.4 5.3L12 23.3l4.5-1.4 1.5-15h-10l-.2-1.9h10.3l.1-1.3z" }
  ];

  return (
    <section id="presentation" className="bg-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* TOP ROW: Photo & Bio */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 lg:mb-24">
          <div
            ref={photoReveal.ref}
            className="lg:col-span-5 flex justify-center lg:justify-start transition-all duration-700 ease-out"
            style={{
              opacity: photoReveal.isVisible ? 1 : 0,
              transform: photoReveal.isVisible ? 'translateX(0)' : 'translateX(-60px)',
            }}
          >
            <div className="relative group">
              <div className="w-full max-w-[480px] aspect-[4/3] bg-white p-4 rounded-[40px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] border border-slate-100">
                <div className="w-full h-full bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 rounded-[28px] overflow-hidden">
                  <img 
                    src={test1} 
                    alt="Assalé Yao Eliakim" 
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-slate-200 rounded-full opacity-30 blur-2xl group-hover:opacity-50 transition-opacity"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-slate-200 rounded-full opacity-30 blur-2xl group-hover:opacity-50 transition-opacity"></div>
            </div>
          </div>

          <div
            ref={bioReveal.ref}
            className="lg:col-span-7 space-y-4 pt-4 transition-all duration-700 ease-out delay-200"
            style={{
              opacity: bioReveal.isVisible ? 1 : 0,
              transform: bioReveal.isVisible ? 'translateX(0)' : 'translateX(60px)',
            }}
          >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-slate-50 border border-slate-100 rounded-full mb-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
                <span className="text-[10px] font-black font-gravitor text-slate-600 tracking-[0.2em] uppercase">
                  DEVELOPPEUR WEB
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-gravitor text-slate-900 leading-tight uppercase tracking-tighter italic">
                Bonjour, je suis<br />
                <span className="text-slate-800">Assalé Yao Eliakim</span>
              </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-2xl">
              Développeur Web rigoureux et orienté détail, je conçois des interfaces web modernes et performantes en m'appuyant sur React, TypeScript et Tailwind CSS. Curieux et en constante progression, je m'investis pleinement dans chaque projet que je réalise.
            </p>
          </div>
        </div>

        {/* BOTTOM ROW: Technical Stack (Left) & Cards (Right) */}
        <div
          ref={bottomReveal.ref}
          className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-stretch transition-all duration-700 ease-out"
          style={{
            opacity: bottomReveal.isVisible ? 1 : 0,
            transform: bottomReveal.isVisible ? 'translateY(0)' : 'translateY(50px)',
          }}
        >
          
          {/* Tech Stack Column (Left) */}
          <div className="lg:col-span-5 flex flex-col">
            <PresentationCard title="Technologies">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                {technologies.map((tech, i) => (
                  <SoftwareIcon 
                    key={i}
                    label={tech.label} 
                    sub={tech.sub} 
                    icon={
                      <svg viewBox="0 0 24 24" className="w-full h-full" style={{ color: tech.color }} fill="currentColor">
                        <path d={tech.path} />
                      </svg>
                    } 
                  />
                ))}
              </div>
            </PresentationCard>
          </div>

          {/* Cards Column (Right) */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row gap-6 lg:gap-8">
            
            {/* Communication Card */}
            <div className="flex-1">
              <PresentationCard title="Langues">
                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-slate-900">Français</span>
                    <span className="text-slate-400 text-sm font-medium italic">(Natif)</span>
                  </div>
                  <div className="flex items-baseline gap-2 pt-2 border-t border-slate-50">
                    <span className="text-xl font-bold text-slate-900">Anglais</span>
                    <span className="text-slate-400 text-sm font-medium italic">(Basique)</span>
                  </div>
                </div>
              </PresentationCard>
            </div>

            {/* Passions Card */}
            <div className="flex-1">
              <PresentationCard title="Centres d'intérêt">
                <ul className="space-y-3">
                  {["Jeux Vidéo", "Musique", "Design de Prototypes", "Lecture Technique"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                      <span className="w-2 h-[2px] bg-slate-900" />
                      {item}
                    </li>
                  ))}
                </ul>
              </PresentationCard>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Presentation;