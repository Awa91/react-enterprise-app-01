import { useState, useEffect } from 'react';
import heroImg from './assets/hero.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import { useAccessibilityStore } from './features/accessibility/presentation/useAccessibilityStore';

function App() {
  const [count, setCount] = useState(0);

  // Accessibility Store Actions & State
  const {
    highContrast,
    reduceMotion,
    fontSizeMultiplier,
    toggleHighContrast,
    toggleReduceMotion,
    setFontSizeMultiplier,
    applySettingsToDOM,
  } = useAccessibilityStore();

  // Apply persisted DOM attributes on mount
  useEffect(() => {
    applySettingsToDOM();
  }, [applySettingsToDOM]);

  return (
    <>
      {/* Accessibility Control Toolbar */}
      <header role="banner" style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <nav aria-label="Accessibility Settings">
          <fieldset style={{ display: 'flex', gap: '1rem', alignItems: 'center', border: 'none' }}>
            <legend className="sr-only">Accessibility Controls</legend>

            <button
              type="button"
              onClick={toggleHighContrast}
              aria-pressed={highContrast}
            >
              {highContrast ? 'Disable High Contrast' : 'Enable High Contrast'}
            </button>

            <button
              type="button"
              onClick={toggleReduceMotion}
              aria-pressed={reduceMotion}
            >
              {reduceMotion ? 'Disable Reduce Motion' : 'Enable Reduce Motion'}
            </button>

            <label htmlFor="font-scale-select">Text Size:</label>
            <select
              id="font-scale-select"
              value={fontSizeMultiplier}
              onChange={(e) => setFontSizeMultiplier(Number(e.target.value) as 1 | 1.125 | 1.25 | 1.5)}
            >
              <option value={1}>100% (Default)</option>
              <option value={1.125}>112.5%</option>
              <option value={1.25}>125%</option>
              <option value={1.5}>150%</option>
            </select>
          </fieldset>
        </nav>
      </header>

      <main>
        <section id="center">
          <div className="hero">
            <img src={heroImg} className="base" width="170" height="179" alt="" />
            <img src={reactLogo} className="framework" alt="React logo" />
            <img src={viteLogo} className="vite" alt="Vite logo" />
          </div>
          <div>
            <h1>Get started</h1>
            <p>
              Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
            </p>
          </div>
          <button
            type="button"
            className="counter"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </button>
        </section>

        <div className="ticks"></div>

        <section id="next-steps">
          <div id="docs">
            <svg className="icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#documentation-icon"></use>
            </svg>
            <h2>Documentation</h2>
            <p>Your questions, answered</p>
            <ul>
              <li>
                <a href="https://vite.dev/" target="_blank" rel="noreferrer">
                  <img className="logo" src={viteLogo} alt="" />
                  Explore Vite
                </a>
              </li>
              <li>
                <a href="https://react.dev/" target="_blank" rel="noreferrer">
                  <img className="button-icon" src={reactLogo} alt="" />
                  Learn more
                </a>
              </li>
            </ul>
          </div>
          <div id="social">
            <svg className="icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#social-icon"></use>
            </svg>
            <h2>Connect with us</h2>
            <p>Join the Vite community</p>
            <ul>
              <li>
                <a href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer">
                  <svg className="button-icon" role="presentation" aria-hidden="true">
                    <use href="/icons.svg#github-icon"></use>
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://chat.vite.dev/" target="_blank" rel="noreferrer">
                  <svg className="button-icon" role="presentation" aria-hidden="true">
                    <use href="/icons.svg#discord-icon"></use>
                  </svg>
                  Discord
                </a>
              </li>
              <li>
                <a href="https://x.com/vite_js" target="_blank" rel="noreferrer">
                  <svg className="button-icon" role="presentation" aria-hidden="true">
                    <use href="/icons.svg#x-icon"></use>
                  </svg>
                  X.com
                </a>
              </li>
              <li>
                <a href="https://bsky.app/profile/vite.dev" target="_blank" rel="noreferrer">
                  <svg className="button-icon" role="presentation" aria-hidden="true">
                    <use href="/icons.svg#bluesky-icon"></use>
                  </svg>
                  Bluesky
                </a>
              </li>
            </ul>
          </div>
        </section>

        <div className="ticks"></div>
        <section id="spacer"></section>
      </main>
    </>
  );
}

export default App;