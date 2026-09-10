import React from 'react';
import type { FontSizeMultiplier } from '../domain/accessibility';
import { useAccessibilityStore } from '../presentation/useAccessibilityStore';

export const AccessibilityToolbar: React.FC = () => {
  const {
    highContrast,
    reduceMotion,
    fontSizeMultiplier,
    toggleHighContrast,
    toggleReduceMotion,
    setFontSizeMultiplier,
    resetSettings,
  } = useAccessibilityStore();

  const fontSizes: { label: string; value: FontSizeMultiplier }[] = [
    { label: '100%', value: 1 },
    { label: '112.5%', value: 1.125 },
    { label: '125%', value: 1.25 },
    { label: '150%', value: 1.5 },
  ];

  return (
    <aside
      aria-label="Accessibility Settings"
      aria-describedby="a11y-toolbar-desc"
      className="bg-slate-100 text-slate-900 border-b border-slate-300 p-3 dark:bg-slate-900 dark:text-slate-100 dark:border-slate-800"
    >
      <p id="a11y-toolbar-desc" className="sr-only">
        Use these controls to adjust high contrast mode, reduce animations, and resize application text.
      </p>

      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm font-medium">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-semibold tracking-wide uppercase text-xs text-slate-600 dark:text-slate-400">
            Accessibility Options
          </span>

          {/* High Contrast Toggle */}
          <button
            type="button"
            onClick={toggleHighContrast}
            aria-pressed={highContrast}
            className={`px-3 py-1.5 rounded-md border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
              highContrast
                ? 'bg-black text-yellow-300 border-yellow-300 font-bold'
                : 'bg-white border-slate-300 hover:bg-slate-50 text-slate-800 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200'
            }`}
          >
            {highContrast ? 'High Contrast: On' : 'High Contrast: Off'}
          </button>

          {/* Reduce Motion Toggle */}
          <button
            type="button"
            onClick={toggleReduceMotion}
            aria-pressed={reduceMotion}
            className={`px-3 py-1.5 rounded-md border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
              reduceMotion
                ? 'bg-blue-700 text-white border-blue-800 font-bold'
                : 'bg-white border-slate-300 hover:bg-slate-50 text-slate-800 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200'
            }`}
          >
            {reduceMotion ? 'Reduce Motion: On' : 'Reduce Motion: Off'}
          </button>

          {/* Font Scaling Options */}
          <div className="flex items-center gap-1.5 border-l border-slate-300 pl-3 dark:border-slate-700" role="radiogroup" aria-label="Text Scaling">
            <span id="font-scale-label" className="text-xs text-slate-600 dark:text-slate-400 mr-1">
              Text Size:
            </span>
            {fontSizes.map(({ label, value }) => {
              const isSelected = fontSizeMultiplier === value;
              return (
                <button
                  key={value}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => setFontSizeMultiplier(value)}
                  className={`px-2.5 py-1 text-xs rounded border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 font-bold'
                      : 'bg-white border-slate-300 hover:bg-slate-50 text-slate-800 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Reset Settings Action */}
        <button
          type="button"
          onClick={resetSettings}
          className="text-xs underline underline-offset-4 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Reset Defaults
        </button>
      </div>
    </aside>
  );
};