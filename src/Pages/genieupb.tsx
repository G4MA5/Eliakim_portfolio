import React from 'react';
import { motion } from 'framer-motion';
import SkeletonImage from '../Components/SkeletonImage';
import G1Img from '../assets/G1.png';
import G2Img from '../assets/G2.png';
import G3Img from '../assets/G3.png';
import G4Img from '../assets/G4.png';
import G5Img from '../assets/G5.png';
import G6Img from '../assets/G6.png';

const GenieUPB: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-16 font-outfit">
      {/* Image en pleine largeur collée sous la nav */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full relative shadow-md overflow-hidden"
      >
        <SkeletonImage 
          src={G1Img}
          alt="GenieUPB"
          wrapperClassName="w-full"
          className="w-full h-auto object-cover block"
        />
      </motion.div>
      {/* Titre principal */}
      <div className="container mx-auto px-6 py-16 max-w-5xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-black  mb-4 uppercase">
          Génie UPB
        </h1>
        <h2 className="text-xl text-black font-medium tracking-widest uppercase mt-4">L'innovation au service du futur</h2>
      </div>

      {/* 1. Résumé du projet (Image Gauche) */}
      <div className="w-full">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <SkeletonImage 
              src={G2Img} 
              alt="Résumé du projet" 
              wrapperClassName="w-full h-full"
              className="w-full h-full object-cover block" 
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center p-8 md:p-16 lg:pr-32">
            <div className="max-w-xl mx-auto md:mx-0">
              <h3 className="text-3xl font-semibold tracking-wider text-slate-900 mb-8 uppercase relative inline-block">
                Résumé du projet
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-orange-500 rounded-full"></span>
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Génie UPB est une plateforme web moderne conçue pour promouvoir la créativité, la technologie et l'excellence universitaire. Le site sert de vitrine dynamique et interactive regroupant plusieurs domaines clés de l'innovation étudiante : la robotique, le droit, l'économie et les nouvelles technologies. Il intègre également un système de participation aux concours universitaires et un espace d'actualités dédié.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Mon Rôle & Objectifs (Image Droite) */}
      <div className="w-full bg-white relative overflow-hidden">
        {/* Subtle accent element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-orange-50 opacity-70 blur-3xl"></div>
        <div className="flex flex-col md:flex-row-reverse relative z-10">
          <div className="w-full md:w-1/2">
            <SkeletonImage 
              src={G3Img} 
              alt="Mon Rôle et Objectifs" 
              wrapperClassName="w-full h-full shadow-lg"
              className="w-full h-full object-cover shadow-lg block" 
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center p-8 md:p-16 lg:pl-32 justify-end">
            <div className="max-w-xl mx-auto md:mx-0">
              <h3 className="text-3xl font-semibold tracking-wider text-slate-900 mb-8 uppercase relative inline-block">
                Mon Rôle & Objectifs
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-orange-500 rounded-full"></span>
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Mon objectif était de concevoir et de développer une interface utilisateur (Frontend) ultra-moderne, fluide et engageante. J'ai mis un accent particulier sur l'expérience utilisateur (UX) en intégrant des animations immersives, des transitions douces entre les pages et un design "glassmorphism" saisissant pour capter l'attention dès la page d'accueil.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Technologies & Outils (Image Gauche) */}
      <div className="w-full">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <SkeletonImage 
              src={G4Img} 
              alt="Technologies et Outils utilisés" 
              wrapperClassName="w-full h-full"
              className="w-full h-full object-cover block" 
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center p-8 md:p-16 lg:pr-32">
            <div className="max-w-xl mx-auto md:mx-0">
              <h3 className="text-3xl font-semibold tracking-wider text-slate-900 mb-8 uppercase relative inline-block">
                Technologies & Outils
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-orange-500 rounded-full"></span>
              </h3>
              <ul className="text-gray-600 text-lg leading-relaxed space-y-4">
                <li className="flex items-start"><span className="text-orange-500 mr-3 text-xl">✦</span><span><strong className="text-slate-900">React & TypeScript :</strong> Pour une architecture de composants robuste, maintenable et un typage strict évitant les erreurs d'exécution.</span></li>
                <li className="flex items-start"><span className="text-orange-500 mr-3 text-xl">✦</span><span><strong className="text-slate-900">Vite.js :</strong> Utilisé comme bundler pour garantir des temps de chargement ultra-rapides et une expérience de développement optimisée.</span></li>
                <li className="flex items-start"><span className="text-orange-500 mr-3 text-xl">✦</span><span><strong className="text-slate-900">Tailwind CSS :</strong> Pour un styling "Utility-first", permettant de créer une interface sur-mesure, 100% responsive, avec des effets avancés.</span></li>
                <li className="flex items-start"><span className="text-orange-500 mr-3 text-xl">✦</span><span><strong className="text-slate-900">Framer Motion :</strong> Intégration d'animations fluides au niveau du routage et des composants.</span></li>
                <li className="flex items-start"><span className="text-orange-500 mr-3 text-xl">✦</span><span><strong className="text-slate-900">React Router :</strong> Gestion de la navigation avec "Lazy Loading".</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Défis techniques (Image Droite) */}
      <div className="w-full bg-orange-50/50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-100 opacity-60 blur-3xl"></div>
        <div className="flex flex-col md:flex-row-reverse relative z-10">
          <div className="w-full md:w-1/2">
            <SkeletonImage 
              src={G5Img} 
              alt="Fonctionnalités clés et Défis techniques" 
              wrapperClassName="w-full h-full"
              className="w-full h-full object-cover block" 
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center p-8 md:p-16 lg:pl-32 justify-end">
            <div className="max-w-xl mx-auto md:mx-0">
              <h3 className="text-3xl font-semibold tracking-wider text-slate-900 mb-8 uppercase relative inline-block">
                Fonctionnalités & Défis
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-orange-500 rounded-full"></span>
              </h3>
              <ul className="text-gray-700 text-lg leading-relaxed space-y-4">
                <li className="flex items-start"><span className="text-orange-500 mr-3 text-xl">✓</span><span><strong className="text-slate-900">Création d'une "Hero Section" immersive :</strong> Développement d'un design captivant avec halos lumineux, mix-blend-mode et arrière-plan dynamique.</span></li>
                <li className="flex items-start"><span className="text-orange-500 mr-3 text-xl">✓</span><span><strong className="text-slate-900">Navigation performante :</strong> Implémentation du Lazy Loading couplée à un écran de chargement (Loader) personnalisé.</span></li>
                <li className="flex items-start"><span className="text-orange-500 mr-3 text-xl">✓</span><span><strong className="text-slate-900">Transitions animées :</strong> Mise en place de Framer Motion pour les effets élégants lors du changement de page.</span></li>
                <li className="flex items-start"><span className="text-orange-500 mr-3 text-xl">✓</span><span><strong className="text-slate-900">Design Responsive :</strong> Optimisation complète pour mobile, tablette et desktop.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Ce que j'ai appris (Texte centré) */}
      <div className="container mx-auto px-6 py-24 max-w-4xl text-center relative">
        <h3 className="text-3xl font-semibold tracking-wider text-slate-900 mb-8 uppercase inline-block relative">
          Ce que j'ai appris
          <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-orange-500 rounded-full"></span>
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed mt-4">
          Ce projet m'a permis d'approfondir mes compétences dans la création d'interfaces à fort impact visuel en alliant les performances brutes de Vite/React à la puissance d'animation de Framer Motion. Il m'a également appris à gérer de manière optimale le chargement des ressources dans une SPA complexe.
        </p>
      </div>

      {/* G6 en plein écran tout en bas */}
      <div className="w-full">
        <SkeletonImage 
          src={G6Img} 
          alt="Aperçu final de l'interface" 
          wrapperClassName="w-full"
          className="w-full h-auto lg:h-screen object-cover block" 
        />
      </div>

    </div>
  );
};

export default GenieUPB;
