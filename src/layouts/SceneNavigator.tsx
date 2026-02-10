import React from 'react';
import { scenes } from './constants';


export interface SceneNavigatorProps {
  currentScene: number;
  onSceneChange: (sceneId: number) => void;
}

export const SceneNavigator: React.FC<SceneNavigatorProps> = ({ currentScene, onSceneChange }) => {

  return (
    <nav className="fixed top-0 w-full z-50 h-20 bg-background-dark/50 backdrop-blur-md border-b border-primary/10">
      <div className="w-full px-6 md:px-12 lg:px-24 h-full flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold tracking-[0.2em] text-white uppercase drop-shadow-md">
            ĐOÀN VÕ VĂN TRỌNG
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-[10px] font-mono tracking-[0.3em]">
          {scenes.map((scene) => (
            <button
              key={scene.id}
              onClick={() => onSceneChange(scene.id)}
              className={`transition - all duration - 300 hover: text - primary ${currentScene === scene.id ? 'text-primary font-bold border-b border-primary/50 pb-1' : 'text-gray-400'
                } `}
            >
              SCENE 0{scene.id + 1}: {scene.label}
            </button>
          ))}
        </div>

        {/* Mobile Nav Toggle Placeholder */}
        <div className="md:hidden">
          <span className="text-primary font-bold text-xs font-mono">SCENE 0{currentScene + 1}</span>
        </div>
      </div>
    </nav>
  );
};
