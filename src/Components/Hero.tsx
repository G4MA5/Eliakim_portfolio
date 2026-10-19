import React, { useState, useEffect } from 'react';
import { Github, Linkedin } from 'lucide-react';

const roles = [
  "Développeur Frontend",
  "Créateur d'expériences web",
];

const Hero: React.FC = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Trigger entrance animations after mount
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        setText(
          isDeleting
            ? currentRole.substring(0, text.length - 1)
            : currentRole.substring(0, text.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [text, roleIndex, isDeleting]);

  // Shared transition style helper
  const anim = (delay: number, direction: 'up' | 'down' | 'left' | 'right' | 'scale' = 'up', distance = 40): React.CSSProperties => {
    const transforms: Record<string, string> = {
      up: `translateY(${distance}px)`,
      down: `translateY(-${distance}px)`,
      left: `translateX(-${distance}px)`,
      right: `translateX(${distance}px)`,
      scale: `scale(0.8)`,
    };
    return {
      opacity: mounted ? 1 : 0,
      transform: mounted ? 'translate(0, 0) scale(1)' : transforms[direction],
      transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    };
  };

  return (
    <div className="min-h-screen lg:h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-100/50 relative overflow-hidden flex items-center pt-24 sm:pt-28 lg:pt-0 pb-16 lg:pb-0">
      {/* Hero Section */}
      <section className="container mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-6 sm:space-y-8 max-w-3xl">
            {/* Name - smooth curtain reveal */}
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[1.1]">
                <span
                  className="inline-block overflow-hidden py-1"
                >
                  <span
                    className="inline-block"
                    style={{
                      opacity: mounted ? 1 : 0,
                      transform: mounted ? 'translateY(0)' : 'translateY(100%)',
                      transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
                    }}
                  >
                    ASSALÉ
                  </span>
                </span>
                <br />
                <span className="text-gray-600 whitespace-nowrap inline-block overflow-hidden py-1">
                  <span
                    className="inline-block"
                    style={{
                      opacity: mounted ? 1 : 0,
                      transform: mounted ? 'translateY(0)' : 'translateY(100%)',
                      transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
                    }}
                  >
                    YAO ELIAKIM
                  </span>
                </span>
              </h1>
            </div>

            {/* Title - Typewriter, fades up */}
            <div style={anim(0.5, 'up')}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
                {text}
                <span className="inline-block w-[3px] h-[1em] bg-gray-900 ml-1 align-middle animate-pulse" />
              </h2>
              <div
                className="h-1.5 bg-gray-900 mt-3 origin-left"
                style={{
                  width: mounted ? '7rem' : '0rem',
                  transition: `width 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.7s`,
                }}
              />
            </div>

            {/* Description - fades up */}
            <p
              className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl"
              style={anim(0.7, 'up', 30)}
            >
              Passionné par la création d'expériences web exceptionnelles. Je transforme des idées complexes en applications React performantes et élégantes.
            </p>

            {/* Social Links - staggered pop-in */}
            <div className="flex gap-5 pt-4 sm:pt-6">
              {[
                { href: "https://github.com/stone2000e", icon: <Github size={24} /> },
                { href: "https://www.linkedin.com/in/yao-eliakim-assale-69224839a/", icon: <Linkedin size={24} /> },
                { 
                  href: "https://wa.me/2250172489331", 
                  icon: (
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  ) 
                },
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 hover:scale-110 transition-all duration-300"
                  style={anim(0.9 + i * 0.1, 'scale')}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* CTA Buttons - slide up staggered */}
            <div className="flex flex-wrap gap-4 sm:gap-5 pt-4 sm:pt-8">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-7 sm:px-9 py-3 sm:py-3.5 text-sm sm:text-base bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-200 hover:scale-105"
                style={anim(1.2, 'up', 25)}
              >
                Me contacter
              </button>
              <button
                onClick={() => document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-7 sm:px-9 py-3 sm:py-3.5 text-sm sm:text-base bg-white text-gray-900 border-2 border-gray-900 rounded-full font-medium hover:bg-gray-900 hover:text-white transition-all duration-200"
                style={anim(1.35, 'up', 25)}
              >
                Voir mes projets
              </button>
            </div>
          </div>

          {/* Right Side - Large Name Display */}
          <div
            className="fixed inset-0 flex items-center justify-center pointer-events-none -z-10"
            style={{
              opacity: mounted ? 0.1 : 0,
              transform: mounted ? 'scale(1)' : 'scale(0.9)',
              transition: 'opacity 1.5s ease-out 0.3s, transform 1.5s ease-out 0.3s',
            }}
          >
            <div className="relative">
              <h2 className="text-[25rem] xl:text-[35rem] font-bold text-gray-600">
                ELIAKIM
              </h2>
            </div>
          </div>

        </div>
      </section>

      {/* Decorative Elements - float in from edges with rotation */}
      {/* Top left square */}
      <div
        className="fixed top-32 left-8 w-48 h-48 bg-white/60 border-4 border-gray-300 -z-10"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'rotate(12deg) scale(1)' : 'rotate(-20deg) scale(0) translateX(-100px)',
          transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s',
        }}
      />
      
      {/* Bottom left small square */}
      <div
        className="fixed bottom-32 left-20 w-32 h-32 bg-white/50 border-4 border-gray-300 -z-10"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'rotate(-6deg) scale(1)' : 'rotate(30deg) scale(0) translateY(100px)',
          transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s',
        }}
      />

      {/* Bottom right square */}
      <div
        className="fixed bottom-20 right-12 w-36 h-36 bg-white/55 border-4 border-gray-300 -z-10"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'rotate(-12deg) scale(1)' : 'rotate(20deg) scale(0) translateX(100px)',
          transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 1s',
        }}
      />
      
      {/* Top right small square */}
      <div
        className="fixed top-24 right-1/4 w-28 h-28 bg-gray-100/45 border-4 border-gray-300 -z-10"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'rotate(6deg) scale(1)' : 'rotate(-15deg) scale(0) translateY(-80px)',
          transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.9s',
        }}
      />
      
      {/* Right side dots - pop in one by one */}
      <div className="fixed top-1/2 right-16 flex flex-col gap-3 -z-10">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-4 h-4 bg-gray-400 rounded-full"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'scale(1)' : 'scale(0)',
              transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${1.2 + i * 0.15}s`,
            }}
          />
        ))}
      </div>
      
      {/* Additional scattered squares */}
      <div
        className="fixed top-1/3 right-1/3 w-24 h-24 bg-white/45 border-4 border-gray-300 -z-10"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'rotate(12deg) scale(1)' : 'rotate(-30deg) scale(0)',
          transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 1.1s',
        }}
      />
      <div
        className="fixed bottom-1/3 left-1/3 w-20 h-20 bg-gray-100/40 border-4 border-gray-300 -z-10"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'rotate(-12deg) scale(1)' : 'rotate(25deg) scale(0)',
          transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 1.3s',
        }}
      />
    </div>
  );
};

export default Hero;