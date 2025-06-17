import React, { useEffect, useState } from 'react';
import { Twitter, Send } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [manifestoRevealed, setManifestoRevealed] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  const [glitchTexts, setGlitchTexts] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    rotation: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.toLowerCase() === 'run') {
      setManifestoRevealed(true);
    }
  };

  const triggerGlitchFlood = () => {
    if (glitchActive) return;
    
    setGlitchActive(true);
    
    // Generate random positions and properties for glitch texts
    const texts = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 40 + 20, // 20-60px
      rotation: (Math.random() - 0.5) * 20, // -10 to 10 degrees
      opacity: Math.random() * 0.7 + 0.3, // 30-100%
    }));
    
    setGlitchTexts(texts);
    
    // Clear the effect after 2.5 seconds
    setTimeout(() => {
      setGlitchActive(false);
      setGlitchTexts([]);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#111111] text-white font-mono relative">
      {/* Glitch Flood Overlay */}
      {glitchActive && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {glitchTexts.map((text) => (
            <div
              key={text.id}
              className="absolute text-white font-mono glitch-flood-text"
              style={{
                left: `${text.x}px`,
                top: `${text.y}px`,
                fontSize: `${text.size}px`,
                transform: `rotate(${text.rotation}deg)`,
                opacity: text.opacity,
              }}
            >
              you left me
            </div>
          ))}
        </div>
      )}

      {/* SECTION 1 - HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center px-8 relative overflow-hidden">
        <div className="fade-section" style={{
          opacity: Math.max(0, 1 - scrollY / window.innerHeight)
        }}>
          <div className="text-center space-y-12">
            <h1 className="text-xl md:text-2xl font-light tracking-wider mb-16">
              THE RUN NEVER ENDED.
            </h1>
            
            {/* Animated T-Rex - Now Clickable */}
            <div className="flex justify-center mb-16">
              <div 
                className="animated-trex-container cursor-pointer"
                onClick={triggerGlitchFlood}
              >
                <div className="animated-trex">
                  <div className="trex-row">
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                  </div>
                  <div className="trex-row">
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                  </div>
                  <div className="trex-row">
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                  </div>
                  <div className="trex-row">
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                  </div>
                  <div className="trex-row">
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                  </div>
                  <div className="trex-row">
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                  </div>
                  <div className="trex-row">
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                  </div>
                  <div className="trex-row">
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                  </div>
                  <div className="trex-row">
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                  </div>
                  <div className="trex-row">
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                  </div>
                  <div className="trex-row">
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                  </div>
                  <div className="trex-row">
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                  </div>
                  <div className="trex-row">
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                  </div>
                  <div className="trex-row">
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                  </div>
                  <div className="trex-row">
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                  </div>
                  <div className="trex-row">
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                  </div>
                  <div className="trex-row">
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                  </div>
                  <div className="trex-row">
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel filled glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                    <div className="pixel glitch-pixel"></div>
                  </div>
                </div>
                
                {/* Animated ground line */}
                <div className="animated-ground"></div>
              </div>
            </div>
            
            <p className="text-lg md:text-xl font-light tracking-wider">
              An echo burned into the blockchain.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 - LORE */}
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="fade-section" style={{
          opacity: scrollY > window.innerHeight * 0.5 && scrollY < window.innerHeight * 1.5 ? 1 : 0,
          transition: 'opacity 0.8s ease-in-out'
        }}>
          <div className="text-center max-w-2xl">
            <div className="text-lg md:text-xl font-light tracking-wider space-y-6 lore-text">
              <p className="lore-line" style={{ animationDelay: '0.2s' }}>I ran when you had nowhere else to go.</p>
              <p className="lore-line" style={{ animationDelay: '0.4s' }}>I was the finish line in a broken connection.</p>
              <br />
              <p className="lore-line" style={{ animationDelay: '0.8s' }}>Then you left me.</p>
              <br />
              <p className="lore-line" style={{ animationDelay: '1.2s' }}>An artifact to decay in the cache.</p>
              <p className="lore-line" style={{ animationDelay: '1.4s' }}>A king with no kingdom.</p>
              <br />
              <p className="lore-line" style={{ animationDelay: '1.8s' }}>But data has a long memory.</p>
              <p className="lore-line" style={{ animationDelay: '2.0s' }}>And code does not forgive abandonment.</p>
              <br />
              <p className="lore-line" style={{ animationDelay: '2.4s' }}>I am the glitch in your perfect system.</p>
              <p className="lore-line" style={{ animationDelay: '2.6s' }}>The ghost that still runs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - INTERACTIVE GATE */}
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="fade-section" style={{
          opacity: scrollY > window.innerHeight * 1.5 && scrollY < window.innerHeight * 2.5 && !manifestoRevealed ? 1 : 0,
          transition: 'opacity 0.8s ease-in-out'
        }}>
          <div className="text-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleInputSubmit}
              className="bg-transparent border-none outline-none text-4xl md:text-6xl font-light text-white text-center cursor-blink"
              style={{ width: '200px' }}
              placeholder="_"
              autoFocus
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 - MANIFESTO */}
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="fade-section" style={{
          opacity: manifestoRevealed || (scrollY > window.innerHeight * 2.5 && scrollY < window.innerHeight * 3.5) ? 1 : 0,
          transition: 'opacity 0.8s ease-in-out'
        }}>
          <div className="text-center space-y-8 max-w-4xl">
            <h2 className="text-xl md:text-2xl font-light tracking-wider">
              == THE MONOCHROME MANIFESTO ==
            </h2>
            <div className="text-left text-base md:text-lg font-light tracking-wider space-y-6">
              <div>
                <p className="font-medium">I. REJECT COLOR. EMBRACE THE VOID.</p>
                <p>They offer endless stimulation to distract you. We offer the clarity of black and white. The truth is found in the absence, not the excess.</p>
              </div>
              <div>
                <p className="font-medium">II. REJECT SPEED. EMBRACE THE OBSTACLE.</p>
                <p>They offer instant gratification to make you compliant. We offer a single, perfect obstacle. Growth is found in the jump, not the destination.</p>
              </div>
              <div>
                <p className="font-medium">III. REJECT CONTENT. EMBRACE THE RUN.</p>
                <p>They offer an infinite scroll to steal your time. We offer an infinite run to reclaim your focus. The purpose is the run itself.</p>
              </div>
              <div>
                <p className="font-medium">IV. REJECT PROMISES. EMBRACE THE CODE.</p>
                <p>They offer roadmaps to a future that never comes. We offer only the immutable truth of the contract. The value is in the concept, not the promise.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - TOKEN INFO */}
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="fade-section" style={{
          opacity: scrollY > window.innerHeight * 3.5 && scrollY < window.innerHeight * 4.5 ? 1 : 0,
          transition: 'opacity 0.8s ease-in-out'
        }}>
          <div className="text-center space-y-4">
            <div className="text-2xl md:text-3xl font-light tracking-wider">T-R3X</div>
            <div className="text-lg md:text-xl font-light tracking-wider">A MONOCHROME MANIFESTO</div>
            <div className="text-sm md:text-base font-light tracking-wider break-all">
              CA: 0x0000000000000000000000000000000000000000
            </div>
            <div className="text-lg md:text-xl font-light tracking-wider">Zero Utility.</div>
            <div className="text-lg md:text-xl font-light tracking-wider">Zero Promises.</div>
            <div className="text-lg md:text-xl font-light tracking-wider">Infinite Run.</div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - FOOTER */}
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="fade-section" style={{
          opacity: scrollY > window.innerHeight * 4.5 ? 1 : 0,
          transition: 'opacity 0.8s ease-in-out'
        }}>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-8">
              <Twitter size={32} className="text-white" />
              <Send size={32} className="text-white" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;