import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useScrollReveal } from '../hooks/useScrollReveal';
import SkeletonImage from './SkeletonImage';
import projectImg from "../assets/student2.png";
import projectImg1 from "../assets/genie5.png";
import projectImg3 from "../assets/cinevibe.png";

interface ProjectData {
  id: number;
  name: string;
  image?: string;
  mission: string;
  role: string;
  techStack: string[];
  link?: string;
}

const projects: ProjectData[] = [
  {
    id: 1,
    name: "UPB STUDENT's",
    image: projectImg,
    mission: "Créer une plateforme web intuitive permettant aux étudiants de l'UPB d'accéder facilement aux travaux dirigés (TD), aux travaux pratiques (TP) et aux anciens sujets d'examens, afin de mieux préparer leurs évaluations.",
    role: "Développeur Front-End",
    techStack: ["React", "Tailwind CSS", "TypeScript"],
    link: "https://upbstudents-labibliotheque.com/",
  },
  {
    id: 2,
    name: "GENIE UPB",
    image: projectImg1,
    mission: "Créer une plateforme web pour le concours Génie UPB (Université Polytechnique de Bingerville), permettant aux participants de s'inscrire (équipes/visiteurs) et d'accéder aux informations des épreuves.",
    role: "Développeur Front-End",
    techStack: ["React", "Tailwind CSS", "TypeScript"],
    link: "/genieupb",
  },
  {
    id: 3,
    name: "CLINIQUE LIFE",
    mission: "Digitalisation des services d'un établissement de santé pour optimiser l'expérience des patients et la gestion du personnel. Développement d'interfaces réactives et accessibles (prise de rendez-vous en ligne interactive), conception d'un tableau de bord (dashboard) d'administration complet pour piloter l'activité au quotidien, et optimisation des performances et de l'accessibilité.",
    role: "Dev Front-End & Chef de Projet",
    techStack: ["React", "Tailwind CSS", "TypeScript", "UX/UI Design"],
  },
  {
    id: 4,
    name: "ACORP GROUP",
    mission: "Plateforme e-commerce moderne dédiée à la vente de matériel informatique et d'équipements technologiques, incluant un module de prise de rendez-vous en ligne pour les services de maintenance et de support technique.",
    role: "Développeur Full-Stack",
    techStack: ["React", "Tailwind CSS", "TypeScript", "Node.js"],
  },
  {
    id: 5,
    name: "CINEVIBE",
    image: projectImg3,
    mission: "Développer CineVibe, une application mobile intuitive permettant de consulter les films à l'affiche et de réserver facilement des places de cinéma en temps réel.",
    role: "Développeur Front-End",
    techStack: ["Flutter"],
    link: "/cinevibe",
  },
];

