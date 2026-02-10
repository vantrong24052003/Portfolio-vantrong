import React, { useState, useEffect, useCallback, useRef } from 'react'

import { OverviewScene } from '@/features/overview'
import { JourneyScene } from '@/features/journey'
import { ShowcaseScene } from '@/features/showcase'
import { ConnectionScene } from '@/features/connection'
import { SceneNavigator, scenes } from '@/layouts'

const App: React.FC = () => {
  const [currentScene, setCurrentScene] = useState(0)
  const isScrolling = useRef(false);

  const handleSceneChange = useCallback((newScene: number) => {
    if (newScene >= 0 && newScene < scenes.length) {
      setCurrentScene(newScene);
    }
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
      }, 1000);
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
    <div className="min-h-screen bg-background-dark text-white selection:bg-primary/30 overflow-hidden">
      <SceneNavigator currentScene={currentScene} onSceneChange={setCurrentScene} />

      {/* Scene Container with transition */}
      <div key={currentScene} className="animate-in fade-in duration-1000 h-screen">
        {renderScene()}
      </div>

      {/* Footer Status */}
      <footer className="fixed bottom-0 w-full z-50 p-6 pointer-events-none">
        <div className="mx-auto flex justify-between items-end px-12">
          <div className="text-[10px] font-mono text-gray-500 bg-background-dark/80 px-2 py-1 rounded backdrop-blur-sm pointer-events-auto">
            SYSTEM: ONLINE // v2.4.0-build
          </div>
          <div className="hidden md:block text-[10px] font-mono text-gray-600 uppercase tracking-widest bg-background-dark/80 px-2 py-1 rounded backdrop-blur-sm pointer-events-auto">
            Build for Scalability // D.V.V. Trong
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
