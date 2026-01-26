# Dark Theme Implementation

This document describes the dark theme implementation for the Git Workshops website.

## Features

- **Automatic theme persistence**: The selected theme is saved in browser localStorage and persists across sessions
- **Theme toggle button**: A floating button in the top-right corner allows users to switch between light and dark themes
- **Consistent theming**: Both the homepage and reveal.js slides support the same theme switching mechanism
- **Smooth transitions**: Theme changes are instant and apply to all page elements

## Files Added/Modified

### New Files

1. **`theme-switcher.js`** - JavaScript for theme switching functionality
   - Manages theme state in localStorage
   - Applies theme by setting `data-theme` attribute on document root
   - Creates and manages the theme toggle button

2. **`theme-switcher.css`** - Styles for the theme toggle button
   - Floating button with smooth animations
   - Adapts appearance based on current theme

### Modified Files

1. **`_quarto.yml`** - Main configuration
   - Added light/dark theme support for HTML pages (litera/darkly)
   - Included theme switcher CSS and JavaScript
   - Updated post-render script to copy theme files

2. **`slides/_metadata.yml`** - Slides configuration
   - Included theme switcher CSS and JavaScript for reveal.js slides

3. **`slides/static/style/slides.scss`** - Custom slide styles
   - Added CSS variables for theme-specific colors
   - Converted hardcoded colors to use CSS variables
   - Added dark theme color palette

## Color Scheme

### Light Theme
- Background: `#fff` (white)
- Text: `#222` (dark gray)
- Code background: `#f4e7c9` (cream)
- Info boxes: Light green background

### Dark Theme
- Background: `#191919` (near black)
- Text: `#e0e0e0` (light gray)
- Headings: `#ffffff` (white)
- Code background: `#3a3a3a` (dark gray)
- Info boxes: Dark green background

## Testing

To test the dark theme implementation:

1. Render the site:
   ```bash
   uv run quarto render
   ```

2. Preview the site:
   ```bash
   uv run quarto preview
   ```

3. Open your browser to the preview URL (typically http://localhost:4200)

4. Click the theme toggle button (🌙/☀️) in the top-right corner

5. Verify that:
   - The theme changes immediately
   - The button icon changes (moon for light theme, sun for dark theme)
   - All colors adapt appropriately
   - The theme persists when you refresh the page
   - The theme works on both the homepage and slide pages

## Browser Compatibility

The implementation uses:
- CSS custom properties (CSS variables)
- localStorage API
- Modern JavaScript (ES6+)

This should work in all modern browsers (Chrome, Firefox, Safari, Edge).

## Future Enhancements

Possible improvements:
- Add keyboard shortcut for theme switching (e.g., Ctrl+Shift+T)
- Add system preference detection (`prefers-color-scheme`)
- Add transition animations when switching themes
- Add more theme options (e.g., high contrast, sepia)
