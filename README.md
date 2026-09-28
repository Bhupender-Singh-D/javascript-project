# JavaScript Playground

A responsive, vanilla HTML/CSS/JavaScript playground with small DOM examples,
Tic-Tac-Toe, Rock–Paper–Scissors, a random cat fact viewer, and a currency
converter. It does not require a bundler or framework.

## Features

- DOM and event-handling examples, including a date display and theme switcher
- Accessible Tic-Tac-Toe with win, draw, reset, and new-game states
- Rock–Paper–Scissors with live score updates
- Cat facts fetched from the Cat Facts API
- Currency conversion with country flags and input/API error feedback
- Responsive layouts for phone, tablet, and desktop viewports

## Technology

- HTML5, CSS3, and ES modules in browser-native JavaScript
- [Font Awesome](https://cdnjs.com/libraries/font-awesome) for the converter icon
- [Cat Facts API](https://catfact.ninja/) and the public currency API at
  `2024-03-06.currency-api.pages.dev`
- [FlagsAPI](https://flagsapi.com/) for currency-country flags

## Folder structure

```text
.
├── .vscode/settings.json       # Live Server port configuration
├── css/style.css               # Responsive site styles
├── js/
│   ├── app.js                  # DOM examples and theme toggle
│   ├── cat-facts.js            # Cat Facts API UI
│   ├── currency-converter.js   # Currency converter UI/API handling
│   ├── currency-countries.js   # Currency-to-country mapping
│   ├── game-logic.js           # Pure, testable game logic
│   ├── rock-paper-scissors.js  # Rock–Paper–Scissors UI
│   └── tic-tac-toe.js          # Tic-Tac-Toe UI
├── tests/game-logic.test.js    # Node functional tests
├── index.html                  # Application entry point
└── javascript-project.zip      # Original source backup (not used at runtime)
```

## Run locally

Serve the repository root over HTTP; do not open `index.html` directly with a
`file://` URL because the project loads ES modules and remote APIs.

### VS Code Live Server

1. Open this repository in VS Code.
2. Open `index.html`.
3. Choose **Go Live** (or use the Live Server extension command).
4. The included setting uses port `5502`, so browse to
   `http://127.0.0.1:5502/`.

### Python HTTP server

```bash
python3 -m http.server 5502
```

Then open <http://127.0.0.1:5502/>.

## Development notes

- The project intentionally uses no front-end framework or build step.
- API requests display loading and error states. Internet access is required for
  cat facts, exchange rates, and flag images.
- `javascript-project.zip` is retained only as the requested original backup.
  The extracted source files are the development source of truth.

## Checks

```bash
npm install
npm test
npm run lint
find js -name '*.js' -print0 | xargs -0 -n1 node --check
```
