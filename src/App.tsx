import React, { useEffect, useState } from 'react';
import { Twitter, Send } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#111111] text-white font-mono">
      {/* SECTION 1 - HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center px-8 relative overflow-hidden">
        <div className="fade-section" style={{
          opacity: Math.max(0, 1 - scrollY / window.innerHeight)
        }}>
          <div className="text-center space-y-12">
            <h1 className="text-xl md:text-2xl font-light tracking-wider mb-16">
              THE RUN NEVER ENDED.
            </h1>
            
            {/* Animated T-Rex */}
            <div className="flex justify-center mb-16">
              <div className="animated-trex-container">
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
          opacity: scrollY > window.innerHeight * 1.5 && scrollY < window.innerHeight * 2.5 ? 1 : 0,
          transition: 'opacity 0.8s ease-in-out'
        }}>
          <div className="text-center">
            <span className="text-4xl md:text-6xl font-light">_</span>
          </div>
        </div>
      </section>

      {/* SECTION 4 - MANIFESTO */}
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="fade-section" style={{
          opacity: scrollY > window.innerHeight * 2.5 && scrollY < window.innerHeight * 3.5 ? 1 : 0,
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