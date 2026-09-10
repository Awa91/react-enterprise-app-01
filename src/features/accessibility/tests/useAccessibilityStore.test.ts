import { describe, it, expect, beforeEach } from 'vitest';
import { useAccessibilityStore } from '../presentation/useAccessibilityStore';

describe('useAccessibilityStore Unit Tests', () => {
  beforeEach(() => {
    useAccessibilityStore.getState().resetSettings();
  });

  it('initializes with default settings', () => {
    const state = useAccessibilityStore.getState();
    expect(state.highContrast).toBe(false);
    expect(state.fontSizeMultiplier).toBe(1);
    expect(state.reduceMotion).toBe(false);
  });

  it('toggles high contrast mode and updates DOM root element', () => {
    useAccessibilityStore.getState().toggleHighContrast();

    expect(useAccessibilityStore.getState().highContrast).toBe(true);
    expect(document.documentElement.classList.contains('high-contrast')).toBe(true);

    useAccessibilityStore.getState().toggleHighContrast();

    expect(useAccessibilityStore.getState().highContrast).toBe(false);
    expect(document.documentElement.classList.contains('high-contrast')).toBe(false);
  });

  it('updates font size multiplier and adjusts root element font size', () => {
    useAccessibilityStore.getState().setFontSizeMultiplier(1.25);

    expect(useAccessibilityStore.getState().fontSizeMultiplier).toBe(1.25);
    expect(document.documentElement.style.fontSize).toBe('125%');
  });

  it('toggles reduce motion setting and applies DOM class', () => {
    useAccessibilityStore.getState().toggleReduceMotion();

    expect(useAccessibilityStore.getState().reduceMotion).toBe(true);
    expect(document.documentElement.classList.contains('reduce-motion')).toBe(true);
  });

  it('resets settings to default and clears DOM properties', () => {
    useAccessibilityStore.getState().toggleHighContrast();
    useAccessibilityStore.getState().setFontSizeMultiplier(1.5);

    useAccessibilityStore.getState().resetSettings();

    const state = useAccessibilityStore.getState();
    expect(state.highContrast).toBe(false);
    expect(state.fontSizeMultiplier).toBe(1);
    expect(document.documentElement.classList.contains('high-contrast')).toBe(false);
    expect(document.documentElement.style.fontSize).toBe('100%');
  });
});