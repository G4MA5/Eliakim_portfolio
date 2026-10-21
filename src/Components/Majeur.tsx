import React from 'react';
import { motion } from 'framer-motion';
import genieImg from '../assets/Genie.png';

const Majeur: React.FC = () => {
  return (
    <section className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Titre avec animation d'apparition */}
        <motion.h3 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-gray-900 font-black italic text-4xl md:text-5xl tracking-tighter mb-8 uppercase text-center md:text-left ml-4"
        >
          PROJET MAJEUR
        </motion.h3>
        
        {/* Conteneur Bulle avec animation d'entrée */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="bg-white rounded-[48px] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)] flex flex-col md:flex-row items-center gap-12 border-8 border-white"
        >
          {/* Texte à gauche avec fondu */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex-1 text-left"
          >
            <h2 className="text-4xl md:text-5xl font-black font-['Georgia',serif] uppercase text-gray-900 mb-6 italic tracking-tighter leading-tight">
              Génie <span className="text-[#FA8072]">UPB</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-serif italic">
              Genie UPB est un projet web dédié à un concours étudiant mettant en valeur l’ingénierie et l’innovation à l’Université Polytechnique de Bingerville.
            </p>
          </motion.div>

          {/* Image à droite avec slide doux */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex-1 w-full overflow-hidden rounded-[32px]"
          >
            <img 
              src={genieImg} 
              alt="Genie UPB Project" 
              className="w-full h-auto object-cover rounded-[32px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Majeur;
