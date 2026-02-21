import React, { useState, useEffect, useCallback, useRef } from 'react'
import './i18n';

import { OverviewScene } from '@/features/overview'
import { JourneyScene } from '@/features/journey'
import { ShowcaseScene } from '@/features/showcase'
import { ConnectionScene } from '@/features/connection'
import { SystemHeader, scenes, GlobalBackground } from '@/layouts'
import { ThemeSwitcher } from '@/features/theme/components/ThemeSwitcher/ThemeSwitcher'
import { LanguageSwitcher } from '@/layouts/LanguageSwitcher'

const App: React.FC = () => {
  const [currentScene, setCurrentScene] = useState(0)
  const isScrollingManually = useRef(false);

  const scrollToScene = useCallback((idx: number) => {
    const section = document.getElementById(`scene-${idx}`);
    if (section) {
      isScrollingManually.current = true;
      setCurrentScene(idx);
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Reset manual scroll flag after animation
      setTimeout(() => {
        isScrollingManually.current = false;
      }, 1000);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingManually.current) return;

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      scenes.forEach((_, idx) => {
        const section = document.getElementById(`scene-${idx}`);
        if (section) {
          const { paddingTop } = window.getComputedStyle(section);
          const top = section.offsetTop - parseInt(paddingTop);
          const bottom = top + section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < bottom) {
            setCurrentScene(idx);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30 text-balance overflow-x-hidden">
      <GlobalBackground />

      <SystemHeader currentScene={currentScene} onSceneChange={scrollToScene} />

      <main className="relative z-10">
        <section id="scene-0" className="min-h-screen flex items-center justify-center">
          <OverviewScene onContactClick={() => scrollToScene(3)} />
        </section>

        <section id="scene-1" className="min-h-screen flex items-center justify-center">
          <JourneyScene />
        </section>

        <section id="scene-2" className="min-h-screen flex items-center justify-center">
          <ShowcaseScene />
        </section>

        <section id="scene-3" className="min-h-screen flex items-center justify-center">
          <ConnectionScene />
        </section>
      </main>

      <div className="fixed bottom-8 right-8 z-50 flex flex-col sm:flex-row items-center gap-4">
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>

        <div className="hidden sm:flex items-center gap-2 bg-card/80 backdrop-blur-md border border-border rounded-full px-4 py-2">
          <span className="text-primary font-mono text-sm font-bold">{String(currentScene + 1).padStart(2, '0')}</span>
          <span className="text-muted-foreground font-mono text-xs">/</span>
          <span className="text-muted-foreground font-mono text-sm">{String(scenes.length).padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  )
}

export default App
