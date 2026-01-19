# Default task: render
default: render

# Preview slides with Quarto
preview:
    quarto preview --no-navigate --no-browser --port 4200

# Render all slides with cache refresh
render:
    quarto render --cache-refresh --execute

# Publish to GitHub Pages
publish:
    quarto publish gh-pages --no-browser --no-render --no-prompt

# Render a specific slide file
render-file file:
    quarto render {{file}}

# Render all basics slides
render-basics:
    quarto render slides/git-basics-en.qmd
    quarto render slides/git-basics-sk.qmd

# Render all advanced slides
render-advanced:
    quarto render slides/git-advanced-en.qmd
    quarto render slides/git-advanced-sk.qmd

# Render index page
render-index:
    quarto render index.qmd

# Clean build artifacts
clean:
    rm -rf _site .quarto

# List all available tasks
list:
    @just --list
