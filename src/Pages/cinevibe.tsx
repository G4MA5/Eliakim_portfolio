import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import cine1 from '../assets/cine1.png';
import phone1 from '../assets/phone3.png';
import phone2 from '../assets/phone4.png';
import phone8 from '../assets/phone10.png';

const Cinevibe: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col pt-32">
      <div className="w-full flex flex-col gap-32 overflow-hidden">
        
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mt-10">
          {/* Left: Text and Logo */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col md:items-start text-left px-8 md:px-12 lg:px-20 pt-10"
          >
            {/* Logo area */}
            <img 
              src={cine1} 
              alt="Cinevibe Logo" 
              className="w-[300px] mb-4 mix-blend-multiply" 
            />
            <h2 className="text-2xl font-medium text-black mb-16">Application Mobile de Réservation</h2>
            
            {/* First Block */}
            <div className="mb-14 w-full md:max-w-[700px]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-7 h-7 rounded-full bg-[#E51B24] shadow-sm"></div>
                <h3 className="text-3xl font-bold text-black tracking-tight">Vue d'ensemble du projet</h3>
              </div>
              <p className="text-[19px] font-medium leading-[1.8] text-gray-800">
                Cinevibe est une application mobile pensée pour simplifier l'expérience cinéma, de la découverte du film jusqu'à la réservation de votre siège. Le projet couvre l'ensemble du parcours utilisateur, de l'onboarding jusqu'au paiement, dans une interface sombre et immersive qui met le contenu au centre.
              </p>
            </div>

            {/* Second Block */}
            <div className="w-full md:max-w-[700px]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-7 h-7 rounded-full bg-[#E51B24] shadow-sm"></div>
                <h3 className="text-3xl font-bold text-black tracking-tight">Identité visuelle</h3>
              </div>
              <p className="text-[19px] font-medium leading-[1.8] text-gray-800">
                L'application propose un catalogue de films avec fiches détaillées, un système de réservation de sièges interactif, ainsi qu'une gestion d'offres et d'abonnements (Éducation, Entreprise, HBD). L'identité visuelle s'articule autour d'un rouge vif pour la marque et d'un univers sombre bleu-violet pour les écrans de contenu, créant une ambiance à la fois chaleureuse et immersive.
              </p>
            </div>
          </motion.div>

          {/* Right: phone1 */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-[1.1] flex justify-center md:justify-end md:pr-8"
          >
            <img 
              src={phone1} 
              alt="Cinevibe Interface 1" 
              className="w-full object-contain md:object-right block" 
            />
          </motion.div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-24">
          {/* Left: phone2 */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-[1.5] flex justify-center md:justify-start px-8 md:pl-16 lg:pl-24"
          >
            <img 
              src={phone2} 
              alt="Cinevibe Interface 2" 
              className="w-full object-contain md:object-left block" 
            />
          </motion.div>

          {/* Right: Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col items-start text-left px-8 md:px-12 lg:px-20"
          >
            <div className="text-lg md:text-xl font-medium leading-[1.8] text-gray-800 space-y-12 w-full max-w-[700px]">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-7 h-7 rounded-full bg-[#D51C29] shadow-sm shrink-0"></div>
                  <h3 className="text-3xl font-bold text-black tracking-tight">Stack technique</h3>
                </div>
                <div className="pl-11 space-y-2">
                  <p className="text-[19px]">
                    <span className="font-bold text-[#A62B2B]">Framework:</span> Flutter (Dart)
                  </p>
                  <p className="text-[19px]">
                    <span className="font-bold text-[#A62B2B]">Design:</span> Figma
                  </p>
                  <p className="text-[19px]">
                    <span className="font-bold text-[#A62B2B]">Plateformes cibles:</span> iOS & Android
                  </p>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-7 h-7 rounded-full bg-[#D51C29] shadow-sm shrink-0"></div>
                  <h3 className="text-3xl font-bold text-black tracking-tight">Fonctionnalités clés</h3>
                </div>
                <div className="pl-11 space-y-2">
                  <p className="text-[19px]">
                    <span className="font-bold text-[#A62B2B]">Accès:</span> Onboarding et authentification
                  </p>
                  <p className="text-[19px]">
                    <span className="font-bold text-[#A62B2B]">Découverte:</span> Catalogue de films avec affiches et détails
                  </p>
                  <p className="text-[19px]">
                    <span className="font-bold text-[#A62B2B]">Billetterie:</span> Réservation de sièges interactive
                  </p>
                  <p className="text-[19px]">
                    <span className="font-bold text-[#A62B2B]">Fidélité:</span> Gestion d'abonnements et d'offres
                  </p>
                  <p className="text-[19px]">
                    <span className="font-bold text-[#A62B2B]">Lieux:</span> Page dédiée par cinéma
                  </p>
                </div>
              </div>
              
            </div>
          </motion.div>
        </div>

      </div>

      {/* Section 3: Ce que j'ai appris (Centered) */}
      <div className="w-full flex justify-center px-8 md:px-20 mt-16 mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center max-w-[900px]"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-7 h-7 rounded-full bg-[#D51C29] shadow-sm shrink-0"></div>
            <h3 className="text-3xl font-bold text-black tracking-tight">Ce que j'ai appris</h3>
          </div>
          <p className="text-[19px] leading-[1.8] text-gray-800">
            Ce projet m'a permis de maîtriser la navigation complexe sous Flutter, la gestion d'état, et la conception d'interfaces riches en contenu. Il m'a aussi confronté aux défis du design system : maintenir une cohérence visuelle sur des dizaines d'écrans avec des ambiances différentes.
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full mt-32"
      >
        <img 
          src={phone8} 
          alt="Cinevibe Full Showcase" 
          className="w-full object-cover block" 
        />
      </motion.div>
    </div>
  );
};

export default Cinevibe;
