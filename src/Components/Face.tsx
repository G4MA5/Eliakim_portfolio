import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type FaceMood =
  | "neutre"
  | "suspicion"
  | "distrait"
  | "loading"
  | "mort"
  | "happy"
  | "sleeping"
  | "angry"
  | "scepticisme"
  | "ecoute"
  | "music";

interface FaceProps {
  mood: FaceMood;
}

const Face: React.FC<FaceProps> = ({ mood }) => {
  const [isBlinking, setIsBlinking] = useState(false);
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });

  // ================= BLINK =================
  useEffect(() => {
    if (["mort", "sleeping", "loading", "scepticisme", "ecoute"].includes(mood)) return;
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 4000);
    return () => clearInterval(blinkInterval);
  }, [mood]);

  // ================= EYE MOVEMENT FOR IDEA =================
  useEffect(() => {
    if (mood !== "distrait") return;

    const sequences = [
      [{ x: -15, y: 15 }, { x: 15, y: 15 }, { x: 0, y: -15 }, { x: 0, y: 0 }],
      [{ x: -20, y: 10 }, { x: 20, y: 5 }, { x: 0, y: -10 }, { x: 0, y: 0 }],
      [{ x: -10, y: 20 }, { x: 10, y: 10 }, { x: 0, y: -20 }, { x: 0, y: 0 }],
    ];

    let stepIndex = 0;
    let sequenceIndex = Math.floor(Math.random() * sequences.length);

    const ideaInterval = setInterval(() => {
      const currentSequence = sequences[sequenceIndex];
      setEyePos(currentSequence[stepIndex]);
      stepIndex++;
      if (stepIndex >= currentSequence.length) {
        stepIndex = 0;
        let newSeq;
        do {
          newSeq = Math.floor(Math.random() * sequences.length);
        } while (newSeq === sequenceIndex);
        sequenceIndex = newSeq;
      }
    }, 1800);

    return () => clearInterval(ideaInterval);
  }, [mood]);

  // ================= CONFIG HUMEUR =================
  const config: Record<string, any> = {
    neutre: {
      leftBrow: { y: 0, rotate: 0 },
      rightBrow: { y: 0, rotate: 0 },
      leftEye: { scaleY: isBlinking ? 0.1 : 1, scaleX: 1, y: 0, x: 0 },
      rightEye: { scaleY: isBlinking ? 0.1 : 1, scaleX: 1, y: 0, x: 0 },
    },
    distrait: {
      leftBrow: { y: 0, rotate: 0 },
      rightBrow: { y: 0, rotate: 0 },
      leftEye: { scaleY: isBlinking ? 0.1 : 1, scaleX: 1, y: eyePos.y, x: eyePos.x },
      rightEye: { scaleY: isBlinking ? 0.1 : 1, scaleX: 1, y: eyePos.y, x: eyePos.x },
    },
    happy: {
      leftBrow: { y: -15, rotate: -5 },
      rightBrow: { y: -15, rotate: 5 },
      leftEye: { scaleY: 0.6, scaleX: 1, y: -5, rotate: 0 },
      rightEye: { scaleY: 0.6, scaleX: 1, y: -5, rotate: 0 },
      transition: { delay: 0.2, type: "spring", stiffness: 100, damping: 20 }
    },
    suspicion: {
      leftBrow: { y: 10, rotate: 30, scaleX: 1.1 },
      rightBrow: { y: 10, rotate: -30, scaleX: 1.1 },
      leftEye: { scaleY: isBlinking ? 0.1 : 0.35, scaleX: 1.1, y: 10 },
      rightEye: { scaleY: isBlinking ? 0.1 : 0.35, scaleX: 1.1, y: 10 },
      transition: { duration: 0.25, ease: "easeOut" }
    },
    angry: {
      leftBrow: {
        y: 25,
        rotate: 20,
        x: [0, -3, 3, -2, 2, -1, 1, 0],
        transition: { x: { duration: 0.5, times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1], ease: "easeInOut" } },
      },
      rightBrow: {
        y: 25,
        rotate: -20,
        x: [0, 3, -3, 2, -2, 1, -1, 0],
        transition: { x: { duration: 0.5, times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1], ease: "easeInOut" } },
      },
      leftEye: { scaleY: 0.8, scaleX: 1, y: 5 },
      rightEye: { scaleY: 0.8, scaleX: 1, y: 5 },
    },
    sleeping: {
      leftBrow: { y: 15, rotate: 0 },
      rightBrow: { y: 15, rotate: 0 },
      leftEye: { 
        scaleY: 0.1, 
        scaleX: 1, 
        y: 15,
        transition: { type: "spring", stiffness: 50, damping: 20 }
      },
      rightEye: { 
        scaleY: 0.1, 
        scaleX: 1, 
        y: 15,
        transition: { type: "spring", stiffness: 50, damping: 20 }
      },
    },
    scepticisme: {
      leftBrow: { y: 20, rotate: 10, scaleX: 1.1 },
      rightBrow: { y: -15, rotate: 3, scaleX: 1.1 },
      leftEye: { scaleX: 1, scaleY: 1, y: 0 },
      rightEye: { scaleX: 1, scaleY: 1.2, y: -5 },
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 0.8 }
    },
    ecoute: {
      leftBrow: { y: 0, rotate: 0 },
      rightBrow: { y: 0, rotate: 0 },
      leftEye: {
        scaleX: 1,
        scaleY: [1, 1.05, 1],
        transition: { repeat: Infinity, duration: 0.8, ease: "easeInOut" },
      },
      rightEye: {
        scaleX: 1,
        scaleY: [1, 1.05, 1],
        transition: { repeat: Infinity, duration: 0.8, ease: "easeInOut" },
      },
    },
    music: {
      head: {
        y: [0, -10, 0, 8, 0],
        transition: {
          repeat: Infinity,
          duration: 1,
          ease: "easeInOut",
        },
      },
      leftBrow: { y: -5 },
      rightBrow: { y: -5 },
      leftEye: {
        scaleY: [1, 0.95, 1],
        y: [0, -3, 0],
        transition: {
          repeat: Infinity,
          duration: 1,
          ease: "easeInOut",
        },
      },
      rightEye: {
        scaleY: [1, 0.95, 1],
        y: [0, -3, 0],
        transition: {
          repeat: Infinity,
          duration: 1,
          ease: "easeInOut",
        },
      },
    },
  };
    
  const current = config[mood] || config.neutre;

  return (
    <div className="w-[280px] h-[220px] md:w-[500px] md:h-[400px] relative flex items-center justify-center shrink-0">
      <motion.div
        animate={current.head || {}}
        className="absolute w-[500px] h-[400px] flex items-center justify-center scale-[0.55] md:scale-100 origin-center"
      >
        {/* SOURCILS */}
        <AnimatePresence>
          {mood !== "loading" && (
            <>
              <motion.div
                className="absolute top-[12%] left-[15%] w-[110px] h-[18px] bg-[#0095ff] rounded-full shadow-[0_0_20px_#0095ff] z-10"
                animate={
                  mood === "distrait"
                    ? { y: current.leftBrow.y + (eyePos.y || 0) / 5, rotate: current.leftBrow.rotate + (eyePos.x || 0) / 5 }
                    : (mood === "music" ? config.music.leftBrow : current.leftBrow)
                }
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
              <motion.div
                className="absolute top-[12%] right-[15%] w-[110px] h-[18px] bg-[#0095ff] rounded-full shadow-[0_0_20px_#0095ff] z-10"
                animate={
                  mood === "distrait"
                    ? { y: current.rightBrow.y + (eyePos.y || 0) / 5, rotate: current.rightBrow.rotate + (eyePos.x || 0) / 5 }
                    : (mood === "music" ? config.music.rightBrow : current.rightBrow)
                }
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            </>
          )}
        </AnimatePresence>

        {/* YEUX */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex gap-24 items-center justify-center">
            {mood === "loading" ? (
              <motion.div
                className="w-40 h-40 border-[12px] border-blue-900 border-t-[#0095ff] rounded-full shadow-[0_0_30px_#0095ff]"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              />
            ) : mood === "mort" ? (
              <div className="flex gap-24 font-bold text-[#0095ff] text-8xl drop-shadow-[0_0_15px_#0095ff]">
                <span>X</span>
                <span>X</span>
              </div>
            ) : mood === "happy" ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key="happy-eyes"
                  className="flex gap-24 items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    initial={{ scaleX: 1, scaleY: 0.2, y: 20 }}
                    animate={{ scaleX: [1, 1.1, 1], scaleY: [0.2, 1, 1], y: [20, 0, 0] }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-[90px] h-[80px] border-t-[10px] border-[#0095ff] rounded-t-full"
                  />
                  <motion.div
                    initial={{ scaleX: 1, scaleY: 0.2, y: 20 }}
                    animate={{ scaleX: [1, 1.1, 1], scaleY: [0.2, 1, 1], y: [20, 0, 0] }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
                    className="w-[90px] h-[80px] border-t-[10px] border-[#0095ff] rounded-t-full"
                  />
                </motion.div>
              </AnimatePresence>
            ) : (
              <>
                <motion.div
                  className="w-[90px] h-[130px] bg-[#0095ff] rounded-full shadow-[0_0_40px_#0095ff]"
                  animate={mood === "music" ? config.music.leftEye : current.leftEye}
                  transition={{ type: "spring", stiffness: 200 }}
                />
                <motion.div
                  className="w-[90px] h-[130px] bg-[#0095ff] rounded-full shadow-[0_0_40px_#0095ff]"
                  animate={mood === "music" ? config.music.rightEye : current.rightEye}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Face;
