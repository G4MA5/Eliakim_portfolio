import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Face, { FaceMood } from "./Face";

interface TypewriterProps {
  text: string;
  delay?: number;
  onComplete?: () => void;
}

const Typewriter: React.FC<TypewriterProps> = ({ 
  text, 
  delay = 55, 
  onComplete 
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const onCompleteRef = React.useRef(onComplete);

  // Mettre à jour la ref quand le callback change sans trigger d'effet
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    setDisplayedText("");
    let i = 0;
    const timer = setInterval(() => {
      const char = text.charAt(i);
      setDisplayedText((prev) => prev + char);
      i++;
      if (i >= text.length) {
        clearInterval(timer);
        if (onCompleteRef.current) {
          setTimeout(() => {
            if (onCompleteRef.current) onCompleteRef.current();
          }, 2200); // 2.2s de pause pour bien lire
        }
      }
    }, delay);
    return () => clearInterval(timer);
  }, [text, delay]);

  return <span>{displayedText}</span>;
};

const Stone: React.FC = () => {
  const [mood, setMood] = useState<FaceMood>("neutre");
  const [step, setStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [score, setScore] = useState("");
  const [feedback, setFeedback] = useState("");
  const [pendingStep, setPendingStep] = useState<number | null>(null);
  const [showRestart, setShowRestart] = useState(false);

  const bonusPhrases = [
    "Toujours là ? Ou tu admires en silence ?",
    "Le silence… signe d’admiration ou d’hésitation ?"
  ];

  useEffect(() => {
    // Ne pas relancer si on est déjà distrait ou en chargement
    if (mood === "distrait" || mood === "loading" || isTyping || pendingStep !== null) return;

    const idleTimer = setTimeout(() => {
      setMood("distrait");
      const randomPhrase = bonusPhrases[Math.floor(Math.random() * bonusPhrases.length)];
      setFeedback(randomPhrase);
      setIsTyping(true);
      // On ne change pas de step, on reste là où on est
      setTimeout(() => setIsTyping(false), 5000); 
    }, 8000); // 8 secondes d'inactivité

    return () => clearTimeout(idleTimer);
  }, [mood, step, isTyping, pendingStep]);

  const questions = useMemo(() => [
    {
      text: "Comment trouves-tu mon portfolio ?",
      options: [
        { label: "Impressionnant", mood: "happy", next: 1, feedback: "Content que ça te plaise !" },
        { label: "Intéressant", mood: "neutre", next: 1, feedback: "Intéressant ? Un peu court comme analyse..." },
        { label: "Bizarre 🤨", mood: "suspicion", next: 1, feedback: "Bizarre ? C'est de l'art, tu ne peux pas comprendre." },
        { label: "Pas convaincu", mood: "scepticisme", next: 1, feedback: "Pas convaincu ? Tes standards sont... particuliers." },
      ],
    },
    {
      text: "Tu veux me recruter ?",
      options: [
        { label: "Oui immédiatement 😎", mood: "happy", next: 2, feedback: "Décision intelligente. Contacte-moi avant que quelqu’un d’autre ne le fasse." },
        { label: "Non", mood: "mort", next: 2, feedback: "Erreur stratégique détectée." },
        { label: "Pas sûr…", mood: "scepticisme", next: 2, feedback: "Je te laisse 3 secondes pour réfléchir…" },
      ],
    },
    {
      text: "Ta connexion bug ?",
      options: [
        { label: "Oui ça lag 😤", mood: "angry", next: 3, feedback: "Ce n’est pas moi. C’est ton Wi-Fi." },
        { label: "Un petit peu…", mood: "suspicion", next: 3, feedback: "Stone ne bug pas. Stone attend." },
      ],
    },
  ], []);

  const handleChoice = useCallback((nextMood: FaceMood, nextStep: number, customFeedback?: string) => {
    setMood(nextMood);
    
    if (customFeedback) {
      setFeedback(customFeedback);
      setIsTyping(true);
      setPendingStep(nextStep);
    } else {
      setTimeout(() => {
        setStep(nextStep);
      }, 800); // 800ms pour une transition plus calme
    }
  }, []);

  const handleTypingComplete = useCallback(() => {
    if (pendingStep !== null) {
      setIsTyping(false);
      setMood("neutre"); // Retour au calme après la réponse
      setStep(pendingStep);
      setPendingStep(null);
      return;
    }

    // Séquence finale si on est au step 4
    if (step === 4) {
      const finalMsg = "J'espère que tu as apprécié cette expérience.";
      if (feedback !== finalMsg) {
        // Après le verdict, on attend 3s (plus solennel) puis on montre le message final
        setTimeout(() => {
          setMood("happy");
          setFeedback(finalMsg);
          setIsTyping(true);
        }, 3000);
      } else {
        // Après le message final, on attend 2s puis on reste en distrait
        setTimeout(() => {
          setIsTyping(false); // Cache le texte
          setMood("distrait");
          setShowRestart(true); 
        }, 2000); 
      }
    }
  }, [pendingStep, step, feedback]);

  const handleScoreSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const val = parseInt(score);
    if (isNaN(val)) return;

    setShowRestart(false); 
    if (val >= 1 && val <= 3) {
      setMood("suspicion");
      setFeedback("Une note aussi basse demande du courage… ou de l’inconscience.");
    } else if (val >= 4 && val <= 6) {
      setMood("scepticisme");
      setFeedback("Acceptable. Mais je ne vise pas l’acceptable.");
    } else if (val >= 7 && val <= 10) {
      setMood("happy");
      setFeedback("Enfin quelqu’un avec du discernement.");
    } else {
      setMood("angry");
      setFeedback("Les règles sont simples. 1 à 10. Même Stone respecte les limites.");
    }
    setStep(4);
    setIsTyping(true);
  }, [score]);

  return (
    <section className="w-full py-10 md:py-16 bg-gray-50 px-2 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Dark Bubble Container */}
      <div className="max-w-4xl mx-auto bg-[#020111] overflow-hidden rounded-[32px] md:rounded-[48px] px-4 md:px-8 py-8 md:py-12 shadow-2xl relative z-10 flex flex-col items-center w-full">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[#0095ff] font-mono text-sm md:text-xl tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-8 uppercase text-center"
        >
          System: Stone 2.0
        </motion.h2>

        <div className="flex flex-col items-center">
          <Face mood={mood} />
          
          <div className="mt-[-20px] md:mt-2 w-full max-w-xl px-2 md:px-4 min-h-[140px] md:min-h-[180px] flex flex-col items-center">
            <AnimatePresence mode="wait">
              {isTyping ? (
                <motion.div
                  key="typing-feedback"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center text-center py-6 md:py-12"
                >
                  <div className="text-white text-lg md:text-2xl font-bold font-['Georgia',serif] italic leading-relaxed px-2">
                    <Typewriter text={feedback} onComplete={handleTypingComplete} />
                  </div>
                </motion.div>
              ) : step < 3 ? (
                <motion.div
                  key={`step-${step}`}
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col items-center w-full"
                >
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center font-['Georgia',serif] px-4">
                    {questions[step].text}
                  </h3>
                  <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3 md:gap-4 w-full">
                    {questions[step].options.map((opt, idx) => (
                      <motion.button
                        key={opt.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.08, duration: 0.25 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => handleChoice(opt.mood as FaceMood, opt.next, opt.feedback)}
                        className="w-full h-auto min-h-[48px] flex items-center justify-center text-center whitespace-normal break-words px-3 py-3 md:px-6 md:py-4 border border-[#0095ff]/30 text-[#0095ff] hover:bg-[#0095ff] hover:text-white transition-all duration-300 rounded-xl md:rounded-2xl uppercase text-[10px] md:text-sm font-bold tracking-normal sm:tracking-widest bg-[#0095ff]/5 backdrop-blur-sm leading-tight"
                      >
                        {opt.label}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ) : step === 3 ? (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col items-center w-full"
                >
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center font-['Georgia',serif] px-4">
                    Une note sur 10 pour mon portfolio ?
                  </h3>
                  <form onSubmit={handleScoreSubmit} className="flex flex-col items-center gap-4 md:gap-6 w-full max-w-sm px-4">
                    <motion.input
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.25 }}
                      type="number"
                      min="1"
                      max="10"
                      value={score}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setScore(e.target.value)}
                      placeholder="Note (1-10)..."
                      className="w-full bg-white/5 border border-[#0095ff]/30 rounded-xl md:rounded-2xl px-4 py-3 md:px-6 md:py-4 text-white text-lg md:text-xl text-center focus:outline-none focus:border-[#0095ff] transition-colors"
                      required
                    />
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.25 }}
                      whileTap={{ scale: 0.96 }}
                      type="submit"
                      className="w-full py-3 md:py-4 bg-[#0095ff] text-white rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(0,149,255,0.3)]"
                    >
                      Envoyer le verdict
                    </motion.button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="step-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center text-center min-h-[150px]"
                >
                  {showRestart && (
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => {
                        setStep(0);
                        setMood("neutre");
                        setScore("");
                        setFeedback("");
                        setShowRestart(false);
                      }}
                      className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl transition-all text-sm font-bold uppercase tracking-widest border border-white/10 backdrop-blur-md shadow-xl"
                    >
                      Recommencer l'entretien ↺
                    </motion.button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stone;
