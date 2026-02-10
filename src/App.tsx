import React, { useState, useEffect, useCallback, useRef } from 'react'
import './i18n';

import { OverviewScene } from '@/features/overview'
import { JourneyScene } from '@/features/journey'
import { ShowcaseScene } from '@/features/showcase'
import { ConnectionScene } from '@/features/connection'
import { SceneNavigator, scenes } from '@/layouts'
import { ThemeSwitcher } from '@/features/theme/components/ThemeSwitcher/ThemeSwitcher'
import { LanguageSwitcher } from '@/layouts/LanguageSwitcher'

const App: React.FC = () => {
  const [currentScene, setCurrentScene] = useState(0)
  const isScrolling = useRef(false);

  const handleSceneChange = useCallback((newScene: number) => {
    let targetScene = newScene;
    if (newScene >= scenes.length) {
      targetScene = 0;
    } else if (newScene < 0) {
      targetScene = scenes.length - 1;
    }
    setCurrentScene(targetScene);
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;

      if (Math.abs(e.deltaY) < 30) return;

      isScrolling.current = true;
      if (e.deltaY > 0) {
        handleSceneChange(currentScene + 1);
      } else {
        handleSceneChange(currentScene - 1);
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 600);
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentScene, handleSceneChange]);

  const renderScene = () => {
    switch (currentScene) {
      case 0: return <OverviewScene />;
      case 1: return <JourneyScene />;
      case 2: return <ShowcaseScene />;
      case 3: return <ConnectionScene />;
      default: return <OverviewScene />;
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 overflow-hidden">
      <SceneNavigator currentScene={currentScene} onSceneChange={setCurrentScene} />

      <div key={currentScene} className="animate-in fade-in duration-1000 h-screen overflow-y-auto custom-scrollbar">
        {renderScene()}
      </div>

      <div className="fixed bottom-8 right-8 z-50 flex items-center gap-4">
        <LanguageSwitcher />
        <ThemeSwitcher />

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