const ProjectCard: React.FC<{ project: ProjectData; onOpen: (p: ProjectData) => void; isOpening: boolean }> = ({ project, onOpen, isOpening }) => {
  return (
    <div
      onClick={() => onOpen(project)}
      className="relative w-[320px] sm:w-[340px] md:w-[375px] h-[430px] sm:h-[450px] md:h-[500px] rounded-[50px] border border-[#CCCCCC] bg-white shadow-[0_4px_15px_rgba(0,0,0,0.07)] flex flex-col overflow-hidden group shrink-0 cursor-pointer transition-opacity duration-700 ease-in-out"
      style={{
        opacity: isOpening ? 0 : 1,
        pointerEvents: isOpening ? 'none' : 'auto'
      }}
    >
      {/* HEADER AREA */}
      <div 
        className={`pt-12 md:pt-16 pb-8 md:pb-12 border-b border-[#CCCCCC] text-center px-4 transition-opacity duration-700 ease-in-out`}
        style={{
          opacity: isOpening ? 0 : 1
        }}
      >
        <h1 className="text-[26px] sm:text-[30px] md:text-[34px] leading-tight font-black font-['Georgia',serif] uppercase tracking-tighter text-black flex justify-center items-center gap-2">
          <span>{project.name.split(" ")[0]}</span>
          {project.name.split(" ").slice(1).join(" ") && (
            <span>{project.name.split(" ").slice(1).join(" ")}</span>
          )}
        </h1>
      </div>

      {/* CARDS STACK */}
      <div className="relative flex-1 flex flex-col items-center pt-12">
        {/* REAR CARD 1 (Deeper/Bottom) */}
        <div 
          className="absolute top-8 md:top-10 w-[270px] sm:w-[290px] md:w-[320px] h-[140px] md:h-[170px] bg-[#2D2E32] rounded-[45px] shadow-lg transform transition-all duration-700 ease-in-out group-hover:-translate-y-8"
          style={{
            transform: isOpening ? 'translateY(-500px)' : undefined,
            opacity: isOpening ? 0 : 1,
            transitionDelay: isOpening ? '0ms' : '300ms'
          }}
        />
        
        {/* REAR CARD 2 (Lighter Grey/Middle) */}
        <div 
          className="absolute top-12 md:top-16 w-[300px] sm:w-[320px] md:w-[350px] h-[155px] md:h-[185px] bg-[#5C616B] rounded-[48px] shadow-xl transform transition-all duration-700 ease-in-out group-hover:-translate-y-5"
          style={{
            transform: isOpening ? 'translateY(-500px)' : undefined,
            opacity: isOpening ? 0 : 1,
            transitionDelay: '150ms'
          }}
        />

        {/* MAIN IMAGE CARD (Top) */}
        <div 
          className="relative z-10 w-[320px] sm:w-[340px] md:w-[375px] h-[215px] sm:h-[225px] md:h-[250px] mt-10 md:mt-12 transition-all duration-700 ease-in-out group-hover:-translate-y-2"
          style={{
            transform: isOpening ? 'translateY(-500px)' : undefined,
            opacity: isOpening ? 0 : 1,
            transitionDelay: isOpening ? '300ms' : '0ms'
          }}
        >
          <div 
            className="w-full h-full rounded-[35px] overflow-hidden shadow-2xl"
            style={{
              maskImage: `url("data:image/svg+xml,%3Csvg width='375' height='250' viewBox='0 0 375 250' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0H375V150A100 100 0 0 0 275 250H0V0Z' fill='black'/%3E%3C/svg%3E")`,
              WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='375' height='250' viewBox='0 0 375 250' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0H375V150A100 100 0 0 0 275 250H0V0Z' fill='black'/%3E%3C/svg%3E")`,
              maskSize: '100% 100%',
              WebkitMaskSize: '100% 100%'
            }}
          >
            {project.image ? (
              <SkeletonImage
                src={project.image}
                alt={project.name}
                wrapperClassName="w-full h-full"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#1E2024] via-[#2D2E32] to-[#121316] flex flex-col items-center justify-center text-center p-6 text-white select-none relative">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-2.5 border border-white/10 shadow-lg">
                  {project.name.includes("CLINIQUE") ? (
                    <span className="text-3xl">🏥</span>
                  ) : project.name.includes("ACORP") ? (
                    <span className="text-3xl">💻</span>
                  ) : (
                    <span className="text-2xl font-black text-[#FA8072]">
                      {project.name.charAt(0)}
                    </span>
                  )}
                </div>
                <span className="text-sm font-bold tracking-wider uppercase text-white">
                  {project.name}
                </span>
                <span className="text-[11px] text-gray-400 mt-1 font-mono tracking-wide">
                  Visuel bientôt disponible
                </span>
              </div>
            )}
          </div>

          {/* ACTION BUTTON (Centered perfectly in the notch space) */}
          <button
            onClick={(e) => { e.stopPropagation(); onOpen(project); }}
            className="absolute bottom-[20px] right-[15px] w-[56px] h-[56px] z-20 rounded-full bg-[#FA8072] flex items-center justify-center shadow-xl group/btn pointer-events-auto"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="rotate-45 group-hover:rotate-0 transition-transform duration-300"
            >
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const Projets: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const cardsToShow = 3;
  const maxIndex = Math.max(0, projects.length - cardsToShow);
  const titleReveal = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const carouselReveal = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const [openingProjectId, setOpeningProjectId] = useState<number | null>(null);

  const openOverlay = useCallback((project: ProjectData) => {
    setOpeningProjectId(project.id);
    
    // Wait for internal cards to fly up before showing overlay or redirecting
    setTimeout(() => {
      // Sur mobile, après l'animation, on redirige directement si un lien existe
      if (window.innerWidth < 768 && project.link) {
        setOpeningProjectId(null); // Remet la carte en place (si l'utilisateur revient en arrière)
        if (project.link.startsWith('/')) {
          navigate(project.link);
          window.scrollTo(0, 0);
        } else {
          window.open(project.link, '_blank');
        }
        return;
      }

      setSelectedProject(project);
      // Small delay to trigger CSS transition of overlay
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setOverlayVisible(true));
      });
    }, 700);
  }, [navigate]);

  const closeOverlay = useCallback(() => {
    setOverlayVisible(false);
    setTimeout(() => {
      setSelectedProject(null);
      setOpeningProjectId(null);
    }, 1500);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProject) closeOverlay();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedProject, closeOverlay]);

  return (
    <div id="projets" className="min-h-screen bg-gray-50 py-32 px-10 flex flex-col items-center relative overflow-hidden">

      {/* PAGE TITLE */}
      <div
        ref={titleReveal.ref}
        className="mb-24 text-center transition-all duration-700 ease-out"
        style={{
          opacity: titleReveal.isVisible ? 1 : 0,
          transform: titleReveal.isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
        }}
      >
        <h1 className="text-5xl md:text-7xl font-black font-gravitor uppercase tracking-tighter text-gray-900 italic">
          Mes Projets
        </h1>
        <div className="w-24 h-1.5 bg-[#FA8072] mx-auto mt-8 rounded-full shadow-[0_0_20px_rgba(250,128,114,0.5)]" />
      </div>

      <div
        ref={carouselReveal.ref}
        className="relative w-full max-w-[1400px] flex items-center justify-center gap-10 transition-all duration-700 ease-out delay-300"
        style={{
          opacity: carouselReveal.isVisible ? 1 : 0,
          transform: carouselReveal.isVisible ? 'translateY(0)' : 'translateY(60px)',
        }}
      >

        {/* CAROUSEL CONTAINER */}
        <div className="w-full max-w-[1189px] md:overflow-hidden max-md:overflow-visible">
          <div 
            className="flex flex-col md:flex-row transition-transform duration-700 ease-in-out gap-8 md:gap-8 items-center max-md:!transform-none px-4 md:px-0"
            style={{ transform: `translateX(-${currentIndex * (375 + 32)}px)` }}
          >
            {projects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onOpen={openOverlay} 
                isOpening={openingProjectId === project.id}
              />
            ))}
          </div>
        </div>

      </div>

      {/* CAROUSEL PAGINATION & NAVIGATION (Glass Pill Design) */}
      <div className="hidden md:flex items-center gap-4 mt-16 bg-white py-3.5 px-6 rounded-full border border-gray-200 shadow-md">
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
          disabled={currentIndex === 0}
          className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 text-gray-700"
          title="Précédent"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="flex items-center gap-2.5">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 ${
                currentIndex === index 
                  ? "w-8 h-2.5 bg-[#FA8072] rounded-full" 
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-500 rounded-full"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))}
          disabled={currentIndex >= maxIndex}
          className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 text-gray-700"
          title="Suivant"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* ===== PROJECT DETAIL OVERLAY ===== */}
      {selectedProject && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-8 transition-all duration-1000 ${
            overlayVisible ? 'bg-black/60 backdrop-blur-md' : 'bg-black/0 backdrop-blur-0'
          }`}
          style={{ transitionDelay: overlayVisible ? '0ms' : '500ms' }}
          onClick={closeOverlay}
        >
          {/* Close button */}
          <button
            onClick={closeOverlay}
            className={`absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-500 z-50 ${
              overlayVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* 3 Floating Cards */}
          <div className="flex flex-col md:flex-row gap-8 items-stretch max-w-[1200px] w-full max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible p-4 rounded-3xl" onClick={(e) => e.stopPropagation()}>

            {/* CARD 1 — Mission */}
            <div
              className={`flex-1 transition-all duration-1000 ${overlayVisible ? 'ease-out' : 'ease-in'} ${
                overlayVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[500px]'
              }`}
              style={{
                transitionDelay: '100ms',
              }}
            >
              <div 
                className="w-full h-full p-10 flex flex-col justify-between bg-white rounded-[40px] shadow-2xl"
                style={{
                  animation: overlayVisible ? 'cardFloat 3s ease-in-out infinite 1s' : 'none',
                }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#FA8072]/15 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FA8072" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-black font-['Georgia',serif] uppercase text-gray-900 tracking-tight">Mission</h2>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {selectedProject.mission}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-5 py-2.5">
                    <div className="w-2 h-2 rounded-full bg-[#FA8072]" />
                    <span className="text-sm font-semibold text-gray-700">{selectedProject.role}</span>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    if (selectedProject.link) {
                      if (selectedProject.link.startsWith('/')) {
                        closeOverlay();
                        navigate(selectedProject.link);
                        window.scrollTo(0, 0);
                      } else {
                        window.open(selectedProject.link, '_blank');
                      }
                    }
                  }}
                  className={`mt-10 w-full py-4 text-white text-lg font-bold rounded-2xl transition-all duration-300 shadow-lg ${
                    selectedProject.link 
                      ? 'bg-[#2D2E32] hover:bg-[#FA8072] cursor-pointer' 
                      : 'bg-[#2D2E32]/50 cursor-not-allowed opacity-50'
                  }`}
                >
                  {selectedProject.link ? 'Commencer →' : 'Bientôt disponible'}
                </button>
              </div>
            </div>

            {/* CARD 2 — Project Image */}
            <div
              className={`flex-[1.4] min-h-[450px] transition-all duration-1000 ${overlayVisible ? 'ease-out' : 'ease-in'} ${
                overlayVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[500px]'
              }`}
              style={{
                transitionDelay: '250ms',
              }}
            >
              <div 
                className="w-full h-full flex flex-col bg-white rounded-[40px] shadow-2xl overflow-hidden"
                style={{
                  animation: overlayVisible ? 'cardFloat 3s ease-in-out infinite 1.5s' : 'none',
                }}
              >
                <div className="p-8 pb-4">
                  <h2 className="text-2xl font-black font-['Georgia',serif] uppercase text-gray-900 tracking-tight">
                    {selectedProject.name}
                  </h2>
                </div>
                <div className="flex-1 px-6 pb-6">
                  {selectedProject.image ? (
                    <SkeletonImage
                      src={selectedProject.image}
                      alt={selectedProject.name}
                      wrapperClassName="w-full h-full rounded-[28px]"
                      className="w-full h-full object-cover rounded-[28px] shadow-inner"
                    />
                  ) : (
                    <div className="w-full h-full min-h-[320px] bg-gradient-to-br from-[#1E2024] via-[#2A2B30] to-[#141518] rounded-[28px] flex flex-col items-center justify-center text-center p-8 text-white relative overflow-hidden border border-white/10 shadow-inner">
                      <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/10 shadow-xl">
                        {selectedProject.name.includes("CLINIQUE") ? (
                          <span className="text-4xl">🏥</span>
                        ) : selectedProject.name.includes("ACORP") ? (
                          <span className="text-4xl">💻</span>
                        ) : (
                          <span className="text-4xl font-black text-[#FA8072]">
                            {selectedProject.name.slice(0, 2)}
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">
                        {selectedProject.name}
                      </h3>
                      <p className="text-sm text-gray-400 max-w-sm font-light mb-4">
                        Capture d'écran & maquette en cours d'intégration.
                      </p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#FA8072]">
                        <span className="w-2 h-2 rounded-full bg-[#FA8072] animate-pulse" />
                        {selectedProject.role}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* CARD 3 — Équipements */}
            <div
              className={`flex-1 transition-all duration-1000 ${overlayVisible ? 'ease-out' : 'ease-in'} ${
                overlayVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[500px]'
              }`}
              style={{
                transitionDelay: '400ms',
              }}
            >
              <div 
                className="w-full h-full p-10 flex flex-col bg-white rounded-[40px] shadow-2xl"
                style={{
                  animation: overlayVisible ? 'cardFloat 3s ease-in-out infinite 2s' : 'none',
                }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-[#2D2E32] flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-black font-['Georgia',serif] uppercase text-gray-900 tracking-tight">Équipements</h2>
                </div>
                <div className="flex flex-col gap-4">
                  {selectedProject.techStack.map((tech, i) => (
                    <div
                      key={tech}
                      className="flex items-center gap-4 bg-gray-50 rounded-2xl px-6 py-5 border border-gray-100 hover:border-[#FA8072]/30 hover:shadow-md transition-all duration-300"
                      style={{ transitionDelay: `${i * 80}ms` }}
                    >
                      <div className="w-3 h-3 rounded-full bg-[#FA8072]" />
                      <span className="text-lg font-semibold text-gray-800">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Float animation keyframes */}
      <style>{`
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </div>
  );
};

export default Projets;
