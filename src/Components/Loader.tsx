import React, { useEffect, useState } from 'react';

// Pac-Man s'arrête à la fin pour former lui-même le "O" de DEV YAO !
const LETTERS = ['D', 'E', 'V', ' ', 'Y', 'A'];
const TAGS = ['<>', '</>', '<>', '</>', '<>', '</>'];

const LETTER_SPACING = 140;
const PACMAN_SIZE = 128;
const TOTAL_STEPS = LETTERS.length;
const TOTAL_DISTANCE = TOTAL_STEPS * LETTER_SPACING;
const TOTAL_DURATION = 2800;

const Loader: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [revealedCount, setRevealedCount] = useState(0);
  const [expanding, setExpanding] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), 100);
    return () => clearTimeout(startTimer);
  }, []);

  // Largeur totale et centre d'ouverture du cercle transparent (centré sur Pac-Man / le O)
  const containerWidth = TOTAL_DISTANCE + PACMAN_SIZE + 20;
  const pacmanFinalLeftInContainer = TOTAL_DISTANCE;
  const pacmanCenterOffset = pacmanFinalLeftInContainer + PACMAN_SIZE / 2 - containerWidth / 2;

  // Calcul du scale pour mobile : scale = 1 sur grand écran, et adapté à la largeur sur mobile
  useEffect(() => {
    const handleResize = () => {
      const padding = 32;
      const availableWidth = window.innerWidth - padding;
      if (availableWidth < containerWidth) {
        setScale(Math.max(0.25, availableWidth / containerWidth));
      } else {
        setScale(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [containerWidth]);

  useEffect(() => {
    if (!started) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 0; i < TOTAL_STEPS; i++) {
      const revealTime = ((i + 0.25) / TOTAL_STEPS) * TOTAL_DURATION;
      timers.push(
        setTimeout(() => {
          setRevealedCount(i + 1);
        }, revealTime)
      );
    }

    timers.push(
      setTimeout(() => {
        setExpanding(true);
      }, TOTAL_DURATION + 400)
    );

    return () => timers.forEach(clearTimeout);
  }, [started]);

  const isFinished = revealedCount >= TOTAL_STEPS;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center font-gravitor"
      style={{ pointerEvents: expanding ? 'none' : 'auto' }}
    >
      {/* Dark overlay with circular transparent hole that grows and reveals the website */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          opacity: expanding ? 0 : 1,
          transition: expanding ? 'opacity 0.3s ease-out 1.3s' : 'none',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginLeft: `${pacmanCenterOffset * scale}px`,
            width: expanding ? '4000px' : '0px',
            height: expanding ? '4000px' : '0px',
            borderRadius: '50%',
            background: 'transparent',
            boxShadow: '0 0 0 9999px #030712',
            transform: 'translate(-50%, -50%)',
            transition: expanding
              ? 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1), height 1.5s cubic-bezier(0.4, 0, 0.2, 1)'
              : 'none',
          }}
        />
      </div>

      {/* Content layer wrapper : dimension physique pour le centrage Flexbox */}
      <div
        className="relative z-[2] shrink-0"
        style={{
          width: `${containerWidth * scale}px`,
          height: `${160 * scale}px`,
          position: 'relative',
          opacity: expanding ? 0 : 1,
          transition: 'opacity 0.4s ease-out',
        }}
      >
        {/* Contenu d'origine préservé au pixel près et mis à l'échelle harmonieusement */}
        <div
          style={{
            width: `${containerWidth}px`,
            height: '160px',
            position: 'absolute',
            left: 0,
            top: 0,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
        >
          {/* Code tags */}
          {TAGS.map((tag, i) => {
            const eaten = revealedCount > i;
            const x = (i + 0.5) * LETTER_SPACING;
            return (
              <span
                key={`tag-${i}`}
                className="absolute top-1/2 text-5xl font-black italic select-none"
                style={{
                  left: `${x}px`,
                  color: i % 2 === 0 ? '#4b5563' : '#9ca3af',
                  opacity: eaten ? 0 : 1,
                  transform: `translateY(-50%) scale(${eaten ? 0 : 1})`,
                  transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
                }}
              >
                {tag}
              </span>
            );
          })}

          {/* Revealed letters */}
          {LETTERS.map((letter, i) => {
            const revealed = revealedCount > i;
            const x = i * LETTER_SPACING;
            if (letter === ' ') return <span key={`letter-${i}`} />;
            return (
              <span
                key={`letter-${i}`}
                className="absolute top-1/2 font-black text-[#f9fafb] select-none"
                style={{
                  left: `${x}px`,
                  fontSize: '7rem',
                  lineHeight: 1,
                  opacity: revealed ? 1 : 0,
                  transform: `translateY(-50%) scale(${revealed ? 1 : 0.3})`,
                  filter: revealed ? 'blur(0px)' : 'blur(6px)',
                  transition:
                    'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.3s ease-out',
                }}
              >
                {letter}
              </span>
            );
          })}

          {/* Pac-Man : s'arrête à la position du O et ferme sa bouche pour devenir le "O" */}
          <div
            className="absolute top-1/2"
            style={{
              left: started ? undefined : `${-PACMAN_SIZE}px`,
              transform: 'translateY(-50%)',
              width: `${PACMAN_SIZE}px`,
              height: `${PACMAN_SIZE}px`,
              animation: started
                ? `pacman-move ${TOTAL_DURATION}ms linear forwards`
                : 'none',
            }}
          >
            <div className="relative w-full h-full">
              <div
                className="absolute w-full h-1/2 bg-[#f9fafb] top-0 rounded-t-full origin-bottom shadow-[0_0_30px_rgba(249,250,251,0.15)]"
                style={{
                  animation: isFinished ? 'none' : 'bite-top 0.3s ease-in-out infinite',
                  transform: isFinished ? 'rotate(0deg)' : undefined,
                  transition: isFinished ? 'transform 0.4s ease-out' : undefined,
                }}
              />
              <div
                className="absolute w-full h-1/2 bg-[#f9fafb] bottom-0 rounded-b-full origin-top shadow-[0_0_30px_rgba(249,250,251,0.15)]"
                style={{
                  animation: isFinished ? 'none' : 'bite-bottom 0.3s ease-in-out infinite',
                  transform: isFinished ? 'rotate(0deg)' : undefined,
                  transition: isFinished ? 'transform 0.4s ease-out' : undefined,
                }}
              />
              <div className="absolute top-[26%] left-[38%] w-3.5 h-3.5 bg-[#030712] rounded-full z-20" />
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes bite-top {
            0%, 100% { transform: rotate(-22deg); }
            50% { transform: rotate(0deg); }
          }
          @keyframes bite-bottom {
            0%, 100% { transform: rotate(22deg); }
            50% { transform: rotate(0deg); }
          }
          @keyframes pacman-move {
            0% { left: ${-PACMAN_SIZE}px; }
            100% { left: ${TOTAL_DISTANCE}px; }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
