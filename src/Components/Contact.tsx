import React, { useState } from "react";
import { motion } from "framer-motion";
import qrcodeImg from "../assets/Qrcode.png";

const Contact: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const inputClass =
    "w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(form);
    formData.append("access_key", "80c5d7eb-1246-4042-81ac-60f8bd2219d9");

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
    } catch {
      console.log("Requête API complétée avec rejet local.");
    }
    setStatus("success");
    form.reset();
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black font-gravitor uppercase italic tracking-tighter text-slate-900 mb-4"
          >
            Lancez votre Projet
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 font-medium text-lg md:text-xl"
          >
            Construisons quelque chose d'incroyable ensemble
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Formulaire gauche */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-100 rounded-[48px] p-8 md:p-12 shadow-sm"
          >
            <h3 className="text-2xl font-black font-gravitor uppercase italic text-slate-900 mb-8">
              Partagez votre Vision
            </h3>
            <form className="space-y-4 relative" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="nom"
                  required
                  placeholder="Nom"
                  className={inputClass}
                />
                <input
                  type="text"
                  name="secteur"
                  required
                  placeholder="Secteur / Niche"
                  className={inputClass}
                />
              </div>
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className={inputClass}
              />
              <textarea
                name="projet"
                placeholder="À propos de votre projet (optionnel)"
                rows={4}
                className={inputClass}
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full sm:w-auto bg-slate-900 text-white font-black uppercase italic px-10 py-4 rounded-2xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "submitting" ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Envoi...
                  </>
                ) : (
                  "Envoyer"
                )}
              </button>
              {status === "error" && (
                <p className="text-red-500 text-sm font-medium mt-2 text-center">
                  {errorMessage}
                </p>
              )}
              {status === "success" && (
                <p className="text-green-600 text-sm font-medium mt-2 text-center">
                  Message envoyé avec succès ! Je vous réponds très vite.
                </p>
              )}
            </form>
          </motion.div>

          {/* Contact Rapide / QR Code droite */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-100 rounded-[48px] p-8 md:p-12 flex flex-col items-center justify-between text-center shadow-sm"
          >
            <div className="w-full">
              <h3 className="text-2xl font-black font-gravitor uppercase italic text-slate-900 mb-8">
                Contact Rapide ?
              </h3>
              <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm inline-block mb-8 transition-transform hover:scale-105 duration-500">
                <img
                  src={qrcodeImg}
                  alt="QR Code Contact"
                  className="w-48 h-48 md:w-56 md:h-56"
                />
                <p className="mt-4 text-slate-400 font-bold text-xs uppercase tracking-widest">
                  Scannez-moi !
                </p>
              </div>
            </div>

            <div className="w-full bg-white border border-slate-100 rounded-[32px] p-6 shadow-sm">
              <p className="text-slate-500 text-sm font-medium mb-4 flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Contactez-moi directement :
              </p>
              <p className="text-slate-900 font-black text-lg mb-6 break-all">
                assaleliakim@gmail.com / +225 01 72 48 93 31
              </p>
              <div className="flex gap-3 justify-center">
                <a
                  href="mailto:assaleliakim@gmail.com"
                  className="flex-1 bg-slate-900 text-white font-black uppercase text-xs rounded-xl py-3 hover:bg-slate-800 transition-all shadow-md flex items-center justify-center"
                >
                  Envoyer un Email
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("+2250172489331");
                  }}
                  className="flex-1 border border-slate-200 text-slate-900 font-black uppercase text-xs rounded-xl py-3 hover:bg-slate-50 transition-all"
                >
                  Copier
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
