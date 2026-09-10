import { create } from 'zustand';
import type { AccessibilitySettings, FontSizeMultiplier } from '../domain/accessibility';


interface AccessibilityState extends AccessibilitySettings {
  toggleHighContrast: () => void;
  setFontSizeMultiplier: (multiplier: FontSizeMultiplier) => void;
  toggleReduceMotion: () => void;
  resetSettings: () => void;
  applySettingsToDOM: () => void;
}

const DEFAULT_SETTINGS: AccessibilitySettings = {
  highContrast: false,
  fontSizeMultiplier: 1,
  reduceMotion: false,
};

export const useAccessibilityStore = create<AccessibilityState>((set, get) => ({
  ...DEFAULT_SETTINGS,

  toggleHighContrast: () => {
    set((state) => {
      const nextHighContrast = !state.highContrast;
      document.documentElement.classList.toggle('high-contrast', nextHighContrast);
      return { highContrast: nextHighContrast };
    });
  },

  setFontSizeMultiplier: (multiplier: FontSizeMultiplier) => {
    set(() => {
      document.documentElement.style.fontSize = `${multiplier * 100}%`;
      return { fontSizeMultiplier: multiplier };
    });
  },

  toggleReduceMotion: () => {
    set((state) => {
      const nextReduceMotion = !state.reduceMotion;
      document.documentElement.classList.toggle('reduce-motion', nextReduceMotion);
      return { reduceMotion: nextReduceMotion };
    });
  },

  resetSettings: () => {
    set(DEFAULT_SETTINGS);
    document.documentElement.classList.remove('high-contrast', 'reduce-motion');
    document.documentElement.style.fontSize = '100%';
  },

  applySettingsToDOM: () => {
    const { highContrast, fontSizeMultiplier, reduceMotion } = get();
    document.documentElement.classList.toggle('high-contrast', highContrast);
    document.documentElement.classList.toggle('reduce-motion', reduceMotion);
    document.documentElement.style.fontSize = `${fontSizeMultiplier * 100}%`;
  },
}));