# Git Workshops

Materials for Git Workshops presented by Tibor Stanko.

## Past Sessions

### Git Basics

- September 13, 2022 (Aj Ty v IT, 1x3h)
- October 18 & 20, 2022 (Aj Ty v IT, 2x2h)
- December 7-8, 2022 (Zurich internal, 2x2h)
- April 19-20, 2023 (Zurich internal, 2x2h)
- October 11-12, 2023 (Zurich internal, 2x2h)
- January 24-25, 2024 (Zurich internal, 2x2h)
- January 15-16, 2025 (Zurich internal, 2x2h)
- January 20-21, 2026 (Zurich internal, 2x2h)

### Git Advanced

- October 18, 2023 (Zurich internal, 1x3h)
- January 30-31, 2024 (Zurich internal, 2x2h)
- January 22-23, 2025 (Zurich internal, 2x2h)
- January 27-28, 2025 (Zurich internal, 2x2h)

## Development

### Prerequisites

- [Quarto](https://quarto.org/) - Install from [quarto.org](https://quarto.org/docs/get-started/)
- [Just](https://github.com/casey/just) - A modern command runner

### Installing Just

**macOS:**

```bash
brew install just
```

**Linux:**

```bash
# Arch Linux
pacman -S just

# Ubuntu/Debian (via Cargo)
cargo install just
```

**Windows:**

```powershell
# Using Scoop
scoop install just

# Using Chocolatey
choco install just
```

For other installation methods, see the [official Just documentation](https://github.com/casey/just#installation).

### Available Tasks

List all available tasks:

```bash
just --list
```

Common tasks:

```bash
# Render all slides (default)
just
just render

# Preview slides locally
just preview

# Render a specific slide file
just render-file slides/git-basics-sk.qmd

# Render only basics slides
just render-basics

# Render only advanced slides
just render-advanced

# Render index page
just render-index

# Publish to GitHub Pages
just publish

# Clean build artifacts
just clean
```

### Task Details

- **`render`** - Renders all Quarto content with cache refresh and execution enabled
- **`preview`** - Starts a local preview server on port 4200 (no browser auto-open)
- **`render-file <file>`** - Renders a specific `.qmd` file
- **`render-basics`** - Renders both EN and SK basics slides
- **`render-advanced`** - Renders both EN and SK advanced slides
- **`render-index`** - Renders the index page only
- **`publish`** - Publishes rendered content to GitHub Pages
- **`clean`** - Removes `_site` and `.quarto` directories

## TODO

- creating tags with description
- git hooks
- cloning repo such that all objects are unpacked
