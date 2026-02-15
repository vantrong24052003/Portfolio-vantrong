import React, { useState, useEffect, useCallback } from 'react'
import './i18n';

import { OverviewScene } from '@/features/overview'
import { JourneyScene } from '@/features/journey'
import { ShowcaseScene } from '@/features/showcase'
import { ConnectionScene } from '@/features/connection'
import { SystemHeader, scenes, SceneNavigation } from '@/layouts'
import { ThemeSwitcher } from '@/features/theme/components/ThemeSwitcher/ThemeSwitcher'
import { LanguageSwitcher } from '@/layouts/LanguageSwitcher'
import { CameraWarpContainer } from '@/shared/components/Motion/CameraWarpContainer'

const App: React.FC = () => {
  const [currentScene, setCurrentScene] = useState(0)
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
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleSceneChange(currentScene + 1);
      } else if (e.key === 'ArrowLeft') {
        handleSceneChange(currentScene - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentScene, handleSceneChange]);

  const renderScene = () => {
    switch (currentScene) {
      case 0: return <OverviewScene onContactClick={() => setCurrentScene(3)} />;
      case 1: return <JourneyScene />;
      case 2: return <ShowcaseScene />;
      case 3: return <ConnectionScene />;
      default: return <OverviewScene />;
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 overflow-hidden text-balance">
      <SystemHeader currentScene={currentScene} onSceneChange={setCurrentScene} />

      <div className="h-screen overflow-y-auto overflow-x-hidden custom-scrollbar pt-16">
        <CameraWarpContainer sceneKey={currentScene}>
          {renderScene()}
        </CameraWarpContainer>
      </div>

      <SceneNavigation
        onNext={() => handleSceneChange(currentScene + 1)}
        onPrev={() => handleSceneChange(currentScene - 1)}
      />

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
