// Theme Switcher for Git Workshops
// Supports both regular pages and reveal.js slides

(function() {
  'use strict';

  // Get saved theme or default to light
  function getSavedTheme() {
    return localStorage.getItem('git-workshops-theme') || 'light';
  }

  // Save theme preference
  function saveTheme(theme) {
    localStorage.setItem('git-workshops-theme', theme);
  }

  // Apply theme to the page
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);

    // Update button icon if it exists
    const button = document.getElementById('theme-toggle');
    if (button) {
      // Simple circle icons - filled for dark mode, empty for light mode
      button.innerHTML = theme === 'dark'
        ? '<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="currentColor"/></svg>'
        : '<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" stroke-width="2"/></svg>';
      button.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
    }
  }

  // Toggle between light and dark
  function toggleTheme() {
    const currentTheme = getSavedTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    saveTheme(newTheme);
    applyTheme(newTheme);
  }

  // Initialize theme on page load
  function initTheme() {
    const savedTheme = getSavedTheme();

    // Create and add theme toggle button
    const button = document.createElement('button');
    button.id = 'theme-toggle';
    button.className = 'theme-toggle';
    button.onclick = toggleTheme;

    // Add button to the page
    document.body.appendChild(button);

    // Apply theme (this will also set the correct icon)
    applyTheme(savedTheme);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }
})();
