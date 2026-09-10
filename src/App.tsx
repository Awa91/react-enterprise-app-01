import { useState, useEffect } from 'react';
import heroImg from './assets/hero.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';

// Feature Components & Stores
import { useAccessibilityStore } from './features/accessibility/presentation/useAccessibilityStore';
import { AccessibilityToolbar } from './features/accessibility/component/accessibility_toolbar';

function App() {
  const [count, setCount] = useState(0);
  const applySettingsToDOM = useAccessibilityStore((state) => state.applySettingsToDOM);

  // Re-apply persisted settings to DOM root on initial load
  useEffect(() => {
    applySettingsToDOM();
  }, [applySettingsToDOM]);

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* Top Accessibility Settings Bar */}
      <AccessibilityToolbar />

      {/* Main Content Layout */}
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        <section id="center" className="flex flex-col items-center text-center space-y-6">
          <div className="hero flex items-center justify-center gap-4">
            <img src={heroImg} className="base" width="170" height="179" alt="" />
            <img src={reactLogo} className="framework h-16 w-16" alt="React logo" />
            <img src={viteLogo} className="vite h-16 w-16" alt="Vite logo" />
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Get started</h1>
            <p className="text-slate-600 dark:text-slate-400">
              Edit <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">src/App.tsx</code> and save to test <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">HMR</code>
            </p>
          </div>

          <button
            type="button"
            className="counter px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </button>
        </section>

        <hr className="border-slate-200 dark:border-slate-800" />

        <section id="next-steps" className="grid md:grid-cols-2 gap-8">
          {/* Documentation Section */}
          <div id="docs" className="space-y-4 p-6 border border-slate-200 dark:border-slate-800 rounded-xl">
            <div className="flex items-center gap-2">
              <svg className="icon w-6 h-6 text-blue-600" role="presentation" aria-hidden="true">
                <use href="/icons.svg#documentation-icon"></use>
              </svg>
              <h2 className="text-xl font-bold">Documentation</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400">Your questions, answered</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://vite.dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <img className="logo w-4 h-4" src={viteLogo} alt="" />
                  Explore Vite
                </a>
              </li>
              <li>
                <a
                  href="https://react.dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <img className="button-icon w-4 h-4" src={reactLogo} alt="" />
                  Learn more
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div id="social" className="space-y-4 p-6 border border-slate-200 dark:border-slate-800 rounded-xl">
            <div className="flex items-center gap-2">
              <svg className="icon w-6 h-6 text-blue-600" role="presentation" aria-hidden="true">
                <use href="/icons.svg#social-icon"></use>
              </svg>
              <h2 className="text-xl font-bold">Connect with us</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400">Join the Vite community</p>
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <a
                  href="https://github.com/vitejs/vite"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <svg className="button-icon w-4 h-4" role="presentation" aria-hidden="true">
                    <use href="/icons.svg#github-icon"></use>
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://chat.vite.dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <svg className="button-icon w-4 h-4" role="presentation" aria-hidden="true">
                    <use href="/icons.svg#discord-icon"></use>
                  </svg>
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/vite_js"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <svg className="button-icon w-4 h-4" role="presentation" aria-hidden="true">
                    <use href="/icons.svg#x-icon"></use>
                  </svg>
                  X.com
                </a>
              </li>
              <li>
                <a
                  href="https://bsky.app/profile/vite.dev"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <svg className="button-icon w-4 h-4" role="presentation" aria-hidden="true">
                    <use href="/icons.svg#bluesky-icon"></use>
                  </svg>
                  Bluesky
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;