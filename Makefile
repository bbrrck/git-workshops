.PHONY: all preview render publish

# Default target
all: render 

# Quarto: Preview
preview:
		quarto preview --no-navigate --no-browser --port 4200

# Quarto: Render
render:
		quarto render --cache-refresh --execute

# Quarto: Publish to Github pages
publish:
		quarto publish gh-pages --no-browser --no-render --no-prompt
